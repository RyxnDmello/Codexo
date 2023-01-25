const RevealElements = document.querySelectorAll(".reveal *:not(.no-reveal)");

export default function Reveal() {
  window.addEventListener("scroll", () => {
    RevealElements.forEach((element) => {
      let windowHeight = window.innerHeight;
      let revealTop = element.getBoundingClientRect().top;
      let revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        element.classList.remove("inactive");
        element.classList.add("active");
      } else {
        element.classList.remove("active");
        element.classList.add("inactive");
      }
    });
  });
}
