const form = document.querySelector("form");
const email = document.getElementById("user_email");
const username = document.getElementById("user_name");
const tel = document.getElementById("user_tel");
const errorMessage = document.querySelectorAll(".error_message");
const inputForm = document.querySelectorAll(".input_block");

// const cards = document.querySelector(".cards");
const card = document.querySelectorAll(".card");
const card_monthly = document.querySelectorAll(".card_monthly");
const cardsYear = document.querySelector(".cards");
const cardsMonth = document.querySelector(".cards_monthly");

const addOns = document.querySelectorAll(".add-on");

const monthly_rate = document.querySelector(".monthly_rate");
const yearly_rate = document.querySelector(".yearly_rate");

const divName = document.querySelector(".name");
const divEmail = document.querySelector(".email");
const divTel = document.querySelector(".tel");

const nextButton1 = document.querySelector(".step_1");
const nextButton2 = document.querySelector(".step_2");
const nextButton3 = document.querySelector(".step_3");

const prevButton1 = document.querySelector(".prev_step");
const prevButton2 = document.querySelector(".prev_step_3");

const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");
const number4 = document.querySelector(".number4");

const step1 = document.querySelector(".right_part_step1");
const step2 = document.querySelector(".right_part_step2");
const step3 = document.querySelector(".right_part_step3");
let isValid = true;

const checkbox = document.querySelector(".checkbox");

const emailValidation = (email) => {
  const regex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return regex.test(email);
};

const telValidation = (phoneNumber) => {
  const phoneRegex =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{3,4})(?: *x(\d+))?\s*$/;
  return phoneRegex.test(phoneNumber);
};

const formValidation = () => {
  isValid = true;

  if (!username.value.trim() || username.value.length < 3) {
    errorMessage[0].style.visibility = "visible";
    inputForm[0].classList.add("red");
    isValid = false;
  }

  if (!emailValidation(email.value.trim())) {
    errorMessage[1].style.visibility = "visible";
    inputForm[1].classList.add("red");
    isValid = false;
  }

  if (!telValidation(tel.value.trim())) {
    errorMessage[2].style.visibility = "visible";
    inputForm[2].classList.add("red");
    isValid = false;
  }
};

username.addEventListener("input", () => {
  errorMessage[0].style.visibility = "hidden";
  inputForm[0].classList.remove("red");
});

email.addEventListener("input", () => {
  errorMessage[1].style.visibility = "hidden";
  inputForm[1].classList.remove("red");
});

tel.addEventListener("input", () => {
  errorMessage[2].style.visibility = "hidden";
  inputForm[2].classList.remove("red");
});

nextButton1.addEventListener("click", function (e) {
  e.preventDefault();
  formValidation();
  if (!isValid) {
    return;
  } else {
    step1.classList.add("hidden");
    step2.classList.remove("hidden");
    number1.classList.remove("number_active");
    number2.classList.add("number_active");
  }
});

prevButton1.addEventListener("click", function () {
  step1.classList.remove("hidden");
  step2.classList.add("hidden");
  number1.classList.add("number_active");
  number2.classList.remove("number_active");
  inputForm.forEach((input) => input.classList.remove("red"));
});

const removeHoverForCards = function (cards) {
  cards.forEach((card) => card.classList.remove("hover"));
};

const addEventListenerHover = function (cards, monthlyCards) {
  cards.forEach((oneCard) =>
    oneCard.addEventListener("click", function () {
      removeHoverForCards(cards);
      removeHoverForCards(monthlyCards);

      this.classList.add("hover");
    })
  );
};

addEventListenerHover(card, card_monthly);
addEventListenerHover(card_monthly, card);

checkbox.addEventListener("change", function () {
  if (this.checked) {
    cardsMonth.classList.add("hidden");
    cardsYear.classList.remove("hidden");

    monthly_rate.classList.remove("active_rate");
    monthly_rate.classList.add("non-active_rate");
    yearly_rate.classList.remove("non-active_rate");
    yearly_rate.classList.add("active_rate");
  } else {
    cardsMonth.classList.remove("hidden");
    cardsYear.classList.add("hidden");

    monthly_rate.classList.add("active_rate");
    monthly_rate.classList.remove("non-active_rate");
    yearly_rate.classList.remove("active_rate");
    yearly_rate.classList.add("non-active_rate");
  }
});

nextButton2.addEventListener("click", function () {
  step2.classList.add("hidden");
  step3.classList.remove("hidden");

  number2.classList.remove("number_active");
  number3.classList.add("number_active");
});

prevButton2.addEventListener("click", function () {
  step2.classList.remove("hidden");
  step3.classList.add("hidden");

  number2.classList.add("number_active");
  number3.classList.remove("number_active");
});

function toggleCheckbox() {
  const checked = this.querySelector(".add-ons_check");
  if (!checked.checked) this.classList.add("hover");
  if (checked.checked) this.classList.remove("hover");

  checked.checked = !checked.checked;
}

addOns.forEach((addOn) => {
  addOn.addEventListener("click", toggleCheckbox);
});
