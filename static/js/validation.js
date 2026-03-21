function showError(input, msg) {
  input.classList.add("input--error");

  let errorMsg = input.parentElement.querySelector(".error-message");
  if (!errorMsg) {
    errorMsg = document.createElement("p");
    errorMsg.classList.add("error-message");
    input.parentElement.appendChild(errorMsg);
  }
  errorMsg.textContent = msg;
}

function clearError(input) {
  input.classList.remove("input--error");

  const errorMsg = input.parentElement.querySelector(".error-message");
  if (errorMsg) errorMsg.remove();
}

function validateEmail(input) {
  const { value } = input;
  const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value.trim()) {
    showError(input, "이메일을 입력해주세요.");
    return false;
  }
  if (!regEx.test(value.trim())) {
    showError(input, "잘못된 이메일 형식입니다.");
    return false;
  }

  clearError(input);
  return true;
}

function validatePassword(input) {
  const { value } = input;

  if (!value) {
    showError(input, "비밀번호를 입력해주세요.");
    return false;
  }

  if (value.length < 8) {
    showError(input, "비밀번호를 8자 이상 입력해주세요.");
    return false;
  }
}
