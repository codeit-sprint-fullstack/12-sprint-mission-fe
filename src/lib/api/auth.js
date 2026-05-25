import { api } from "./client";

export const signUp = (data) => api.post(`/auth/signUp`, data);

export const signIn = (data) => api.post(`/auth/signIn`, data);

export const saveTokens = ({ accessToken, refreshToken }) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

export const removeTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

const getLocalStorage = (key) => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(key);
};

export const getAccessToken = () => getLocalStorage("accessToken");

export const getRefreshToken = () => getLocalStorage("refreshToken");

export const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) throw new Error("로그인이 필요합니다.");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    },
  );

  if (!res.ok) throw new Error("토큰 갱신에 실패했습니다.");

  const data = await res.json();
  localStorage.setItem("accessToken", data.accessToken);
  return data.accessToken;
};
