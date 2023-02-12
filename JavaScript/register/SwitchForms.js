const forms = document.querySelector("#details-form");
const formsCarousel = document.querySelector(".forms-carousel");
const formsContainer = document.querySelector(".form-container");
const switchButton = document.querySelector(".info-link.switch-forms");

let slides = 0;

export default function SwitchForms() {
  switchButton.addEventListener("click", () => {
    if (slides !== 0) slides = 0;
    else slides = 1;

    formsContainer.style.width = "0px";

    setTimeout(() => {
      formsCarousel.style.translate = -slides * 600 + "px 0";
      formsContainer.style.width = "600px";
    }, 600);
  });
}
