const menuToggle = document.querySelector("#menu-hamburger");
const menuLinks = document.querySelectorAll(".header nav ul a");

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (menuToggle) {
            menuToggle.checked = false;
        }
    });
});
