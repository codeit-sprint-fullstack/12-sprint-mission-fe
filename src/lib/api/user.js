import { api } from "./client";
import { getAccessToken } from "./auth";

export const getMyInfo = () =>
  api.get("/users/me", {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
