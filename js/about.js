/* =========================================================
   about.js - JavaScript for About Hawke's Bay (about.html)
   1. "READ MORE" button (Read More button demo)
   2. Town buttons that change the Google Map
   ========================================================= */

//---------------------------------------------
// 1. READ MORE (from demo)
// Hide the "detailed" story FIRST
document.getElementById("detailed").style.display = "none";

function expandText() {
    // Find the expandBtn element on the HTML page
    let expandBtn = document.getElementById("expandBtn");

    // Check whether to expand or collapse the text, using the button's value
    if (expandBtn.value.toLowerCase() == "hide") {
        document.getElementById("detailed").style.display = "block";   // show the story
        expandBtn.value = "show";
        expandBtn.textContent = "HIDE";
    } else {
        document.getElementById("detailed").style.display = "none";    // hide the story
        expandBtn.value = "hide";
        expandBtn.textContent = "READ MORE";
    }
}

//---------------------------------------------
// 2. REGIONAL MAP - show the town that was clicked
function showTown(townName, clickedButton) {
    document.getElementById("regionMap").src = "https://maps.google.com/maps?q=" + townName + ", New Zealand&z=11&output=embed";
    document.getElementById("mapStatus").innerHTML = "Showing: " + clickedButton.innerHTML;

    // Highlight the button that was clicked
    let pills = document.querySelectorAll(".pill");
    for (let i = 0; i < pills.length; i++) {
        pills[i].classList.remove("active");
    }
    clickedButton.classList.add("active");
}
