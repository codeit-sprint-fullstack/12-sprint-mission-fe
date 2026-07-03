export type LoginValues = {
  email: string;
  password: string;
};

export type LoginErrors = Partial<Record<keyof LoginValues, string>>;

export type SignupValues = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
};

export type SignupErrors = Partial<Record<keyof SignupValues, string>>;
