const BASE_URL = "https://panda-market-api-crud.vercel.app";
const RESOURCE = "/articles";

function request(path, options = {}) {
  const url = `${BASE_URL}${RESOURCE}${path}`;

  const config = {
    ...options,
    headers: {
      ...(options.headers || {}),
    },
  };

  if (options.body && !config.headers["Content-Type"]) {
    config.headers["Content-Type"] = "application/json";
  }

  return fetch(url, config)
    .then((res) => {
      return res
        .json()
        .catch(() => null)
        .then((data) => {
          if (!res.ok) {
            const error = new Error(
              `HTTP ${res.status} - ${data?.message || "Unknown error"}`,
            );
            error.status = res.status;
            error.data = data;
            throw error;
          }
          return data;
        });
    })
    .catch((err) => {
      console.error(
        `[Article API ERROR] ${options.method || "GET"} ${path}`,
        err,
      );

      throw err;
    });
}

export async function getArticleList({
  page = 1,
  pageSize = 10,
  keyword = "",
} = {}) {
  const params = new URLSearchParams({
    page,
    pageSize,
    keyword,
  });
  return request(`?${params}`, { method: "GET" });
}
