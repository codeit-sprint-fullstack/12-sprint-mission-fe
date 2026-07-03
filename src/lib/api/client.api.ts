import type { ApiError } from "@/types/api";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function request<T>(
  endpoint: string,
  options: RequestInit = {},
  retry = true,
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;

  try {
    const res = await fetch(url, {
      ...options,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    const shouldRefresh =
      retry &&
      res.status === 401 &&
      !endpoint.startsWith("/auth/login") &&
      !endpoint.startsWith("/auth/signup") &&
      !endpoint.startsWith("/auth/refresh");

    // 1. HTTP 에러 처리 (400, 500 등)
    if (!res.ok) {
      // 401이고 재시도 가능하며 로그인/회원가입/토큰 재갱신이 아닌 경우 토큰 갱신 후 원래 요청 재시도
      if (shouldRefresh) {
        try {
          await fetch(`${BASE_URL}/auth/refresh`, {
            method: "POST",
            credentials: "include",
          }).then((refreshRes) => {
            if (!refreshRes.ok) {
              const error: ApiError = new Error("토큰이 유효하지 않습니다");
              error.status = 401;
              throw error;
            }
          });

          return request(endpoint, options, false);
        } catch {
          const error: ApiError = new Error("로그인이 만료되었습니다.");
          error.status = 401;
          throw error;
        }
      }

      const errorData = await res.json().catch(() => ({}));
      const error: ApiError = new Error(
        errorData.message || "알 수 없는 오류가 발생했습니다.",
      );
      error.status = res.status;
      throw error;
    }

    if (res.status === 204) {
      return null as T;
    }

    return (await res.json()) as T;
  } catch (err) {
    // 2. 네트워크 에러 처리 (Failed to fetch 등)
    // err의 타입이 unknown이기 때문에 바로 사용하지 못하고, instanceof로 Error
    if (err instanceof Error && err.message === "Failed to fetch") {
      throw new Error("네트워크 연결이 원활하지 않습니다.");
    }

    throw err;
  }
}

export const api = {
  get: <TResponse>(url: string, options?: RequestInit) =>
    request<TResponse>(url, { ...options, method: "GET" }),

  post: <TResponse, TBody = unknown>(
    url: string,
    body?: TBody,
    options?: RequestInit,
  ) =>
    request<TResponse>(url, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
    }),

  patch: <TResponse, TBody = unknown>(
    url: string,
    body?: TBody,
    options?: RequestInit,
  ) =>
    request<TResponse>(url, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(body),
    }),

  delete: <TResponse>(url: string, options?: RequestInit) =>
    request<TResponse>(url, { ...options, method: "DELETE" }),
};
