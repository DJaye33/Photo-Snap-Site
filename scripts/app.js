const menuBtn = document.querySelectorAll(".navbar__menu-btn");
const menuOpenBtn = document.querySelector(".navbar__menu-btn--open");
const menuCloseBtn = document.querySelector(".navbar__menu-btn--close");
const navbarMenu = document.querySelector(".navbar__navigation");
const overlay = document.querySelector(".overlay");
const createGraphic = document.querySelector(".header__create-graphic");
const beautifulStories = document.querySelector(
  ".header__beautiful-stories-graphic"
);
const designedGraphic = document.querySelector(".header__designed-graphic");

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

/* Code for responsive header images begin */
const getClass = (element) => {
  let classValue = "";

  switch (element) {
    case createGraphic:
      classValue = "create-and-share";
      break;
    case beautifulStories:
      classValue = "beautiful-stories";
      break;
    case designedGraphic:
      classValue = "designed-for-everyone";
      break;
  }

  return classValue;
};

const setGraphic = (graphic) => {
  if (window.innerWidth >= 1440) {
    graphic.setAttribute(
      "src",
      `./assets/home/desktop/${getClass(graphic)}.jpg`
    );
  } else if (window.innerWidth >= 768) {
    graphic.setAttribute(
      "src",
      `./assets/home/tablet/${getClass(graphic)}.jpg`
    );
  } else {
    graphic.setAttribute(
      "src",
      `./assets/home/mobile/${getClass(graphic)}.jpg`
    );
  }
};

window.addEventListener("resize", (evt) => {
  setGraphic(createGraphic);
  setGraphic(beautifulStories);
  setGraphic(designedGraphic);
});
/* Code for responsive header images ends */
