/* =========================================================
   explore.js - JavaScript for Places to Visit (explore.html)
   Based on the "Display items in grid with search and
   category dropdown" demo and the Product Catalog tutorial.
   1. Show all places as cards
   2. Search
   3. Category buttons (pills)
   4. Town / area dropdown
   5. Sort
   6. Load more (News page demo)
   7. Quick view dialog (Modal Dialog demo)
   8. Voice search (Speech-to-Text demo)
   9. View detail (save ID to localStorage, open detail page)
   ========================================================= */

let chosenCategory = 0;      

function getCategoryName(categoryID) {
    return categories.find(category => category.id == categoryID).name;
}

function displayAllPlaces(placeList) {
    let allCards = "";
    for (let i = 0; i < placeList.length; i++) {
        let cardClass = "card";
        if (i >= 6) {
            cardClass = "card hidden";
        }
        allCards +=
            '<article class="' + cardClass + '">'
            + '<img src="' + placeList[i].image + '" alt="' + placeList[i].alt + '">'
            + '<div class="cardBody">'
            + '<span class="categoryTag">' + getCategoryName(placeList[i].category) + '</span>'
            + '<h3>' + placeList[i].name + '</h3>'
            + '<p class="cardMeta">' + placeList[i].area + ' - ' + placeList[i].cost + '</p>'
            + '<p>' + placeList[i].summary + '</p>'
            + '<div class="cardActions">'
            + '<button class="btn btnSmall" onclick="showPlace(' + placeList[i].id + ')">View detail</button>'
            + '<button class="btn btnSmall btnOutline" onclick="quickView(' + placeList[i].id + ')">Quick view</button>'
            + '</div>'
            + '</div>'
            + '</article>';
    }
    return allCards;
}


// MAIN FUNCTION: SEARCH + FILTER + SORT THEN DISPLAY
function updatePlaces() {
    let keyword = document.getElementById("searchInput").value.toLowerCase();
    let chosenArea = document.getElementById("areaSelect").value;
    let sortBy = document.getElementById("sortSelect").value;

    // 1. Search: match the name, town or short summary
    let filteredPlaces = places.filter(place => {
        return place.name.toLowerCase().includes(keyword)
            || place.area.toLowerCase().includes(keyword)
            || place.summary.toLowerCase().includes(keyword);
    });

    // 2. Category
    if (chosenCategory != 0) {
        filteredPlaces = filteredPlaces.filter(place => place.category == chosenCategory);
    }

    // 3. Town/area
    if (chosenArea != "All") {
        filteredPlaces = filteredPlaces.filter(place => place.area.includes(chosenArea));
    }

    // 4. Sort
    if (sortBy == "popular") {
        filteredPlaces.sort((item1, item2) => (item1.popularity < item2.popularity) ? 1 : -1);
    } else if (sortBy == "name") {
        filteredPlaces.sort((item1, item2) => (item1.name > item2.name) ? 1 : -1);
    } else if (sortBy == "area") {
        filteredPlaces.sort((item1, item2) => (item1.area > item2.area) ? 1 : -1);
    }

    // 5. Nothing found?
    if (filteredPlaces.length == 0) {
        document.getElementById("placeGrid").innerHTML = '<p class="emptyMessage">No places found. Try another word or choose "All".</p>';
    } else {
        document.getElementById("placeGrid").innerHTML = displayAllPlaces(filteredPlaces);
    }
    document.getElementById("resultCount").innerHTML = filteredPlaces.length + " places found";

    
    if (filteredPlaces.length > 6) {
        document.getElementById("loadMoreBtn").style.display = "inline-block";
    } else {
        document.getElementById("loadMoreBtn").style.display = "none";
    }
}


// CATEGORY BUTTONS (pills)
function chooseCategory(categoryID, clickedButton) {
    chosenCategory = categoryID;
    // Remove "active" from all pills, then add it to the clicked one
    let pills = document.querySelectorAll(".pill");
    for (let i = 0; i < pills.length; i++) {
        pills[i].classList.remove("active");
    }
    clickedButton.classList.add("active");
    updatePlaces();
}



function loadAreas() {
    let selectMenu = document.getElementById("areaSelect");
    let addedAreas = [];
    for (let i = 0; i < places.length; i++) {
        if (addedAreas.includes(places[i].area) == false) {
            addedAreas.push(places[i].area);
            let newOption = document.createElement("option");
            newOption.text = places[i].area;
            newOption.value = places[i].area;
            selectMenu.appendChild(newOption);
        }
    }
}

function loadMore() {
    let hiddenCards = document.querySelectorAll(".hidden");
    hiddenCards.forEach(card => {
        card.classList.remove("hidden");
    });
    document.getElementById("loadMoreBtn").style.display = "none";
}


// VIEW DETAIL: save the place ID, then open the detail page
// (same as showItem() in the "click to show an item" demo)
function showPlace(placeID) {
    localStorage.setItem("placeID", placeID);
    window.open("detail.html");
}

// QUICK VIEW DIALOG (Modal Dialog demo)
function quickView(placeID) {
    let place = places.find(item => item.id == placeID);
    let highlights = "";
    for (let i = 0; i < place.highlights.length; i++) {
        highlights += '<li>' + place.highlights[i] + '</li>';
    }
    document.getElementById("quickViewContent").innerHTML =
        '<button class="dialogClose" onclick="closeDialog(\'quickView\')">&times;</button>'
        + '<h2>' + place.name + '</h2>'
        + '<img src="' + place.image + '" alt="' + place.alt + '">'
        + '<p class="cardMeta">' + place.area + ' - ' + getCategoryName(place.category) + ' - ' + place.cost + '</p>'
        + '<p>' + place.summary + '</p>'
        + '<ul>' + highlights + '</ul>'
        + '<p class="spaceTop"><button class="btn" onclick="showPlace(' + place.id + ')">See full details</button></p>';
    openDialog("quickView");
}


// VOICE SEARCH (Speech-to-Text demo)
let startButton = document.getElementById("voiceSearchBtn");

function startTalking() {
    //  browser support
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert('Your browser does not support Speech Recognition.');
        return;
    }

    // If supported, create new SpeechRecognition object
    let recognition = new SpeechRecognition();
    recognition.lang = 'en-NZ';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    // start event
    recognition.onstart = () => {
        startButton.textContent = 'Listening...';
        startButton.disabled = true;
    };
    // result event: put the words in the search box and search
    recognition.onresult = (event) => {
        let transcript = event.results[0][0].transcript;
        document.getElementById("searchInput").value = transcript;
        updatePlaces();
    };
    // error event
    recognition.onerror = (event) => {
        alert('Error occurred in recognition: ' + event.error);
    };
    // end event
    recognition.onend = () => {
        startButton.innerHTML = '&#127908; Voice';
        startButton.disabled = false;
    };
}
// SEARCH BOX: search every time a key is pressed (News page demo)
document.getElementById("searchInput").addEventListener("keyup", function () {
    updatePlaces();
});

// WHEN THE PAGE LOADS
loadAreas();

// If the visitor clicked a Quick Link on the Home page use that town
let savedArea = localStorage.getItem("chosenArea");
if (savedArea != null) {
    document.getElementById("areaSelect").value = savedArea;
    localStorage.setItem("chosenArea", "All");     // use it only once
}
updatePlaces();
