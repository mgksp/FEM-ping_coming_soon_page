const errorText = document.getElementById("error-text");
const btn = document.getElementById("notified-btn");
const emailInput = document.getElementById("email");

const showErrorMsg = () => {
  errorText.classList.toggle("hero__email-group__error--hide");

  setTimeout(() => {
    errorText.classList.toggle("hero__email-group__error--hide");
  }, 1000);
};

const validateEmail = (email) => {
  const emailRe =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let error = "";

  if (email === "") {
    error = "email address can't be empty";
  } else if (!emailRe.test(email)) {
    error = "enter a valid email address";
  }

  if (error !== "") {
    errorText.textContent = error;
    showErrorMsg();
  }
};

btn.addEventListener("click", () => {
  validateEmail(emailInput.value);
});
