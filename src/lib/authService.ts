import { authFetch, authHeaderFetch } from "./fetchClient";

export const authService = {
  // 로그인
  login: (email: string, password: string) =>
    authFetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
  // 회원가입
  signUp: (email: string, nickname: string, password: string) =>
    authFetch("/auth/signUp", {
      method: "POST",
      body: JSON.stringify({ email, nickname, password }),
    }),

  // 로그아웃
  logout: async () => {
    const res = await authHeaderFetch("/auth/logout", { method: "POST" });
    localStorage.removeItem("accessToken");
    // localStorage.removeItem("refreshToken");
    return res;
  },
};
