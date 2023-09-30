// FORM
// LEFT-SIDE
const familyMemberList = document.querySelector(
  ".list-container-family-form-left-side-settings"
);
const familyMemberAddButton = document.querySelector(
  ".list-container-family-form-left-side-settings__add-family-member-button"
);
// FAMILY MEMBER
familyMemberAddButton.addEventListener("click", function () {
  familyMemberAddButton.disabled = true;
  familyMemberList.insertAdjacentHTML(
    "beforeend",
    `<div
  class="list-container-family-form-left-side-settings__family-member-row"
>
  <input
    type="text"
    class="list-container-family-form-left-side-settings__family-member-name"
    placeholder="Имя"
  />
  <input
    type="number"
    class="list-container-family-form-left-side-settings__family-member-age"
    placeholder="Возраст"
  />
  <button
    type="button"
    class="list-container-family-form-left-side-settings__safe-family-member-button"
  >
    Сохранить
  </button>
</div>`
  );
  const familyMemberInputRow = document.querySelector(
    ".list-container-family-form-left-side-settings__family-member-row"
  );
  let familyMemberInputName = document.querySelector(
    ".list-container-family-form-left-side-settings__family-member-name"
  );
  let familyMemberInputAge = document.querySelector(
    ".list-container-family-form-left-side-settings__family-member-age"
  );
  const familyMemberSafeButton = document.querySelector(
    ".list-container-family-form-left-side-settings__safe-family-member-button"
  );
  familyMemberSafeButton.addEventListener("click", function () {
    if (
      familyMemberInputName.value !== "" &&
      familyMemberInputAge.value !== ""
    ) {
      familyMemberList.insertAdjacentHTML(
        "afterbegin",
        `<p class=list-container-family-form-left-side-settings__family-member>${familyMemberInputName.value}, ${familyMemberInputAge.value} лет</p>`
      );
      familyMemberInputName.value = "";
      familyMemberInputAge.value = "";
      familyMemberList.removeChild(familyMemberInputRow);
      familyMemberAddButton.disabled = false;
    }
  });
});

// ALLERGY
const allergyList = document.querySelector(
  ".list-container-allergy-form-left-side-settings"
);
const allergyAddButton = document.querySelector(
  ".list-container-allergy-form-left-side-settings__add-allergy-member-button"
);
allergyAddButton.addEventListener("click", function () {
  allergyAddButton.disabled = true;
  allergyList.insertAdjacentHTML(
    "beforeend",
    `<div
  class="llist-container-allergy-form-left-side-settings__allergy-member-row"
>
  <input
    type="text"
    class="list-container-allergy-form-left-side-settings__allergy-member-name"
    placeholder="Имя"
  />
  <select name="allergy" class='allergy'>
    <option class='allergy-option' value="Овощи">Овощи</option>
    <option class='allergy-option' value="Фрукты">Фрукты</option>
    <option class='allergy-option' value="Водка">Водка</option>
    <option class='allergy-option' value="Вода">Вода</option>
  </select>
  <button
    type="button"
    class="list-container-allergy-form-left-side-settings__safe-allergy-member-button"
  >
    Сохранить
  </button>
</div>`
  );
  const allergyInputRow = document.querySelector(
    ".llist-container-allergy-form-left-side-settings__allergy-member-row"
  );
  let allergyMemberInputName = document.querySelector(
    ".list-container-allergy-form-left-side-settings__allergy-member-name"
  );
  let allergy = document.querySelector(".allergy");
  const allergySafeButton = document.querySelector(
    ".list-container-allergy-form-left-side-settings__safe-allergy-member-button"
  );
  allergySafeButton.addEventListener("click", function () {
    if (allergyMemberInputName.value !== "") {
      allergyList.insertAdjacentHTML(
        "afterbegin",
        `<p class=list-container-allergy-form-left-side-settings__allergy-family-member>${allergyMemberInputName.value}: ${allergy.value}</p>`
      );
      allergyMemberInputName.value = "";
      allergyList.removeChild(allergyInputRow);
      allergyAddButton.disabled = false;
    }
  });
});

// CUISINE
const cuisineList = document.querySelector(
  ".list-container-cuisine-form-left-side-settings"
);
const cuisineAddButton = document.querySelector(
  ".list-container-cuisine-form-left-side-settings__add-cuisine-button"
);
cuisineAddButton.addEventListener("click", function () {
  cuisineAddButton.disabled = true;
  cuisineList.insertAdjacentHTML(
    "beforeend",
    `<div
  class="list-container-cuisine-form-left-side-settings__cuisine-row"
>
  <input
    type="text"
    class="list-container-cuisine-form-left-side-settings__cuisine-name"
    placeholder="Укажите кухню"
  />
  <button
    type="button"
    class="list-container-cuisine-form-left-side-settings__safe-cuisine-button"
  >
    Сохранить
  </button>
</div>`
  );
  const cuisineInputRow = document.querySelector(
    ".list-container-cuisine-form-left-side-settings__cuisine-row"
  );
  let cuisineInputName = document.querySelector(
    ".list-container-cuisine-form-left-side-settings__cuisine-name"
  );
  const cuisineSafeButton = document.querySelector(
    ".list-container-cuisine-form-left-side-settings__safe-cuisine-button"
  );
  cuisineSafeButton.addEventListener("click", function () {
    if (cuisineInputName.value !== "") {
      cuisineList.insertAdjacentHTML(
        "afterbegin",
        `<p class=list-container-cuisine-form-left-side-settings__cuisine>${cuisineInputName.value}</p>`
      );
      cuisineInputName.value = "";
      cuisineList.removeChild(cuisineInputRow);
      cuisineAddButton.disabled = false;
    }
  });
});

// DIETE
const dieteList = document.querySelector(
  ".list-container-diete-form-right-side-settings"
);
const dieteAddButton = document.querySelector(
  ".list-container-diete-form-right-side-settings__add-diete-button"
);
dieteAddButton.addEventListener("click", function () {
  dieteAddButton.disabled = true;
  dieteList.insertAdjacentHTML(
    "beforeend",
    `<div
  class="list-container-diete-form-right-side-settings__diete-row"
>
  <input
    type="text"
    class="list-container-diete-form-right-side-settings__diete-name"
    placeholder="Укажите диету"
  />
  <button
    type="button"
    class="list-container-diete-form-right-side-settings__safe-diete-button"
  >
    Сохранить
  </button>
</div>`
  );
  const dieteInputRow = document.querySelector(
    ".list-container-diete-form-right-side-settings__diete-row"
  );
  let dieteInputName = document.querySelector(
    ".list-container-diete-form-right-side-settings__diete-name"
  );
  const dieteSafeButton = document.querySelector(
    ".list-container-diete-form-right-side-settings__safe-diete-button"
  );
  dieteSafeButton.addEventListener("click", function () {
    if (dieteInputName.value !== "") {
      dieteList.insertAdjacentHTML(
        "afterbegin",
        `<p class=list-container-diete-form-left-side-settings__diete>${dieteInputName.value}</p>`
      );
      dieteInputName.value = "";
      dieteList.removeChild(dieteInputRow);
      dieteAddButton.disabled = false;
    }
  });
});

// DELIVERY
const deliveryList = document.querySelector(
  ".list-container-delivery-form-right-side-settings"
);
const deliveryAddButton = document.querySelector(
  ".list-container-delivery-form-right-side-settings__add-delivery-button"
);
deliveryAddButton.addEventListener("click", function () {
  deliveryAddButton.disabled = true;
  deliveryList.insertAdjacentHTML(
    "beforeend",
    `<div
  class="list-container-delivery-form-right-side-settings__delivery-row"
>
  <input
    type="text"
    class="list-container-delivery-form-right-side-settings__delivery-name"
    placeholder="Укажите день недели"
  />
  <button
    type="button"
    class="list-container-delivery-form-right-side-settings__safe-delivery-button"
  >
    Сохранить
  </button>
</div>`
  );
  const deliveryInputRow = document.querySelector(
    ".list-container-delivery-form-right-side-settings__delivery-row"
  );
  let deliveryInputName = document.querySelector(
    ".list-container-delivery-form-right-side-settings__delivery-name"
  );
  const deliverySafeButton = document.querySelector(
    ".list-container-delivery-form-right-side-settings__safe-delivery-button"
  );
  deliverySafeButton.addEventListener("click", function () {
    if (deliveryInputName.value !== "") {
      deliveryList.insertAdjacentHTML(
        "afterbegin",
        `<p class=list-container-delivery-form-left-side-settings__delivery>${deliveryInputName.value}</p>`
      );
      deliveryInputName.value = "";
      deliveryList.removeChild(deliveryInputRow);
      deliveryAddButton.disabled = false;
    }
  });
});

// DELIVERY-SERVICE
const deliveryServiceList = document.querySelector(
  ".list-container-delivery-service-form-right-side-settings"
);
const deliveryServiceAddButton = document.querySelector(
  ".list-container-delivery-service-form-right-side-settings__add-delivery-service-button"
);
deliveryServiceAddButton.addEventListener("click", function () {
  deliveryServiceAddButton.disabled = true;
  deliveryServiceList.insertAdjacentHTML(
    "beforeend",
    `<div
  class="list-container-delivery-service-form-right-side-settings__delivery-service-row"
>
  <input
    type="text"
    class="list-container-delivery-service-form-right-side-settings__delivery-service-name"
    placeholder="Укажите сервис доставки"
  />
  <button
    type="button"
    class="list-container-delivery-service-form-right-side-settings__safe-delivery-service-button"
  >
    Сохранить
  </button>
</div>`
  );
  const deliveryServiceInputRow = document.querySelector(
    ".list-container-delivery-service-form-right-side-settings__delivery-service-row"
  );
  let deliveryServiceInputName = document.querySelector(
    ".list-container-delivery-service-form-right-side-settings__delivery-service-name"
  );
  const deliveryServiceSafeButton = document.querySelector(
    ".list-container-delivery-service-form-right-side-settings__safe-delivery-service-button"
  );
  deliveryServiceSafeButton.addEventListener("click", function () {
    if (deliveryServiceInputName.value !== "") {
      deliveryServiceList.insertAdjacentHTML(
        "afterbegin",
        `<p class=list-container-delivery-service-form-left-side-settings__delivery-service>${deliveryServiceInputName.value}</p>`
      );
      deliveryServiceInputName.value = "";
      deliveryServiceList.removeChild(deliveryServiceInputRow);
      deliveryServiceAddButton.disabled = false;
    }
  });
});
