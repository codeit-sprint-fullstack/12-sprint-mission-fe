import axios from "axios";

export const BASE_URL = "https://panda-market-api-crud.vercel.app";

export const productApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔥 fetch용 공통 응답 처리
export function handleResponse(response) {
  if (!response.ok) {
    console.error(`Error: ${response.status}`);
    throw new Error(response.statusText);
  }
  return response.json();
}
