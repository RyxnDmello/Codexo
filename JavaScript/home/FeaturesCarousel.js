const slidesCounter = document.querySelectorAll(".features-slides-counter img");
const featuresCarousel = document.querySelector(".features-carousel");
const containers = document.querySelectorAll(".features-container");
const rightButton = document.querySelector(".features-right-arrow");
const leftButton = document.querySelector(".features-left-arrow");

let currentSlide = 0;

function MoveRight() {
  rightButton.addEventListener("click", () => {
    if (currentSlide === containers.length - 1) return;

    ++currentSlide;

    containers.forEach((container) => {
      container.style.transform =
        "translateX(" + -featuresCarousel.clientWidth * currentSlide + "px)";
    });

    SlidesCounter();
  });
}

function MoveLeft() {
  leftButton.addEventListener("click", () => {
    if (currentSlide === 0) return;

    --currentSlide;

    containers.forEach((container) => {
      container.style.transform =
        "translateX(" + -featuresCarousel.clientWidth * currentSlide + "px)";
    });

    SlidesCounter();
  });
}

function SlidesCounter() {
  for (let index = 0; index < slidesCounter.length; index++) {
    if (index === currentSlide) {
      slidesCounter[index].style.translate = "0 -10px";
      slidesCounter[index].style.opacity = "1";
    } else {
      slidesCounter[index].style.translate = "0 0";
      slidesCounter[index].style.opacity = "0.4";
    }
  }
}

export default function FeaturesCarousel() {
  MoveRight();
  MoveLeft();
}
