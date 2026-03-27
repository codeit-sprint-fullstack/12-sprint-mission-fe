import {
  USER_DATA,
  getTrimmedValue,
  validateEmail,
  validatePassword,
  updateSubmitButtonState,
  setupPasswordToggle,
  createModalController,
} from "./authShared.js";

const form = document.getElementById("login-form");

if (form) {
  const emailInput = document.getElementById("login-email");
  const passwordInput = document.getElementById("login-password");
  const submitButton = document.getElementById("login-submit");
  const { openModal } = createModalController();

  const inputs = [emailInput, passwordInput];
  const validators = [
    () => validateEmail(emailInput),
    () => validatePassword(passwordInput),
  ];

  setupPasswordToggle();

  emailInput.addEventListener("blur", () => {
    validateEmail(emailInput);
    updateSubmitButtonState(form, submitButton, inputs, validators);
  });

  passwordInput.addEventListener("blur", () => {
    validatePassword(passwordInput);
    updateSubmitButtonState(form, submitButton, inputs, validators);
  });

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input === emailInput) validateEmail(emailInput);
      if (input === passwordInput) validatePassword(passwordInput);
      updateSubmitButtonState(form, submitButton, inputs, validators);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isEmailValid = validateEmail(emailInput);
    const isPasswordValid = validatePassword(passwordInput);

    updateSubmitButtonState(form, submitButton, inputs, validators);

    if (!isEmailValid || !isPasswordValid) return;

    const matchedUser = USER_DATA.find(
      (user) =>
        user.email === getTrimmedValue(emailInput) &&
        user.password === passwordInput.value,
    );

    if (!matchedUser) {
      openModal("비밀번호가 일치하지 않습니다.");
      return;
    }

    window.location.href = "/items";
  });
}
