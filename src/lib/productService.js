import { authHeaderFetch, defaultFetch } from "./fetchClient";

export const productService = {
  getItem: (id) => defaultFetch(`/products/${id}`),
  getBestItems: () =>
    defaultFetch(`/products?page=1&pageSize=4&orderBy=favorite`),
  deleteItem: (id) =>
    authHeaderFetch(`/products/${id}`, {
      method: "DELETE",
    }),
};
