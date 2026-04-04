import { request } from "./client";

const RESOURCE = "/products";

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
} = {}) {
  return request(RESOURCE, {
    method: "GET",
    params: { page, pageSize, orderBy, keyword },
  });
}

export async function createProduct(data) {
  return request(RESOURCE, {
    method: "POST",
    body: data,
  });
}
