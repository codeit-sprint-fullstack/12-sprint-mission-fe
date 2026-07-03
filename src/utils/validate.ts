import type {
  LoginErrors,
  LoginValues,
  SignupErrors,
  SignupValues,
} from "@/types/auth";

export const validateLogin = ({
  email,
  password,
}: LoginValues): LoginErrors => {
  const errors: Partial<Record<keyof LoginValues, string>> = {};

  if (!email.trim()) {
    errors.email = "이메일을 입력해주세요";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "올바른 이메일 형식이 아닙니다";
  }

  if (!password) {
    errors.password = "비밀번호를 입력해주세요";
  } else if (password.length < 8) {
    errors.password = "비밀번호를 8자 이상 입력해주세요";
  }

  return errors;
};

export const validateSignup = ({
  email,
  nickname,
  password,
  passwordConfirmation,
}: SignupValues): SignupErrors => {
  const errors: SignupErrors = validateLogin({ email, password });

  if (!nickname.trim()) {
    errors.nickname = "닉네임을 입력해주세요";
  }

  if (!passwordConfirmation) {
    errors.passwordConfirmation = "비밀번호 확인을 입력해주세요";
  } else if (passwordConfirmation.length < 8) {
    errors.passwordConfirmation = "비밀번호를 8자 이상 입력해주세요";
  } else if (password.length >= 8 && password !== passwordConfirmation) {
    errors.passwordConfirmation = "비밀번호가 일치하지 않습니다";
  }

  return errors;
};
