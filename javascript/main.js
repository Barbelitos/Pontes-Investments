"use strict";
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
const navBar = document.querySelector(".navbar");
const contactForm = document.querySelector(".contact-form");
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const messageInput = document.querySelector(".message-input");

// FUNCTIONS

//EVENT LISTENERS

window.addEventListener("load", () => {
  setTimeout(() => {
    sideTitle.classList.add("appear");
    mainTitle.classList.add("appear");
  }, 700);
});

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_show");
  setTimeout(() => {
    openMenu.classList.toggle("hidden-icon");
    closeMenu.classList.toggle("hidden-icon");
  }, 150);
});

window.addEventListener("scroll", () => {
  cardsContainer.classList.add("show-cards");
});

// Sticky Nav
let scrollPos = 0;
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) navBar.classList.add("sticky");

  if (document.body.getBoundingClientRect().top > scrollPos)
    navBar.classList.remove("sticky");
  scrollPos = document.body.getBoundingClientRect().top;
});

// Clear contact form on submission
contactForm.addEventListener("submit", (e) => {
  nameInput.value = emailInput.value = messageInput.value = "";
});
