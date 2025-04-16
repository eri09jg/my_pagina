document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    navToggle.addEventListener("click", function() {
        navMenu.classList.toggle("nav-menu_visible");
    });
});