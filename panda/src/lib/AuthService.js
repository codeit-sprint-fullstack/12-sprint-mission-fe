import { api } from "./api";

export async function signIn({ email, password }) {
  const response = await api.post("/auth/signIn", {
    email,
    password,
  });

  return response.data;
}

export async function signUp({
  email,
  nickname,
  password,
  passwordConfirmation,
}) {
  const response = await api.post("/auth/signUp", {
    email,
    nickname,
    password,
    passwordConfirmation,
  });

  return response.data;
}
