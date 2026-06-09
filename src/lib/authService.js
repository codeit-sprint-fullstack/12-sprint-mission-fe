import { authFetch, authHeaderFetch } from "@/lib/fetchClient";

export const authService = {
  // 로그인
  login: (email, password) =>
    authFetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
  // 회원가입
  signUp: (email, nickname, password) =>
    authFetch("/auth/signUp", {
      method: "POST",
      body: JSON.stringify({ email, nickname, password }),
    }),

  // 로그아웃
  logout: () => {
    authHeaderFetch("/auth/logout", { method: "POST" });
    localStorage.removeItem("accessToken");
    // localStorage.removeItem("refreshToken");
  },
};
