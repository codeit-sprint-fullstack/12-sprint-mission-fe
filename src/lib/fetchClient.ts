// 브라우저 환경에서만 localStorage 접근
const getAuthToken = () => {
  if (typeof window !== "undefined") return localStorage.getItem("accessToken");
  return null;
};

/**
 * 기본 fetch 클라이언트 - 인증이 필요 없는 일반 요청용
 */
export const defaultFetch = async (url: string, options: RequestInit = {}) => {
  // const baseURL = process.env.NEXT_PUBLIC_PANDAMARKET_API_URL;
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const defaultOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  };

  const mergedOptions: RequestInit = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const response = await fetch(`${baseURL}${url}`, mergedOptions);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
};

/**
 * 쿠키 인증 fetch 클라이언트
 */
export const cookieFetch = async (url: string, options: RequestInit = {}) => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const defaultOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    cache: "no-store",
  };

  const mergedOptions: RequestInit = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  // 원래 요청 실행
  let response = await fetch(`${baseURL}${url}`, mergedOptions);

  // 401 에러 발생 시 토큰 갱신 시도
  if (response.status === 401 && url !== "/auth/token/refresh") {
    try {
      // 토큰 갱신 요청
      const refreshResponse = await fetch(`${baseURL}/auth/token/refresh`, {
        method: "POST",
        credentials: "include",
        cache: "no-store",
      });

      if (refreshResponse.ok) {
        // 토큰 갱신 성공 시 원래 요청 재시도
        response = await fetch(`${baseURL}${url}`, mergedOptions);
      }
    } catch (error) {
      console.error("토큰 갱신 실패:", error);
    }
  }

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  // 응답 본문이 있는지 확인
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return response.json();
  }

  // 본문이 없거나 JSON이 아닌 경우 응답 객체 자체 반환
  return { status: response.status, ok: response.ok };
};

/**
 * Authorization-Header 인증 fetch 클라이언트
 */
export const authHeaderFetch = async (
  url: string,
  options: RequestInit = {},
) => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const token = getAuthToken();

  const defaultOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    cache: "no-store",
  };

  const mergedOptions: RequestInit = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  // 원래 요청 실행
  let res = await fetch(`${baseURL}${url}`, mergedOptions);

  // 401 에러 발생 시 토큰 갱신 시도
  if (res.status === 401 && url !== "/auth/refresh") {
    try {
      // 토큰 갱신 요청
      const refreshResponse = await fetch(`${baseURL}/auth/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken: localStorage.getItem("refreshToken"),
        }),
        cache: "no-store",
      });

      if (refreshResponse.ok) {
        const data = await refreshResponse.json();
        localStorage.setItem("accessToken", data.accessToken);
        mergedOptions.headers = {
          ...mergedOptions.headers,
          Authorization: `Bearer ${data.accessToken}`,
        };
        // 토큰 갱신 성공 시 원래 요청 재시도
        res = await fetch(`${baseURL}${url}`, mergedOptions);
      } else {
        if (typeof window !== "undefined") {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        }
      }
    } catch (error) {
      console.error("토큰 갱신 실패:", error);
      if (typeof window !== "undefined") {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    }
  }

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  // 응답 본문이 있는지 확인
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return res.json();
  }

  // 본문이 없거나 JSON이 아닌 경우 응답 객체 자체 반환
  return { status: res.status, ok: res.ok };
};

/**
 * Authorization-Header 인증 fetch 클라이언트
 */
export const authFetch = async (url: string, options: RequestInit = {}) => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const defaultOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  };

  const mergedOptions: RequestInit = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const res = await fetch(`${baseURL}${url}`, mergedOptions);

  const data = await res.json();
  if (!res.ok) {
    const errorMessage = Array.isArray(data.message)
      ? data.message[0]
      : data.message;

    throw new Error(errorMessage || "요청 처리에 실패했습니다.");
  }

  if (data.accessToken && typeof window !== "undefined") {
    localStorage.setItem("accessToken", data.accessToken);
  }

  return {
    status: res.status,
    data,
  };
};
