const sliderButtonLeft = document.querySelector(".buttons-slider-main__left");
const sliderButtonRight = document.querySelector(".buttons-slider-main__right");
const slider = document.querySelector(".slider-main__slider");
const slides = document.querySelectorAll(".slide");
let slideWidht = document.querySelector(".slide").getBoundingClientRect().width;
let currentSlidePosition = 0;
let maxSlides = slides.length - 1;
window.addEventListener("resize", function () {});

const slideToRight = () => {
  currentSlidePosition = currentSlidePosition + slideWidht;
  if (currentSlidePosition === slideWidht * maxSlides)
    sliderButtonRight.disabled = true;
  slider.style = `transform: translateX(${-currentSlidePosition}px)`;
  if (currentSlidePosition > 0) {
    sliderButtonLeft.disabled = false;
  }
  console.log(currentSlidePosition);
};

const slideToLeft = () => {
  if (currentSlidePosition > 0) {
    currentSlidePosition = currentSlidePosition - slideWidht;
    slider.style = `transform: translateX(${-currentSlidePosition}px)`;
  }
  if (currentSlidePosition === 0) sliderButtonLeft.disabled = true;
  if (currentSlidePosition !== slideWidht * maxSlides)
    sliderButtonRight.disabled = false;
  console.log(currentSlidePosition);
};

sliderButtonRight.addEventListener("click", slideToRight);
sliderButtonLeft.addEventListener("click", slideToLeft);

window.addEventListener("resize", function () {
  if (this.window.innerWidth > 425) {
    slider.style = `transform: translateX(0px)`;
  } else if (this.window.innerWidth <= 425 && currentSlidePosition > 0) {
    slider.style = `transform: translateX(${-currentSlidePosition}px)`;
  }
});
