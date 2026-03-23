import { request } from "./client";

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "",
  keyword = "",
} = {}) {
  return request("", {
    method: "GET",
    params: { page, pageSize, orderBy, keyword },
  });
}
