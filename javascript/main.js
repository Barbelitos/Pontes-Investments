// SELECTORS
const toggleMenu = document.querySelector(".menu-toggle");
const openMenu = document.querySelector(".menu-open");
const closeMenu = document.querySelector(".menu-close");
const navMenu = document.querySelector(".nav-menu");
const mainTitle = document.querySelector(".main-title");
const sideTitle = document.querySelector(".side-title");
const cardsContainer = document.querySelector(".cards-container");
const wealthText = document.querySelector(".wealth-text");
const investmentsText = document.querySelector(".investments-text");
const advisorText = document.querySelector(".advisor-text");

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
  }, 800);

  setTimeout(() => {
    mainTitle.style.transform = "translateX(0)";
  }, 800);

  wealthText.style.transform = "translateX(0)";
  investmentsText.style.transform = "translateX(0)";
  advisorText.style.transform = "translateX(0)";
});

window.addEventListener("scroll", () => {
  cardsContainer.style.visibility = "visible";
  cardsContainer.style.transform = "translateY(0%)";
});
