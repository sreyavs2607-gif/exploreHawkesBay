/* =========================================================
   contact.js - JavaScript for Contact & Feedback (contact.html)

   ========================================================= */

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you. We will contact you soon.");
    document.getElementById("contactForm").reset();
});
