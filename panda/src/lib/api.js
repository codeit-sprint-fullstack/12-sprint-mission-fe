import axios from "axios";

export const BASE_URL = "https://panda-market-api.vercel.app";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

export const productApi = api;

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export function handleResponse(response) {
  if (!response.ok) {
    throw new Error(response.statusText || "요청에 실패했습니다.");
  }

  return response.json();
}
