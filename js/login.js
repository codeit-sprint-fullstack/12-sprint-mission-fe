import {
  handleSubmit,
  togglePWVisible,
  loginIdCheck,
  loginPwCheck,
} from "./formCheck.js";

const loginIdInput = document.querySelector("#login-id");
const loginPwInput = document.querySelector("#login-pw");

const pwVisible = document.querySelector("#pw-visibility");

const loginForm = document.querySelector("#login-form");

// focus out 시 validate 검사
loginIdInput.addEventListener("focusout", (e) => {
  loginIdCheck(e.target);
});

loginPwInput.addEventListener("focusout", (e) => {
  loginPwCheck(e.target, false);
});

// submit
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  handleSubmit(loginIdInput.value, loginPwInput.value);
});

// pw visibility check
pwVisible.addEventListener("click", (e) => {
  togglePWVisible(loginPwInput, e.target);
});
