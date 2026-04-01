import {
  handleSignUp,
  togglePWVisible,
  loginIdCheck,
  loginPwCheck,
  loginPwDoubleCheck,
} from "./formCheck.js";

const loginIdInput = document.querySelector("#login-id");
const loginPwInput = document.querySelector("#login-pw");
const loginPwCheckInput = document.querySelector("#login-pw-check");

const pwVisible = document.querySelector("#pw-visibility");
const pwCheckVisible = document.querySelector("#pw-check-visibility");

const signupForm = document.querySelector("#signup-form");

// focus out 시 validate 검사
loginIdInput.addEventListener("focusout", (e) => {
  loginIdCheck(e.target);
});

loginPwInput.addEventListener("focusout", (e) => {
  loginPwCheck(e.target, true);
});

loginPwCheckInput.addEventListener("focusout", (e) => {
  loginPwDoubleCheck(e.target, loginPwInput.value);
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  handleSignUp(loginIdInput.value);
});

// pw visibility check
pwVisible.addEventListener("click", (e) => {
  togglePWVisible(loginPwInput, e.target);
});

pwCheckVisible.addEventListener("click", (e) => {
  togglePWVisible(loginPwCheckInput, e.target);
});
