const featuresButtons = document.querySelectorAll(".lang-link.features");
const featuresBlocks = document.querySelectorAll(".lang-features-block");
let blocksOpen = [];

export default function ViewFeatures() {
  SetBlocksOpen();
  OpenFeaturesBlock();
}

function OpenFeaturesBlock() {
  featuresButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (blocksOpen[index] === false) {
        featuresBlocks[index].style.padding = "3rem 0";
        featuresBlocks[index].style.height = "350px";
        blocksOpen[index] = true;
        return;
      }

      featuresBlocks[index].style.padding = "0";
      featuresBlocks[index].style.height = "0";
      blocksOpen[index] = false;
    });
  });
}

function SetBlocksOpen() {
  featuresButtons.forEach(() => {
    blocksOpen.push(false);
  });
}
