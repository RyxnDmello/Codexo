let switchText = document.querySelector(".info-link-button-text.switch");
const switchButton = document.querySelector(".info-link-button.switch");
const formsContainer = document.querySelector(".form-container");
const formsCarousel = document.querySelector(".forms-carousel");

let welcome = 0;
let slides = 0;

export default function SwitchForms() {
  Welcome();
  Switch();
}

function Switch() {
  switchButton.addEventListener("click", () => {
    if (slides !== 0) slides = 0;
    else slides = 1;

    ChangeForms();
    ChangeButtonText();
  });
}

function Welcome() {
  if (welcome === 1) return;

  formsContainer.style.width = "0px";

  setTimeout(() => {
    formsContainer.style.width = "600px";
    welcome = 1;
  }, 600);
}

function ChangeForms() {
  formsContainer.style.width = "0px";

  setTimeout(() => {
    formsCarousel.style.translate = -slides * 600 + "px 0";
    formsContainer.style.width = "600px";
  }, 650);
}

function ChangeButtonText() {
  switchText.style.opacity = "0";

  setTimeout(() => {
    if (slides === 0) switchText.textContent = "Login";
    else switchText.textContent = "Signup";
  }, 500);

  setTimeout(() => {
    switchText.style.opacity = "1";
  }, 1000);
}
