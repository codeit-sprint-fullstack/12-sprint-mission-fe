import axios from "axios";

export const BASE_URL = "https://panda-market-backend-gc3w.onrender.com";

export const productApi = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export function handleResponse(response) {
  if (!response.ok) {
    console.error(`Error: ${response.status}`);
    throw new Error(response.statusText);
  }
  return response.json();
}
