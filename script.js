const navbar = document.querySelector("nav ul");
const navbarButton = document.querySelector("nav button");
const cover = document.querySelector(".cover");
const downloadCV = document.querySelector("#download_cv");

const hideNavbar = () => {
    navbar.classList.add("hideNavbar");
    cover.classList.add("hidenCover");
};

navbarButton.addEventListener("click", () => {
    navbar.classList.toggle("hideNavbar");
    cover.classList.toggle("hidenCover");
});

cover.addEventListener("click", hideNavbar);

window.addEventListener("hashchange", hideNavbar);