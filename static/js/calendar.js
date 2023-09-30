// CALENDAR

const weekDays = {
  weekDaysCut: {
    0: "Пн.",
    1: "Вт.",
    2: "Ср.",
    3: "Чт.",
    4: "Пт.",
    5: "Сб.",
    6: "Вс.",
  },
  weekDaysFull: {
    0: "Понедельник",
    1: "Вторник",
    2: "Среда",
    3: "Четверг",
    4: "Пятница",
    5: "Суббота",
    6: "Воскресенье",
    7: "Понедельник",
    8: "Вторник",
    9: "Среда",
    10: "Четверг",
    11: "Пятница",
    12: "Суббота",
    13: "Воскресенье",
    14: "Понедельник",
    15: "Вторник",
    16: "Среда",
    17: "Четверг",
    18: "Пятница",
    19: "Суббота",
    20: "Воскресенье",
    21: "Понедельник",
    22: "Вторник",
    23: "Среда",
    24: "Четверг",
    25: "Пятница",
    26: "Суббота",
    27: "Воскресенье",
    28: "Понедельник",
    29: "Вторник",
    30: "Среда",
    31: "Четверг",
    32: "Пятница",
    33: "Суббота",
    34: "Воскресенье",
  },
};
const headerCalendarItems = document.querySelectorAll(".header-calendar__item");
const weekDaysCutter = function () {
  if (this.window.innerWidth <= 768) {
    headerCalendarItems.forEach((item, index, array) => {
      array[index].textContent = weekDays.weekDaysCut[index];
    });
  } else {
    headerCalendarItems.forEach((item, index, array) => {
      array[index].textContent = weekDays.weekDaysFull[index];
    });
  }
};
window.addEventListener("resize", weekDaysCutter);
window.addEventListener("load", weekDaysCutter);

const calendarWeekItem = document.querySelectorAll(".week-item");
const calendarModal = document.querySelector(".calendar-modal");
const calendarModalContent = document.querySelector(".calendar-modal__body");
const calendarFormDayOfTheWeek = document.querySelector(
  ".calendar-modal__day-of-the-week"
);
const calendarFormDate = document.querySelector(".calendar-modal__date");

calendarWeekItem.forEach((weekItem, index) => {
  weekItem.addEventListener("click", function (e) {
    calendarModal.classList.add("active");
    let selectedDate = new Date(`09.${e.target.textContent}.2023`);
    let selectedDateDay = selectedDate.getDate();
    let selectedDateMonth = selectedDate.getMonth() + 1;
    let selectedDateYear = selectedDate.getFullYear();
    calendarFormDayOfTheWeek.textContent = weekDays.weekDaysFull[index];
    calendarFormDate.value = `${selectedDateYear}-${
      selectedDateMonth < 10 ? "0" + selectedDateMonth : selectedDateMonth
    }-${selectedDateDay < 10 ? "0" + selectedDateDay : selectedDateDay}`;
  });
});
calendarModal.addEventListener("click", function () {
  calendarModal.classList.remove("active");
});
calendarModalContent.addEventListener("click", function (e) {
  e.stopPropagation();
});

// MENU-LIST
// submit-button

const choiceContainer = document.querySelector(".choice-calendar-modal");
const modalItem = document.querySelectorAll(".modal-item");
const modalList = document.querySelectorAll(".modal-list");
modalItem.forEach((item, index, array) => {
  item.addEventListener("click", function () {
    modalList.forEach((list) => {
      list.classList.remove("active");
    });
    modalItem.forEach((item) => {
      item.classList.remove("active");
    });
    modalList[index].classList.add("active");
    modalItem[index].classList.add("active");
  });
});

// breakfast
const breakfastItems = document.querySelectorAll(".item-breakfast__item");
const breakfastInput = document.querySelector(
  ".calendar-modal__input-breakfast"
);

const breakfastChoice = document.querySelector(
  ".choice-calendar-modal__item-breakfast-choice"
);

breakfastItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.stopPropagation();
    breakfastInput.value = e.target.textContent;
    breakfastChoice.classList.add("active");
    breakfastChoice.textContent = `Завтрак: ${breakfastInput.value}`;
    choiceContainer.classList.add("active");
    modalList[0].classList.remove("active");
    modalItem[0].classList.remove("active");
    formSubmitButton.classList.add("active");
  });
});

// dinner
const dinnerItems = document.querySelectorAll(".item-dinner__item");
const dinnerInput = document.querySelector(".calendar-modal__input-dinner");

const dinnerChoice = document.querySelector(
  ".choice-calendar-modal__item-dinner-choice"
);
dinnerItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.stopPropagation();
    dinnerInput.value = e.target.textContent;
    dinnerChoice.classList.add("active");
    dinnerChoice.textContent = `Обед: ${dinnerInput.value}`;
    choiceContainer.classList.add("active");
    modalList[1].classList.remove("active");
    modalItem[1].classList.remove("active");
    formSubmitButton.classList.add("active");
  });
});

// supper
const supperItems = document.querySelectorAll(".item-supper__item");
const supperInput = document.querySelector(".calendar-modal__input-supper");

const supperChoice = document.querySelector(
  ".choice-calendar-modal__item-supper-choice"
);

supperItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.stopPropagation();
    supperInput.value = e.target.textContent;
    supperChoice.classList.add("active");
    supperChoice.textContent = `Ужин: ${supperInput.value}`;
    choiceContainer.classList.add("active");
    modalList[2].classList.remove("active");
    modalItem[2].classList.remove("active");
    formSubmitButton.classList.add("active");
  });
});

const formSubmitButton = document.querySelector(
  ".calendar-moda__submit-button"
);
formSubmitButton.addEventListener("click", function () {
  breakfastChoice.textContent = "";
  dinnerChoice.textContent = "";
  supperChoice.textContent = "";
  choiceContainer.classList.remove("active");
  breakfastChoice.classList.remove("active");
  dinnerChoice.classList.remove("active");
  supperChoice.classList.remove("active");
  formSubmitButton.classList.remove("active");
  calendarModal.classList.remove("active");
});
