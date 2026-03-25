const USER_DATA = [
  { email: "codeit1@codeit.com", password: "codeit101!" },
  { email: "codeit2@codeit.com", password: "codeit202!" },
  { email: "codeit3@codeit.com", password: "codeit303!" },
  { email: "codeit4@codeit.com", password: "codeit404!" },
  { email: "codeit5@codeit.com", password: "codeit505!" },
  { email: "codeit6@codeit.com", password: "codeit606!" },
];

const email = document.getElementById("email");
const pass = document.getElementById("pass");
const nick = document.getElementById("nick");
const passCheck = document.getElementById("passCheck");

const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const passCheckError = document.getElementById("passCheckError");
const nickError = document.getElementById("nickError");

const submitBtn = document.getElementById("submit-button");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailValue = email.value.trim();
    const passValue = pass.value.trim();

    const user = USER_DATA.find(function (item) {
      return item.email === emailValue;
    });

    if (!user || user.password !== passValue) {
      //   alert("비밀번호가 일치하지 않습니다.");
      showModal("비밀번호가 일치하지 않습니다.");
      pass.classList.add("input-error");
      return;
    }

    alert("로그인 성공!");
    location.href = "../item.html";
  });
}

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailValue = email.value.trim();

    const user = USER_DATA.find(function (item) {
      return item.email === emailValue;
    });

    if (user) {
      //   alert("사용 중인 이메일입니다");
      showModal("사용 중인 이메일입니다");
      email.classList.add("input-error");
      return;
    }

    alert("회원가입 성공!");
    location.href = "../login.html";
  });
}

function validateEmail() {
  const value = email.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value) {
    emailError.textContent = "이메일을 입력해주세요.";
    email.classList.add("input-error");
    return false;
  } else if (!regex.test(value)) {
    emailError.textContent = "잘못된 이메일 형식입니다";
    email.classList.add("input-error");
    return false;
  } else {
    emailError.textContent = "";
    email.classList.remove("input-error");
    return true;
  }
}

function validatePassword() {
  const value = pass.value.trim();

  if (!value) {
    passError.textContent = "비밀번호를 입력해주세요.";
    pass.classList.add("input-error");
    return false;
  } else if (value.length < 8) {
    passError.textContent = "비밀번호를 8자 이상 입력해주세요.";
    pass.classList.add("input-error");
    return false;
  } else {
    passError.textContent = "";
    pass.classList.remove("input-error");
    return true;
  }
}

function validateNick() {
  const value = nick.value.trim();

  if (!value) {
    nickError.textContent = "닉네임을 입력해주세요.";
    nick.classList.add("input-error");
    return false;
  } else if (value.length < 3) {
    nickError.textContent = "닉네임은 3자 이상 입력해주세요.";
    nick.classList.add("input-error");
    return false;
  } else {
    nickError.textContent = "";
    nick.classList.remove("input-error");
    return true;
  }
}

function validatePassCheck() {
  if (!passCheck) return true;

  if (pass.value !== passCheck.value) {
    passCheckError.textContent = "비밀번호가 일치하지 않습니다.";
    passCheck.classList.add("input-error");
    return false;
  } else {
    passCheckError.textContent = "";
    passCheck.classList.remove("input-error");
    return true;
  }
}

function checkForm() {
  const isValid =
    validateEmail() &&
    validatePassword() &&
    validatePassCheck() &&
    validateNick();
  submitBtn.disabled = !isValid;
}

email.addEventListener("blur", validateEmail);
pass.addEventListener("blur", validatePassword);
if (nick) {
  nick.addEventListener("blur", validateNick);
}

if (passCheck) {
  passCheck.addEventListener("blur", validatePassCheck);
}

email.addEventListener("input", checkForm);
pass.addEventListener("input", checkForm);
if (nick) {
  nick.addEventListener("input", checkForm);
}

if (passCheck) {
  passCheck.addEventListener("input", checkForm);
}

const toggleIcons = document.querySelectorAll(".input-area img");

toggleIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    const input = this.previousElementSibling;
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  });
});

function showModal(message) {
  const modal = document.getElementById("errorModal");
  const modalMsg = document.getElementById("modalMessage");
  const modalClose = document.getElementById("modalClose");

  modalMsg.textContent = message;
  modal.style.display = "flex";

  modalClose.onclick = () => {
    modal.style.display = "none";
  };
}
