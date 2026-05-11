const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function request(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    const error = new Error(
      errorData.error || "알 수 없는 오류가 발생했습니다.",
    );
    error.status = res.status;
    throw error;
  }

  if (res.status === 204) return null;

  return res.json();
}

export const api = {
  get: (url, options) => request(url, { ...options, method: "GET" }),
  post: (url, body, options) =>
    request(url, { ...options, method: "POST", body: JSON.stringify(body) }),
  patch: (url, body, options) =>
    request(url, { ...options, method: "PATCH", body: JSON.stringify(body) }),
  delete: (url, options) => request(url, { ...options, method: "DELETE" }),
};
