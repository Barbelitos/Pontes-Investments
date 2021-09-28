// SELECTORS
const toggleMenu = document.querySelector(".menu-toggle");
const openMenu = document.querySelector(".menu-open");
const closeMenu = document.querySelector(".menu-close");
const navMenu = document.querySelector(".nav-menu");

//EVENT LISTENERS
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_show");
  setTimeout(() => {
    openMenu.classList.toggle("hidden-icon");
    closeMenu.classList.toggle("hidden-icon");
  }, 150);
});
