import { BASE_URL } from "./config.js";
import axios from "axios";

const RESOURCE = "/products";

async function request(path, options = {}) {
  try {
    const res = await axios({
      baseURL: BASE_URL,
      url: `${RESOURCE}${path}`,
      method: options.method || "GET",
      data: options.body,
      params: options.params,
      headers: options.headers || {},
    });

    return res.data;
  } catch (err) {
    const { status, data } = err.response || {};

    const customError = new Error(
      data?.message || err.message || "Unknown error",
    );

    customError.status = status;
    customError.data = data;

    throw customError;
  }
}

export async function getProductList({
  page = 1,
  pageSize = 10,
  keyword = "",
} = {}) {
  return request("", {
    method: "GET",
    params: { page, pageSize, keyword },
  });
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
    body: { name, description, price, tags, images },
  });
}

export async function patchProduct(id, data) {
  return request(`/${id}`, {
    method: "PATCH",
    body: data,
  });
}

export async function deleteProduct(id) {
  return request(`/${id}`, {
    method: "DELETE",
  });
}
