const menuButton = document.querySelector(".nav-menu-button");
const navMenu = document.querySelector(".nav-menu");

export default function NavbarMenu() {
  ToggleMenu();
}

function ToggleMenu() {
  menuButton.addEventListener("click", () => {
    if (navMenu.classList.contains("menu-opened")) {
      navMenu.classList.remove("menu-opened");
      navMenu.classList.add("menu-closed");
    } else {
      navMenu.classList.remove("menu-closed");
      navMenu.classList.add("menu-opened");
    }
  });
}
