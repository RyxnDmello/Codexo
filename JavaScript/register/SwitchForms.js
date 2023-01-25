const signUpInsteadButton = document.querySelector(".sign-up-instead-button");
const logInInsteadButton = document.querySelector(".log-in-instead-button");
const signUpFrom = document.querySelector("#sign-up-form");
const logInFrom = document.querySelector("#log-in-form");

function SwitchToLogInForm() {
  logInInsteadButton.addEventListener("click", () => {
    signUpFrom.classList.remove("sign-up-fade-in");
    signUpFrom.classList.add("sign-up-fade-out");

    setTimeout(() => {
      logInFrom.style.transform = "translateX(-450px)";
      signUpFrom.style.transform = "translateX(-450px)";
      signUpFrom.classList.remove("sign-up-fade-out");
      logInFrom.classList.add("log-in-fade-in");
    }, 600);
  });
}

function SwitchToSignUpForm() {
  signUpInsteadButton.addEventListener("click", () => {
    logInFrom.classList.remove("log-in-fade-in");
    logInFrom.classList.add("log-in-fade-out");

    setTimeout(() => {
      logInFrom.style.transform = "translateX(0)";
      signUpFrom.style.transform = "translateX(0)";
      logInFrom.classList.remove("log-in-fade-out");
      signUpFrom.classList.add("sign-up-fade-in");
    }, 600);
  });
}

export default function SwitchForms() {
  SwitchToSignUpForm();
  SwitchToLogInForm();
}
