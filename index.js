document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    navToggle.addEventListener("click", function () {
        const isVisible = navMenu.classList.toggle("nav-menu_visible");

        if (isVisible) {
            document.body.classList.add("menu-abierto");
        } else {
            document.body.classList.remove("menu-abierto");
        }
    });
});
