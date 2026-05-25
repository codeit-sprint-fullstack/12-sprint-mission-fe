import { getAccessToken, refreshAccessToken, removeTokens } from "./auth";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function request(endpoint, options = {}, retry = true) {
  const url = `${BASE_URL}${endpoint}`;
  const accessToken = getAccessToken();

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        ...options.headers,
      },
    });

    // 1. HTTP 에러 처리 (400, 500 등)
    if (!res.ok) {
      // 401이고 재시도 가능하면 토큰 갱신 후 재시도
      if (res.status === 401 && retry) {
        try {
          const newToken = await refreshAccessToken();
          return request(
            endpoint,
            {
              ...options,
              headers: {
                ...options.headers,
                Authorization: `Bearer ${newToken}`,
              },
            },
            false,
          );
        } catch {
          removeTokens();
          window.location.href = "/login";
          return;
        }
      }

      const errorData = await res.json().catch(() => ({}));
      const error = new Error(
        errorData.message || "알 수 없는 오류가 발생했습니다.",
      );
      error.status = res.status;
      error.details = errorData.details;
      throw error;
    }

    if (res.status === 204) return null;

    return res.json();
  } catch (err) {
    // 2. 네트워크 에러 처리 (Failed to fetch 등)
    if (err.message === "Failed to fetch") {
      throw new Error("네트워크 연결이 원활하지 않습니다.");
    }

    throw err;
  }
}

export const api = {
  get: (url, options) => request(url, { ...options, method: "GET" }),
  post: (url, body, options) =>
    request(url, { ...options, method: "POST", body: JSON.stringify(body) }),
  patch: (url, body, options) =>
    request(url, { ...options, method: "PATCH", body: JSON.stringify(body) }),
  delete: (url, options) => request(url, { ...options, method: "DELETE" }),
};
