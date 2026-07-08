import { authHeaderFetch, defaultFetch } from "./fetchClient";

export const productService = {
  getItem: (id: string) => defaultFetch(`/products/${id}`),
  getBestItems: () =>
    defaultFetch(`/products?page=1&pageSize=4&orderBy=favorite`),
  deleteItem: (id: string) =>
    authHeaderFetch(`/products/${id}`, {
      method: "DELETE",
    }),
};
