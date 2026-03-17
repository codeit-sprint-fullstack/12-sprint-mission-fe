const BASE_URL = "https://panda-market-api-crud.vercel.app";

const RESOURCE = "/products";

async function request(path, options = {}) {
  const url = `${BASE_URL}${RESOURCE}${path}`;

  const config = {
    ...options,
    headers: {
      ...options.headers,
    },
  };

  if (options.body && !config.headers["Content-Type"]) {
    config.headers["Content-Type"] = "application/json";
  }

  try {
    const res = await fetch(url, config);

    const data = await res.json().catch(() => ({}));

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
  const query = `page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  return await request(`?${query}`, { method: "GET" });
}

export async function getProduct(id) {
  return await request(`/${id}`, { method: "GET" });
}

export async function createProduct({
  name,
  description,
  price,
  tags,
  images,
}) {
  return await request("", {
    method: "POST",
    body: JSON.stringify({ name, description, price, tags, images }),
  });
}

export async function patchProduct(id, data) {
  return await request(`/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

export async function deleteProduct(id) {
  return await request(`/${id}`, {
    method: "DELETE",
  });
}
