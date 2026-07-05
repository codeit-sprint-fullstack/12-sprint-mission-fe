import type { ApiError } from "@/types/api";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// 서버(Server Component 등)에서 실행 중이면 브라우저 쿠키가 자동으로 안 실리므로 직접 포워딩
async function getRequestHeaders(
  customHeaders?: HeadersInit,
): Promise<HeadersInit> {
  const baseHeaders: HeadersInit = {
    "Content-Type": "application/json",
    ...customHeaders,
  };

  if (typeof window === "undefined") {
    const { cookies } = await import("next/headers");
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    if (cookieHeader) {
      return { ...baseHeaders, Cookie: cookieHeader };
    }
  }

  return baseHeaders;
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {},
  retry = true,
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;

  try {
    const headers = await getRequestHeaders(options.headers);

    const res = await fetch(url, {
      ...options,
      credentials: "include",
      headers,
    });

    const shouldRefresh =
      retry &&
      res.status === 401 &&
      !endpoint.startsWith("/auth/login") &&
      !endpoint.startsWith("/auth/signup") &&
      !endpoint.startsWith("/auth/refresh");

    if (!res.ok) {
      if (shouldRefresh) {
        try {
          const refreshHeaders = await getRequestHeaders();

          await fetch(`${BASE_URL}/auth/refresh`, {
            method: "POST",
            credentials: "include",
            headers: refreshHeaders,
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
        errorData.error || "알 수 없는 오류가 발생했습니다.",
      );
      error.status = res.status;
      throw error;
    }

    if (res.status === 204) {
      return null as T;
    }

    return (await res.json()) as T;
  } catch (err) {
    if (err instanceof Error && err.message === "Failed to fetch") {
      const error: ApiError = new Error("네트워크 연결이 원활하지 않습니다.");
      throw error;
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
