/* =========================================================
   activities.js - JavaScript for Things to Do (activities.html)
   search / filter / sort idea as Places to Visit,
   so visitors only need to learn it once.
   ========================================================= */

let chosenType = "All";

//---------------------------------------------
// FUNCTION: BUILD THE CARDS FOR A LIST OF ACTIVITIES
function displayAllActivities(activityList) {
    let allCards = "";
    for (let i = 0; i < activityList.length; i++) {
        allCards +=
            '<article class="card">'
            + '<img src="' + activityList[i].image + '" alt="' + activityList[i].alt + '">'
            + '<div class="cardBody">'
            + '<span class="categoryTag">' + activityList[i].type + '</span>'
            + '<h3>' + activityList[i].title + '</h3>'
            + '<p>' + activityList[i].text + '</p>'
            + '<p class="cardMeta">Time needed: ' + activityList[i].duration + '</p>'
            + '<div class="cardActions">'
            + '<button class="btn btnSmall" onclick="showPlace(' + activityList[i].placeId + ')">View activity</button>'
            + '</div>'
            + '</div>'
            + '</article>';
    }
    return allCards;
}

//---------------------------------------------
// SEARCH + TYPE + SORT THEN DISPLAY
function updateActivities() {
    let keyword = document.getElementById("activitySearch").value.toLowerCase();
    let sortBy = document.getElementById("activitySort").value;

    // Search
    let filteredActivities = activities.filter(activity => {
        return activity.title.toLowerCase().includes(keyword)
            || activity.text.toLowerCase().includes(keyword);
    });

    // Type
    if (chosenType != "All") {
        filteredActivities = filteredActivities.filter(activity => activity.type == chosenType);
    }

    // Sort
    if (sortBy == "popular") {
        filteredActivities.sort((item1, item2) => (item1.popularity < item2.popularity) ? 1 : -1);
    } else {
        filteredActivities.sort((item1, item2) => (item1.title > item2.title) ? 1 : -1);
    }

    document.getElementById("activityCount").innerHTML = filteredActivities.length + " activities found";

    if (filteredActivities.length == 0) {
        document.getElementById("activityGrid").innerHTML = '<p class="emptyMessage">No activities match. Try another type or word.</p>';
    } else {
        document.getElementById("activityGrid").innerHTML = displayAllActivities(filteredActivities);
    }
}

//---------------------------------------------
// TYPE BUTTONS (pills)
function chooseType(typeName, clickedButton) {
    chosenType = typeName;
    let pills = document.querySelectorAll(".pill");
    for (let i = 0; i < pills.length; i++) {
        pills[i].classList.remove("active");
    }
    clickedButton.classList.add("active");
    updateActivities();
}

//---------------------------------------------
// VIEW ACTIVITY: save the place ID, then open the detail page
function showPlace(placeID) {
    localStorage.setItem("placeID", placeID);
    window.open("detail.html");
}

// SEARCH BOX: search every time a key is pressed (News page demo)
document.getElementById("activitySearch").addEventListener("keyup", function () {
    updateActivities();
});

// When the page loads
updateActivities();
