import { authFetch } from "@/lib/fetchClient";

export const authService = {
  // 로그인
  login: (email, password) =>
    authFetch("/auth/signIn", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
  // 회원가입
  signUp: (email, nickname, password, passwordConfirmation) =>
    authFetch("/auth/signUp", {
      method: "POST",
      body: JSON.stringify({ email, nickname, password, passwordConfirmation }),
    }),

  // 로그아웃
  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
};
