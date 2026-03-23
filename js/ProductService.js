import { BASE_URL } from "./config.js";

const RESOURCE = "/products";

async function request(path, options = {}) {
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

  try {
    const res = await fetch(url, config);

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      const error = new Error(
        `HTTP ${res.status} - ${data?.message || "Unknown error"}`,
      );
      error.status = res.status;
      error.data = data;
      throw error;
    }

    return data;
  } catch (err) {
    console.error(
      `[Product API ERROR] ${options.method || "GET"} ${path}`,
      err,
    );

    throw err;
  }
}

export async function getProductList({
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

export async function getProduct(id) {
  return request(`/${id}`, { method: "GET" });
}

export async function createProduct({
  name,
  description,
  price,
  tags,
  images,
}) {
  return request("", {
    method: "POST",
    body: JSON.stringify({ name, description, price, tags, images }),
  });
}

export async function patchProduct(id, data) {
  return request(`/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

export async function deleteProduct(id) {
  return request(`/${id}`, {
    method: "DELETE",
  });
}
