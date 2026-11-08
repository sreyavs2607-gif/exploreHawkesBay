/* =========================================================
   home.js - JavaScript for the Home page (index.html)
   1. Show the 3 most popular activities
   2. Quick Links save the chosen town for the Places to Visit page
   ========================================================= */

//---------------------------------------------
// 1. POPULAR ACTIVITIES
// Sort all activities by popularity (highest first)
let sortedActivities = activities.sort((item1, item2) => (item1.popularity < item2.popularity) ? 1 : -1);

// Show only the first 3
let popularCards = "";
for (let i = 0; i < 3; i++) {
    popularCards +=
        '<article class="card">'
        + '<img src="' + sortedActivities[i].image + '" alt="' + sortedActivities[i].alt + '">'
        + '<div class="cardBody">'
        + '<span class="categoryTag">' + sortedActivities[i].type + '</span>'
        + '<h3>' + sortedActivities[i].title + '</h3>'
        + '<p>' + sortedActivities[i].text + '</p>'
        + '<p class="cardMeta">Time needed: ' + sortedActivities[i].duration + '</p>'
        + '<div class="cardActions">'
        + '<button class="btn btnSmall" onclick="showPlace(' + sortedActivities[i].placeId + ')">View activity</button>'
        + '</div>'
        + '</div>'
        + '</article>';
}
document.getElementById("popularActivities").innerHTML = popularCards;

// ON PAGE 1: save the place ID to localStorage, then open the detail page
function showPlace(placeID) {
    localStorage.setItem("placeID", placeID);
    window.open("detail.html");
}

// 2. QUICK LINKS - remember the town, then open Places to Visit
function saveArea(areaName) {
    localStorage.setItem("chosenArea", areaName);
}
