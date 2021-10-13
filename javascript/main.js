// SELECTORS
const toggleMenu = document.querySelector(".menu-toggle");
const openMenu = document.querySelector(".menu-open");
const closeMenu = document.querySelector(".menu-close");
const navMenu = document.querySelector(".nav-menu");
const mainTitle = document.querySelector(".main-title");
const sideTitle = document.querySelector(".side-title");
const cardsContainer = document.querySelector(".cards-container");

//EVENT LISTENERS
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_show");
  setTimeout(() => {
    openMenu.classList.toggle("hidden-icon");
    closeMenu.classList.toggle("hidden-icon");
  }, 150);
});

window.addEventListener("load", () => {
  setTimeout(() => {
    sideTitle.style.transform = "translateX(0%)";
  }, 2000);

  setTimeout(() => {
    mainTitle.style.transform = "translateX(0)";
  }, 500);
});

window.addEventListener("scroll", () => {
  cardsContainer.style.visibility = "visible";
  cardsContainer.style.transform = "translateY(0%)";
});
