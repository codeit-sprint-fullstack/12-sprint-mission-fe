// ===== 요소 선택 =====
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const loginBtn = document.querySelector("button[type='submit']");

const USER_DATA = [
  { email: "codeit1@codeit.com", password: "codeit101!" },
  { email: "codeit2@codeit.com", password: "codeit202!" },
  { email: "codeit3@codeit.com", password: "codeit303!" },
  { email: "codeit4@codeit.com", password: "codeit404!" },
  { email: "codeit5@codeit.com", password: "codeit505!" },
  { email: "codeit6@codeit.com", password: "codeit606!" },
];

// ===== 이메일 검증 =====
function validateEmail() {
  const value = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value) {
    emailError.textContent = "이메일을 입력해주세요.";
    emailInput.classList.add("input-error"); // 빨간 테두리
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

// ===== 비밀번호 검증 =====
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

// ===== 버튼 활성화/비활성화 =====
function toggleLoginBtn() {
  if (validateEmail() && validatePassword()) {
    loginBtn.disabled = false;
    loginBtn.style.background = "#3692ff"; // 활성화 시 파란색
  } else {
    loginBtn.disabled = true;
    loginBtn.style.background = "#9ca3af"; // 비활성화 회색
  }
}

// ===== 이벤트 연결 =====
emailInput.addEventListener("blur", () => {
  validateEmail();
  toggleLoginBtn();
});

passwordInput.addEventListener("blur", () => {
  validatePassword();
  toggleLoginBtn();
});

emailInput.addEventListener("input", toggleLoginBtn);
passwordInput.addEventListener("input", toggleLoginBtn);

// ===== 로그인 버튼 클릭 처리 =====
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (!isEmailValid || !isPasswordValid) {
    return; // 여기서 막아줘야 에러 표시됨
  }

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const user = USER_DATA.find((u) => u.email === email);

  if (!user || user.password !== password) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  window.location.href = "/items";
});
