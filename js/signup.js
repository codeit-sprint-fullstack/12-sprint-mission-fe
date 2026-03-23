// ===== 요소 선택 =====
const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("passwordConfirmation");

const emailError = document.getElementById("email-error");
const nicknameError = document.getElementById("nickname-error");
const passwordError = document.getElementById("password-error");
const passwordConfirmError = document.getElementById("passwordConfirm-error");

const signupBtn = document.getElementById("signup-btn");


const USER_DATA = [
  { email: "codeit1@codeit.com" },
  { email: "codeit2@codeit.com" },
  { email: "codeit3@codeit.com" },
];

// ===== 검증 함수 =====
function validateEmail() {
  const value = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value) {
    emailError.textContent = "이메일을 입력해주세요.";
    emailInput.classList.add("input-error");
    return false;
  }
  if (!regex.test(value)) {
    emailError.textContent = "잘못된 이메일 형식입니다.";
    emailInput.classList.add("input-error");
    return false;
  }

  emailError.textContent = "";
  emailInput.classList.remove("input-error");
  return true;
}

function validateNickname() {
  const value = nicknameInput.value.trim();
  if (!value) {
    nicknameError.textContent = "닉네임을 입력해주세요.";
    nicknameInput.classList.add("input-error");
    return false;
  }
  nicknameError.textContent = "";
  nicknameInput.classList.remove("input-error");
  return true;
}

function validatePassword() {
  const value = passwordInput.value.trim();
  if (!value) {
    passwordError.textContent = "비밀번호를 입력해주세요.";
    passwordInput.classList.add("input-error");
    return false;
  }
  if (value.length < 8) {
    passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
    passwordInput.classList.add("input-error");
    return false;
  }
  passwordError.textContent = "";
  passwordInput.classList.remove("input-error");
  return true;
}

function validatePasswordConfirm() {
  const value = passwordConfirmInput.value.trim();
  if (value !== passwordInput.value.trim()) {
    passwordConfirmError.textContent = "비밀번호가 일치하지 않습니다.";
    passwordConfirmInput.classList.add("input-error");
    return false;
  }
  passwordConfirmError.textContent = "";
  passwordConfirmInput.classList.remove("input-error");
  return true;
}

// ===== 버튼 활성화/비활성화 =====
function toggleSignupBtn() {
  if (
    validateEmail() &&
    validateNickname() &&
    validatePassword() &&
    validatePasswordConfirm()
  ) {
    signupBtn.disabled = false;
    signupBtn.style.background = "#3692ff";
  } else {
    signupBtn.disabled = true;
    signupBtn.style.background = "#9ca3af";
  }
}

// ===== 이벤트 연결 =====
emailInput.addEventListener("blur", () => {
  validateEmail();
  toggleSignupBtn();
});
nicknameInput.addEventListener("blur", () => {
  validateNickname();
  toggleSignupBtn();
});
passwordInput.addEventListener("blur", () => {
  validatePassword();
  toggleSignupBtn();
});
passwordConfirmInput.addEventListener("blur", () => {
  validatePasswordConfirm();
  toggleSignupBtn();
});

// ===== 회원가입 클릭 =====
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // 이메일 중복 체크
  const email = emailInput.value.trim();
  if (USER_DATA.some((u) => u.email === email)) {
    alert("사용 중인 이메일입니다.");
    return;
  }

  // 모든 검증 통과
  alert("회원가입 성공!");
  window.location.href = "/login";
});
