const authForm = document.querySelector('.auth-form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const passwordConfirmInput = document.querySelector('input[name="passwordConfirm"]');
const submitButton = document.querySelector('.submit');
const eyeButtons = document.querySelectorAll('.eye');

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const setErrorMessage = (input, message) => {
  const field = input.closest('.field');
  const errorElement = field.querySelector('.error-msg');
  
  if (message) {
    input.classList.add('error');
    errorElement.textContent = message;
  } else {
    input.classList.remove('error');
    errorElement.textContent = '';
  }
};

const toggleSubmitButton = () => {
  const isEmailValid = emailInput ? validateEmail(emailInput.value) : false;
  const isPasswordValid = passwordInput ? passwordInput.value.length >= 8 : false;
  
  let isPasswordConfirmValid = true;
  if (passwordConfirmInput) {
    isPasswordConfirmValid = passwordConfirmInput.value === passwordInput.value && passwordConfirmInput.value.length > 0;
  }

  const hasErrors = authForm.querySelectorAll('.input.error').length > 0;
  submitButton.disabled = !(isEmailValid && isPasswordValid && isPasswordConfirmValid && !hasErrors);
};

emailInput?.addEventListener('focusout', () => {
  const value = emailInput.value.trim();
  if (!value) {
    setErrorMessage(emailInput, '이메일을 입력해주세요.');
  } else if (!validateEmail(value)) {
    setErrorMessage(emailInput, '올바른 이메일 주소가 아닙니다.');
  } else {
    setErrorMessage(emailInput, '');
  }
  toggleSubmitButton();
});

passwordInput?.addEventListener('focusout', () => {
  const value = passwordInput.value;
  if (!value) {
    setErrorMessage(passwordInput, '비밀번호를 입력해주세요.');
  } else if (value.length < 8) {
    setErrorMessage(passwordInput, '비밀번호를 8자 이상 입력해주세요.');
  } else {
    setErrorMessage(passwordInput, '');
  }
  toggleSubmitButton();
});

passwordConfirmInput?.addEventListener('focusout', () => {
  if (passwordConfirmInput.value !== passwordInput.value) {
    setErrorMessage(passwordConfirmInput, '비밀번호가 일치하지 않습니다.');
  } else {
    setErrorMessage(passwordConfirmInput, '');
  }
  toggleSubmitButton();
});

authForm.addEventListener('input', toggleSubmitButton);

eyeButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const input = button.parentElement.querySelector('input');
    const icon = button.querySelector('i');

    if (input && icon) {
      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      } else {
        input.type = 'password';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      }
    }
  });
});

authForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!submitButton.disabled) {
    location.href = './items.html';
  }
});