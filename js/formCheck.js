const USER_DATA = [
  { email: "codeit1@codeit.com", password: "codeit101!" },
  { email: "codeit2@codeit.com", password: "codeit202!" },
  { email: "codeit3@codeit.com", password: "codeit303!" },
  { email: "codeit4@codeit.com", password: "codeit404!" },
  { email: "codeit5@codeit.com", password: "codeit505!" },
  { email: "codeit6@codeit.com", password: "codeit606!" },
];

import { modalWindow, modalClose } from "./modal.js";

const loginBtn = document.querySelector(".btn-login");

let isLoginId = false;
let isLoginPw = false;
let isLoginPwCheck = true;

// submit
export const handleSubmit = (email, pw) => {
  if (!isLoginId || !isLoginPw || !isLoginPwCheck) return;

  const isUser = USER_DATA.findIndex((user) => {
    return user.email === email && user.password === pw;
  });

  isUser === -1
    ? modalWindow("비밀번호가 일치하지 않습니다..")
    : (location.href = "/items.html");
};

export const handleSignUp = (email) => {
  if (!isLoginId || !isLoginPw || !isLoginPwCheck) return;

  const isUser = USER_DATA.findIndex((user) => {
    return user.email === email;
  });

  isUser !== -1
    ? modalWindow("사용 중인 이메일입니다..")
    : (location.href = "/login.html");
};

// login id check
export function loginIdCheck(input) {
  const email = input.value;
  const regex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const velify = input.nextElementSibling;

  if (email === "") {
    isLoginId = false;
    validationCheck("이메일을 입력해주세요.", input, velify);
  } else if (email.match(regex) === null) {
    isLoginId = false;
    validationCheck("잘못된 이메일 형식입니다.", input, velify);
  } else {
    validationComplete(input, velify);
    isLoginId = true;
    isLoginPw && isLoginPwCheck ? (loginBtn.classList = "btn btn-login") : null;
  }
}

// login pw check
export function loginPwCheck(input, ischeck) {
  const pw = input.value;
  const velify = input.nextElementSibling;

  ischeck ? (isLoginPwCheck = false) : (isLoginPwCheck = true);

  if (pw === "") {
    isLoginPw = false;
    validationCheck("비밀번호를 입력해주세요.", input, velify);
  } else if (pw.length < 8) {
    isLoginPw = false;
    validationCheck("비밀번호를 8자 이상 입력해주세요.", input, velify);
  } else {
    validationComplete(input, velify);
    isLoginPw = true;
    isLoginId && isLoginPwCheck ? (loginBtn.classList = "btn btn-login") : null;
  }
}

// login pw double check
export function loginPwDoubleCheck(input, pwCheck) {
  const pw = input.value;
  const velify = input.nextElementSibling;

  if (pw === "") {
    isLoginPwCheck = false;
    validationCheck("비밀번호를 다시 입력해주세요.", input, velify);
  } else if (pw !== pwCheck) {
    isLoginPwCheck = false;
    validationCheck("비밀번호가 일치하지 않습니다.", input, velify);
  } else {
    isLoginPwCheck = true;
    validationComplete(input, velify);
    isLoginId && isLoginPw ? (loginBtn.classList = "btn btn-login") : null;
  }
}

export const togglePWVisible = (input, visible) => {
  if (input.type === "text") {
    input.type = "password";
    visible.classList = "form-filed-action";
  } else {
    input.type = "text";
    visible.classList = "form-filed-action visible";
  }
};

// login id pw check
function validationCheck(msg, ele, velify) {
  loginBtn.classList = "btn btn-login deactive";

  velify.style.display = "block";
  velify.textContent = msg;
  ele.classList = "form-filed-control error";
}

function validationComplete(ele, velify) {
  velify.style.display = "none";
  ele.classList = "form-filed-control";
}
