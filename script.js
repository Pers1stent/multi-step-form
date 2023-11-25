const form = document.querySelector("form");
const email = document.getElementById("user_email");
const username = document.getElementById("user_name");
const tel = document.getElementById("user_tel");
const errorMessage = document.querySelectorAll(".error_message");
const inputForm = document.querySelectorAll(".input_block");
const checkbox = document.querySelector(".checkbox");
const change = document.querySelectorAll(".underline");

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
const nextButton3 = document.querySelectorAll(".step_3");
const confirmButton = document.querySelectorAll(".confirm");

const prevButton1 = document.querySelector(".prev_step");
const prevButton2 = document.querySelectorAll(".prev_step_3");
const prevButton3 = document.querySelectorAll(".prev_step_4");

const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");
const number4 = document.querySelector(".number4");

const step1 = document.querySelector(".right_part_step1");
const step2 = document.querySelector(".right_part_step2");
const monthlyStep3 = document.querySelector(".right_part_step3_monthly");
const yearlyStep3 = document.querySelector(".right_part_step3_yearly");
const yearlyStep4 = document.querySelector(".right_part_step4_yearly");
const monthlyStep4 = document.querySelector(".right_part_step4_monthly");
const confirmation = document.querySelector(".right_part_confirmation");

let isValid = true;

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

  if (checkbox.checked) {
    yearlyStep3.classList.remove("hidden");
  } else {
    monthlyStep3.classList.remove("hidden");
  }

  number2.classList.remove("number_active");
  number3.classList.add("number_active");
});

prevButton2.forEach((prev) =>
  prev.addEventListener("click", function () {
    if (checkbox.checked) {
      yearlyStep3.classList.add("hidden");
    } else {
      monthlyStep3.classList.add("hidden");
    }
    step2.classList.remove("hidden");

    number2.classList.add("number_active");
    number3.classList.remove("number_active");
  })
);

function toggleCheckbox() {
  const checked = this.querySelector(".add-ons_check");
  if (!checked.checked) this.classList.add("hover");
  if (checked.checked) this.classList.remove("hover");

  checked.checked = !checked.checked;
}

addOns.forEach((addOn) => {
  addOn.addEventListener("click", toggleCheckbox);
});

nextButton3.forEach((next) =>
  next.addEventListener("click", function () {
    if (checkbox.checked) {
      yearlyStep3.classList.add("hidden");
      yearlyStep4.classList.remove("hidden");
    } else {
      monthlyStep3.classList.add("hidden");
      monthlyStep4.classList.remove("hidden");
    }

    number3.classList.remove("number_active");
    number4.classList.add("number_active");
  })
);

change.forEach((ch) =>
  ch.addEventListener("click", function () {
    monthlyStep4.classList.add("hidden");
    step2.classList.remove("hidden");
  })
);

prevButton3.forEach((prev) =>
  prev.addEventListener("click", function () {
    if (checkbox.checked) {
      yearlyStep4.classList.add("hidden");
      yearlyStep3.classList.remove("hidden");
    } else {
      monthlyStep4.classList.add("hidden");
      monthlyStep3.classList.remove("hidden");
    }

    number3.classList.add("number_active");
    number4.classList.remove("number_active");
  })
);

confirmButton.forEach((confirm) =>
  confirm.addEventListener("click", function () {
    if (checkbox.checked) {
      yearlyStep4.classList.add("hidden");
    } else {
      monthlyStep4.classList.add("hidden");
    }
    confirmation.classList.remove("hidden");
  })
);

addOns.forEach((addOn, index) => {
  addOn.addEventListener("click", function () {
    const optionContainerMonthly = document.querySelector(
      ".option_container_monthly"
    );
    const optionContainerYearly = document.querySelector(
      ".option_container_yearly"
    );

    const optionText = this.querySelector("h3").textContent;
    const optionPriceText = this.querySelector("p.price").textContent;

    const newOption = document.createElement("div");
    newOption.classList.add(`option1`);
    newOption.innerHTML = `
        <p>${optionText}</p>
        <p>${optionPriceText}</p>
      `;

    const newOption1 = document.createElement("div");
    newOption1.classList.add(`option1`);
    newOption1.innerHTML = `
          <p>${optionText}</p>
          <p>${optionPriceText}</p>
        `;

    // Toggle clicked class
    this.classList.toggle("clicked");

    if (this.classList.contains("clicked")) {
      optionContainerYearly.appendChild(newOption1.cloneNode(true));
      optionContainerMonthly.appendChild(newOption.cloneNode(true));
    } else {
      const optionToRemoveYearly = document.querySelector(
        `.right_part_step4_yearly .option1`
      );
      const optionToRemoveMonthly = document.querySelector(
        `.right_part_step4_monthly .option1`
      );

      optionContainerMonthly.removeChild(optionToRemoveMonthly);
      optionContainerYearly.removeChild(optionToRemoveYearly);
    }

    updateTotal();
  });

  function updateTotal() {
    const optionPrices = document.querySelectorAll(
      ".option_container > div:not(.option_summary) > p:last-child"
    );
    let total = 0;
    optionPrices.forEach((price) => {
      total += parseFloat(price.textContent.replace(/[^\d.-]/g, ""));
    });

    const totalElements = document.querySelectorAll(
      ".option_summary > p:last-child"
    );
    totalElements.forEach((element) => {
      element.textContent = `$${total}/mo`;
    });
  }
});
