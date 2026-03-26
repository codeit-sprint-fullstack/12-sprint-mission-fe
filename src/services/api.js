import axios from "axios";

export const productApi = axios.create({
  baseURL: "https://panda-market-api.vercel.app/",
  timeout: 5000,
});

export function handleResponse(response) {
  if (!response.ok) {
    console.error(`Error: ${response.status}`);
    throw new Error(response.statusText);
  }
  return response.json();
}
