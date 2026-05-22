export const validateLogin = ({ email, password }) => {
  const errors = {};

  if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "올바른 이메일 형식이 아닙니다";
  }

  if (password.length < 8) {
    errors.password = "비밀번호를 8자 이상 입력해주세요";
  }

  return errors;
};

export const validateSignup = ({
  email,
  nickname,
  password,
  passwordConfirmation,
}) => {
  const errors = validateLogin({ email, password });

  if (!nickname.trim()) {
    errors.nickname = "닉네임을 입력해주세요";
  }

  if (passwordConfirmation.length < 8) {
    errors.passwordConfirmation = "비밀번호를 8자 이상 입력해주세요";
  }

  if (
    password.length >= 8 &&
    passwordConfirmation.length >= 8 &&
    password !== passwordConfirmation
  ) {
    errors.passwordConfirmation = "비밀번호가 일치하지 않습니다";
  }

  return errors;
};
