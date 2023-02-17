const featuresButton = document.querySelector(".lang-link.features");
const featuresBlock = document.querySelector(".lang-features-block");

export default function ViewFeatures() {
  featuresButton.addEventListener("mouseover", () => {
    featuresBlock.style.padding = "1rem 3rem";
    featuresBlock.style.height = "100%";
  });
}
