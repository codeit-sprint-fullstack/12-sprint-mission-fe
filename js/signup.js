import {
  USER_DATA,
  getTrimmedValue,
  validateEmail,
  validateNickname,
  validatePassword,
  validatePasswordConfirm,
  isValidEmailValue,
  isValidNicknameValue,
  isValidPasswordValue,
  isSamePassword,
  setButtonState,
  setupPasswordToggle,
  createModalController,
} from "./authShared.js";

const form = document.getElementById("signup-form");

if (form) {
  const emailInput = document.getElementById("signup-email");
  const nicknameInput = document.getElementById("signup-nickname");
  const passwordInput = document.getElementById("signup-password");
  const passwordConfirmInput = document.getElementById(
    "signup-password-confirm",
  );
  const submitButton = document.getElementById("signup-submit");
  const { openModal } = createModalController();

  setupPasswordToggle();

  function updateButtonState() {
    const emailValue = getTrimmedValue(emailInput);
    const nicknameValue = getTrimmedValue(nicknameInput);
    const passwordValue = passwordInput.value;
    const confirmValue = passwordConfirmInput.value;

    const isFormValid =
      emailValue !== "" &&
      nicknameValue !== "" &&
      passwordValue !== "" &&
      confirmValue !== "" &&
      isValidEmailValue(emailValue) &&
      isValidNicknameValue(nicknameValue) &&
      isValidPasswordValue(passwordValue) &&
      isValidPasswordValue(confirmValue) &&
      isSamePassword(passwordValue, confirmValue);

    setButtonState(submitButton, isFormValid);
  }

  emailInput.addEventListener("blur", () => {
    validateEmail(emailInput);
    updateButtonState();
  });

  nicknameInput.addEventListener("blur", () => {
    validateNickname(nicknameInput);
    updateButtonState();
  });

  passwordInput.addEventListener("blur", () => {
    validatePassword(passwordInput);

    if (passwordConfirmInput.value !== "") {
      validatePasswordConfirm(passwordInput, passwordConfirmInput);
    }

    updateButtonState();
  });

  passwordConfirmInput.addEventListener("blur", () => {
    validatePasswordConfirm(passwordInput, passwordConfirmInput);
    updateButtonState();
  });

  emailInput.addEventListener("input", () => {
    if (getTrimmedValue(emailInput) === "") {
      // blur 전에는 빈칸 에러를 강제로 띄우지 않음
    } else {
      validateEmail(emailInput);
    }
    updateButtonState();
  });

  nicknameInput.addEventListener("input", () => {
    if (getTrimmedValue(nicknameInput) !== "") {
      validateNickname(nicknameInput);
    }
    updateButtonState();
  });

  passwordInput.addEventListener("input", () => {
    if (passwordInput.value !== "") {
      validatePassword(passwordInput);
    }

    if (passwordConfirmInput.value !== "") {
      validatePasswordConfirm(passwordInput, passwordConfirmInput);
    }

    updateButtonState();
  });

  passwordConfirmInput.addEventListener("input", () => {
    if (passwordConfirmInput.value !== "") {
      validatePasswordConfirm(passwordInput, passwordConfirmInput);
    }
    updateButtonState();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isEmailValid = validateEmail(emailInput);
    const isNicknameValid = validateNickname(nicknameInput);
    const isPasswordValid = validatePassword(passwordInput);
    const isPasswordConfirmValid = validatePasswordConfirm(
      passwordInput,
      passwordConfirmInput,
    );

    updateButtonState();

    if (
      !isEmailValid ||
      !isNicknameValid ||
      !isPasswordValid ||
      !isPasswordConfirmValid
    ) {
      return;
    }

    const existingUser = USER_DATA.find(
      (user) => user.email === getTrimmedValue(emailInput),
    );

    if (existingUser) {
      openModal("사용 중인 이메일입니다.");
      return;
    }

    window.location.href = "/login.html";
  });

  updateButtonState();
}
