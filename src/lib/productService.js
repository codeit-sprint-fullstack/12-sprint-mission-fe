import { authHeaderFetch, defaultFetch } from "./fetchClient";

export const productService = {
  getItem: (id) => defaultFetch(`/products/${id}`),
  deleteItem: (id) =>
    authHeaderFetch(`/products/${id}`, {
      method: "DELETE",
    }),
};
