// SLIDER
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
};

const slideToLeft = () => {
  if (currentSlidePosition > 0) {
    currentSlidePosition = currentSlidePosition - slideWidht;
    slider.style = `transform: translateX(${-currentSlidePosition}px)`;
  }
  if (currentSlidePosition === 0) sliderButtonLeft.disabled = true;
  if (currentSlidePosition !== slideWidht * maxSlides)
    sliderButtonRight.disabled = false;
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

// DATE
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let currentTime = document.querySelector(".slide-slider-main-date__time");
let day = date.getDate();
let days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
let weekDay = days[date.getDay()];
let month = months[date.getMonth()];
let year = date.getFullYear();
let currentDate = document.querySelector(".slide-slider-main-date__date");
currentDate.innerHTML = `${weekDay}, ${day < 10 ? "0" + day : day}.${
  month < 10 ? "0" + month : month
}.${year}`;
let timer = setInterval(() => {
  seconds = +seconds + 1;
  if (seconds === 60) {
    seconds = 0;
    minutes = +minutes + 1;
  }
  if (minutes === 60) {
    minutes = 0;
    hours = +hours + 1;
  }
  if (hours === 24) {
    hours = 0;
  }
  currentTime.innerHTML = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;
  // if (seconds === 0 && minutes === 0 && hours === 0) {
  //   date = new Date();
  // }
}, 1000);

// CARDS
const dateCard = document.querySelector(".slide-slider-main-date__body");
if (month === 12 || month <= 2) {
  dateCard.classList.remove("spring", "summer", "autumn");
  dateCard.classList.add("winter");
}
if (month >= 3 || month <= 5) {
  dateCard.classList.remove("winter", "summer", "autumn");
  dateCard.classList.add("spring");
}
if (month >= 6 || month <= 8) {
  dateCard.classList.remove("winter", "spring", "autumn");
  dateCard.classList.add("summer");
}
if (month >= 9 || month <= 11) {
  dateCard.classList.remove("winter", "spring", "summer");
  dateCard.classList.add("autumn");
}
