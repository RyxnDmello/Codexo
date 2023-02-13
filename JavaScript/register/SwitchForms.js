const forms = document.querySelectorAll(".form.create, .form.login");
const switchButton = document.querySelector(".info-link-button.switch");
const formsContainer = document.querySelector(".form-container");
const formsCarousel = document.querySelector(".forms-carousel");

let welcome = 0;
let slides = 0;

export default function SwitchForms() {
  WelcomeAnimation();

  switchButton.addEventListener("click", () => {
    if (slides !== 0) slides = 0;
    else slides = 1;

    formsContainer.style.width = "0px";

    setTimeout(() => {
      formsCarousel.style.translate = -slides * 600 + "px 0";
      formsContainer.style.width = "600px";
    }, 650);
  });
}

function WelcomeAnimation() {
  if (welcome === 1) return;

  formsContainer.style.width = "0px";

  setTimeout(() => {
    formsContainer.style.width = "600px";
    welcome = 1;
  }, 600);
}
