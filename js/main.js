/* =========================================================
   main.js - JavaScript used on EVERY page
   1. Scroll reveal (Homepage demo)
   2. Copyright and Privacy Policy dialogs (Modal Dialog demo)
   3. Google Translate widget (W10 demo)
   ========================================================= */

// 1. SCROLL REVEAL - sections fade in when they scroll into view
const reveals = document.querySelectorAll(".reveal");

function revealElements() {
    reveals.forEach(item => {
        const top = item.getBoundingClientRect().top;
        // Add the active class once the item is in view
        if (top < window.innerHeight - 80) {
            item.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealElements);
revealElements();

// 2. DIALOGS (Copyright & Credits, Privacy Policy, Quick view)
function openDialog(dialogID) {
    document.getElementById(dialogID).showModal();
}
function closeDialog(dialogID) {
    document.getElementById(dialogID).close();
}

// 3. GOOGLE TRANSLATE WIDGET
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'googleTranslate');
}
