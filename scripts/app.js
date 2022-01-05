const menuBtn = document.querySelectorAll(".navbar__menu-btn");
const menuOpenBtn = document.querySelector(".navbar__menu-btn--open");
const menuCloseBtn = document.querySelector(".navbar__menu-btn--close");
const navbarMenu = document.querySelector(".navbar__navigation");
const overlay = document.querySelector(".overlay");

const toggleMenuWithOverlay = () => {
  overlay.classList.toggle("overlay--active");
  navbarMenu.classList.toggle("navbar__navigation--active");
};

menuOpenBtn.onclick = function (evt) {
  toggleMenuWithOverlay();
  evt.currentTarget.style.display = "none";
  menuCloseBtn.classList.toggle("navbar__menu-btn--close");
};

menuCloseBtn.onclick = function (evt) {
  toggleMenuWithOverlay();
  evt.currentTarget.classList.toggle("navbar__menu-btn--close");
  menuOpenBtn.style.display = "block";
};
