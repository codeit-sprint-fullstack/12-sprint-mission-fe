export const USER_DATA = [
  { email: "codeit1@codeit.com", password: "codeit101!" },
  { email: "codeit2@codeit.com", password: "codeit202!" },
  { email: "codeit3@codeit.com", password: "codeit303!" },
  { email: "codeit4@codeit.com", password: "codeit404!" },
  { email: "codeit5@codeit.com", password: "codeit505!" },
  { email: "codeit6@codeit.com", password: "codeit606!" },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function getTrimmedValue(input) {
  return input.value.trim();
}

export function setError(input, message) {
  const formGroup = input.closest(".form-group");
  if (!formGroup) return;

  const errorMessage = formGroup.querySelector(".input-error-message");
  input.classList.add("input-error");

  if (errorMessage) {
    errorMessage.textContent = message;
  }
}

export function clearError(input) {
  const formGroup = input.closest(".form-group");
  if (!formGroup) return;

  const errorMessage = formGroup.querySelector(".input-error-message");
  input.classList.remove("input-error");

  if (errorMessage) {
    errorMessage.textContent = "";
  }
}

export function isValidEmailValue(value) {
  return EMAIL_REGEX.test(value.trim());
}

export function isValidPasswordValue(value) {
  return value.length >= 8;
}

export function isValidNicknameValue(value) {
  return value.trim() !== "";
}

export function isSamePassword(password, confirmPassword) {
  return password === confirmPassword;
}

export function validateEmail(input) {
  const value = getTrimmedValue(input);

  if (!value) {
    setError(input, "이메일을 입력해주세요.");
    return false;
  }

  if (!isValidEmailValue(value)) {
    setError(input, "잘못된 이메일 형식입니다.");
    return false;
  }

  clearError(input);
  return true;
}

export function validateNickname(input) {
  const value = getTrimmedValue(input);

  if (!value) {
    setError(input, "닉네임을 입력해주세요.");
    return false;
  }

  clearError(input);
  return true;
}

export function validatePassword(input) {
  const value = input.value;

  if (!value) {
    setError(input, "비밀번호를 입력해주세요.");
    return false;
  }

  if (!isValidPasswordValue(value)) {
    setError(input, "비밀번호를 8자 이상 입력해주세요");
    return false;
  }

  clearError(input);
  return true;
}

export function validatePasswordConfirm(passwordInput, confirmInput) {
  const value = confirmInput.value;

  if (!value) {
    setError(confirmInput, "비밀번호를 입력해주세요.");
    return false;
  }

  if (!isValidPasswordValue(value)) {
    setError(confirmInput, "비밀번호를 8자 이상 입력해주세요");
    return false;
  }

  if (!isSamePassword(passwordInput.value, value)) {
    setError(confirmInput, "비밀번호가 일치하지 않습니다.");
    return false;
  }

  clearError(confirmInput);
  return true;
}

export function setButtonState(button, isActive) {
  button.disabled = !isActive;
  button.classList.toggle("active", isActive);
}

export function setupPasswordToggle() {
  const toggleButtons = document.querySelectorAll(".toggle-password");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const targetInput = document.getElementById(targetId);

      if (!targetInput) return;

      targetInput.type = targetInput.type === "password" ? "text" : "password";
    });
  });
}

export function createModalController() {
  const modalOverlay = document.getElementById("modal-overlay");
  const modalMessage = document.getElementById("modal-message");
  const modalCloseButton = document.getElementById("modal-close-button");

  function openModal(message) {
    if (!modalOverlay || !modalMessage) return;
    modalMessage.textContent = message;
    modalOverlay.classList.remove("hidden");
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.add("hidden");
  }

  if (modalCloseButton) {
    modalCloseButton.addEventListener("click", closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (event) => {
      if (event.target === modalOverlay) {
        closeModal();
      }
    });
  }

  return { openModal, closeModal };
}
