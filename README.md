# Frontend Mentor - Pricing component with toggle solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard
- **Bonus**: Complete the challenge with just HTML and CSS

### Screenshot

![Project Screenshot](./src/assets/images/project-screenshot.jpg)

## My process

### Built with

- Flexbox
- CSS Grid
- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow

### What I learned

```html
<div class="price-toggle">
  <div class="indicator"></div>
</div>
```

```css
.price-toggle {
  position: relative;
  width: 5rem;
  height: 2.5rem;
  border-radius: 2.5rem;
  margin-inline: 1em;
  background: var(--clr-primary--linear-gradient);
  cursor: pointer;
}

.indicator {
  transition: 0.5s;
  position: absolute;
  top: 0;
  inset-inline-end: 0;
  width: 2.5rem;
  height: 100%;
  background-color: var(--clr-neutral--white);
  border-radius: 2.5rem;
  transform: scale(0.8);
}

.clicked {
  inset-inline-end: 2.5rem;
}
```

### Continued development

The position was really getting on my nerves but as always I nailed it in the best possible way I could think of and going forward I will looking at css position and brush up on those.

## Author

- Website - [George Asiedu](https://www.georgeasiedu.tech)
- Frontend Mentor - [@george5-star](https://www.frontendmentor.io/profile/george5-star)
- Twitter - [@george5_star](https://www.twitter.com/george5_star)
