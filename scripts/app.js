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
const pricingSlider = document.querySelector(".pricing-main__slider");
const pricingTimetable = document.querySelectorAll(".pricing-main__price span");
const pricing = document.querySelectorAll(".pricing-main__price");

let yearly = false;

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

pricingSlider.addEventListener("click", (evt) => {
  if (!yearly) {
    pricing.forEach(
      (price) =>
        (price.firstChild.textContent = `$${
          parseInt(price.firstChild.textContent.replace("$", "0"), 10) + 100
        }.00`)
    );
    pricingTimetable.forEach(
      (timeTable) => (timeTable.textContent = "per year")
    );
  } else {
    pricing.forEach(
      (price) =>
        (price.firstChild.textContent = `$${
          parseInt(price.firstChild.textContent.replace("$", "0"), 10) - 100
        }.00`)
    );
    pricingTimetable.forEach(
      (timeTable) => (timeTable.textContent = "per month")
    );
  }
  yearly = !yearly;
});
