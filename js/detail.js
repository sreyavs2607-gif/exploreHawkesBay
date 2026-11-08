/* =========================================================
   detail.js - JavaScript for Attraction Details (detail.html)
   Based on the "click an item to show its detail on another
   page, rate (like / dislike) and add a comment" demo.
   1. Get the place ID from localStorage and show the place
   2. Photo slideshow (Manual Slideshow demo: PREVIOUS / NEXT)
   3. Speak / Pause / Cancel (Text-to-Speech demo)
   4. Like / Dislike - only one vote allowed
   5. Add a comment
   6. Enquiry form (Homepage demo form)
   ========================================================= */

//---------------------------------------------
// 1. GET THE STORED PLACE ID (saved on the Places to Visit page)
let placeID = localStorage.getItem("placeID");
if (placeID == null) {
    placeID = 1;     // if nothing was saved, show Te Mata Peak
}
let place = places.find(item => item.id == placeID);
if (place == undefined) {
    // the saved ID does not match a place, so show the first place
    place = places[0];
    placeID = 1;
}
let categoryName = categories.find(category => category.id == place.category).name;

// Put the place information on the page
document.getElementById("breadcrumbName").innerHTML = place.name;
document.getElementById("placeName").innerHTML = place.name;
document.getElementById("placeCategory").innerHTML = categoryName;
document.getElementById("placeMeta").innerHTML = place.area + " - " + place.cost;
document.getElementById("placeDescription").innerHTML = place.description;

let highlightList = "";
for (let i = 0; i < place.highlights.length; i++) {
    highlightList += "<li>" + place.highlights[i] + "</li>";
}
document.getElementById("placeHighlights").innerHTML = highlightList;

// Google Map for this place (W3Schools Google Maps)
document.getElementById("placeMap").src = "https://maps.google.com/maps?q=" + place.mapQuery + "&z=13&output=embed";

//---------------------------------------------
// 2. PHOTO SLIDESHOW (Manual Slideshow demo: PREVIOUS / NEXT buttons)
let slideIndex = 0;     // initial slide = 0

// Change the image to match slideIndex and highlight its thumbnail
function updateSlide() {
    document.getElementById("manual-slide-image").src = place.gallery[slideIndex];
    document.getElementById("manual-slide-image").alt = place.alt;

    let thumbs = document.querySelectorAll(".thumb");
    for (let i = 0; i < thumbs.length; i++) {
        thumbs[i].classList.remove("activeThumb");
    }
    thumbs[slideIndex].classList.add("activeThumb");
}

function nextSlide() {
    // Change the slideIndex: go to the next photo, or back to the first
    slideIndex < place.gallery.length - 1 ? slideIndex++ : (slideIndex = 0);
    updateSlide();
}

function previousSlide() {
    // Change the slideIndex: go to the previous photo, or to the last
    slideIndex > 0 ? slideIndex-- : (slideIndex = place.gallery.length - 1);
    updateSlide();
}

// Clicking a small photo (the gallery in my wireframe) shows that photo
function goToSlide(n) {
    slideIndex = n;
    updateSlide();
}

// Make one small photo for each picture in the gallery
let thumbnails = "";
for (let i = 0; i < place.gallery.length; i++) {
    thumbnails += '<img class="thumb" src="' + place.gallery[i] + '" alt="Photo ' + (i + 1) + '" onclick="goToSlide(' + i + ')">';
}
document.getElementById("thumbRow").innerHTML = thumbnails;

// Hide the buttons and small photos if there is only one photo
if (place.gallery.length == 1) {
    document.getElementById("slideButtons").style.display = "none";
    document.getElementById("thumbRow").style.display = "none";
}
updateSlide();

//---------------------------------------------
// 3. TEXT TO SPEECH (W10 Text-to-Speech demo) - read the description out loud
let synth = window.speechSynthesis;
let utterance;

function speakText() {
    synth.cancel(); // Clear any ongoing speech
    let getText = document.getElementById('placeDescription').textContent;
    // Use API: Text To Speech to convert getText to voice
    utterance = new SpeechSynthesisUtterance(getText);
    // Adjust the speaker properties
    utterance.lang = 'en-NZ';
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;
    synth.speak(utterance);
}

let pausedStatus = false; // default is false
function toggle(button) {
    if (!pausedStatus) {
        synth.pause();
        pausedStatus = true;
        button.innerHTML = "&#x23EF; RESUME";
    } else {
        synth.resume();
        pausedStatus = false;
        button.innerHTML = "&#10074;&#10074; PAUSE";
    }
}

function cancel() {
    synth.cancel();
}

//---------------------------------------------
// 4. VOTE - RULE: allow only one vote, like OR dislike
let currentVotes = {like: votes.find(item => item.id == placeID).like,
                    dislike: votes.find(item => item.id == placeID).dislike};
let voteStatus = {like: false, dislike: false};

document.getElementById("likeNumber").innerHTML = currentVotes.like;
document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;

document.getElementById("likeBtn").addEventListener("click", function () {
    if (voteStatus.like == false) {
        // Add a like
        document.getElementById("likeNumber").innerHTML = currentVotes.like + 1;
        document.getElementById("likeBtn").classList.add("voted");
        voteStatus.like = true;
        // If they had disliked before, take the dislike away
        if (voteStatus.dislike == true) {
            document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
            document.getElementById("dislikeBtn").classList.remove("voted");
            voteStatus.dislike = false;
        }
    } else {
        // Clicking again removes the like
        document.getElementById("likeNumber").innerHTML = currentVotes.like;
        document.getElementById("likeBtn").classList.remove("voted");
        voteStatus.like = false;
    }
});

// NOTE: the class demo used "dislikeButton" here, but the button's id is
// "dislikeBtn", so the dislike button did not work. Fixed below.
document.getElementById("dislikeBtn").addEventListener("click", function () {
    if (voteStatus.dislike == false) {
        document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike + 1;
        document.getElementById("dislikeBtn").classList.add("voted");
        voteStatus.dislike = true;
        if (voteStatus.like == true) {
            document.getElementById("likeNumber").innerHTML = currentVotes.like;
            document.getElementById("likeBtn").classList.remove("voted");
            voteStatus.like = false;
        }
    } else {
        document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
        document.getElementById("dislikeBtn").classList.remove("voted");
        voteStatus.dislike = false;
    }
});

//---------------------------------------------
// 5. COMMENTS
// Show all saved comments for this place
function getAllComments(allComments) {
    let getComments = "";
    for (let i = 0; i < allComments.length; i++) {
        getComments += '<p class="review"><strong>' + allComments[i].user + ':</strong> ' + allComments[i].comment + '</p>';
    }
    return getComments;
}
document.getElementById("commentList").innerHTML = getAllComments(comments.find(item => item.id == placeID).comments);

// Add a new comment
function addComment() {
    let enteredName = document.getElementById("commentName").value;
    let enteredText = document.getElementById("commentText").value;

    if (enteredName.trim() == "" || enteredText.trim() == "") {
        alert("Please enter both your name and comment!");
    } else {
        // textContent is used so nobody can add HTML code to the page
        let newComment = document.createElement("p");
        newComment.className = "review";
        newComment.textContent = enteredName + ": " + enteredText;
        document.getElementById("commentList").appendChild(newComment);
        alert("Thank you for your comment!");

        // Clear the boxes
        document.getElementById("commentName").value = "";
        document.getElementById("commentText").value = "";
    }
}

//---------------------------------------------
// 6. ENQUIRY FORM (same as the contact form in the Homepage demo)
// The "required" boxes in the HTML are checked by the browser first.
document.getElementById("enquiryForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you. We will contact you soon about " + place.name + ".");
    document.getElementById("enquiryForm").reset();
});