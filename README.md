# Frontend Mentor - Photosnap Website solution

This is a solution to the [Photosnap Website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/photosnap-multipage-website-nMDSrNmNW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site

### Screenshot

![Design preview for the Photosnap Website coding challenge](./preview.jpg)

### Links

- [live site URL here](https://photo-snap-site.vercel.app/)

### Built with

- Semantic HTML5 markup
- CSS Preprocessor (SCSS)
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript
- BEM

### What I learned

This project was very heavy on the HTML and css side of things. This project has given me an appreciation for frameworks and components. In addition I found my self saying "next time I will spend more time preparing for the projects before jumping in". There is much learning to do and I am okay with that.

**This was my first time using picture tag for responsive images:**

```html
<picture class="header__create-graphic">
  <source
    media="(min-width:1440px)"
    srcset="./assets/home/desktop/create-and-share.jpg"
  />
  <source
    media="(min-width:768px)"
    srcset="./assets/home/tablet/create-and-share.jpg"
  />
  <img
    src="./assets/home/mobile/create-and-share.jpg"
    alt="Flowers"
    style="width: 100%"
  />
</picture>
```

**These are just some of the mixins I created using scss:**

```css
@mixin anchor-arrow($color: var(--color-pure-white)) {
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  color: $color;
}

@mixin grid-item-text(
  $fontSize,
  $lineHeight,
  $color,
  $letter-spacing: initial
) {
  font-size: $fontSize;
  line-height: $lineHeight;
  color: $color;
}
```

**A bit repetative but proud to have gotten it to work - now for refactor😁**

```js
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
}
```

### Continued development

There was certainly some areas where the principle of DRY code was abandoned. In terms of continued development it would be to refactor some of the JavaScript and to componentize some of the html elements.

### Useful resources

- [MDN Network](https://developer.mozilla.org/en-US/) - As usual the MDN network continues to be a valuable resource for development. This same remains for this project.
- [W3Schools](https://w3schools.com) - This site was helpful for building the custom toggle for the pricing cards.
