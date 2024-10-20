// Mobile navbar
const hamburger = document.querySelector("header .hamburger");
const navbar = document.querySelector("header nav")
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    navbar.classList.toggle("active");
})