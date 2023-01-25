const slideCounter = document.querySelectorAll(".comments-slides-counter img");
const rightButton = document.querySelector(".comments-right-button");
const leftButton = document.querySelector(".comments-left-button");
const slides = document.querySelectorAll(".comments-slide");

let currentSlide = 0;

function MoveRight() {
  rightButton.addEventListener("click", () => {
    if (currentSlide === 2) return;

    ++currentSlide;

    slides.forEach((slide) => {
      slide.style.transform =
        "translateX(" + -slide.offsetWidth * currentSlide + "px)";
    });

    SliderCounter();
  });
}

function MoveLeft() {
  leftButton.addEventListener("click", () => {
    if (currentSlide === 0) return;

    --currentSlide;

    slides.forEach((slide) => {
      slide.style.transform =
        "translateX(" + -slide.offsetWidth * currentSlide + "px)";
    });

    SliderCounter();
  });
}

function SliderCounter() {
  for (let index = 0; index < slideCounter.length; index++) {
    if (index === currentSlide) {
      slideCounter[index].style.opacity = "1";
      slideCounter[index].style.scale = "1.2";
    } else {
      slideCounter[index].style.opacity = "0.5";
      slideCounter[index].style.scale = "1";
    }
  }
}

export default function CommentsCarousel() {
  MoveRight();
  MoveLeft();
}
