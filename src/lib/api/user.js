import { api } from "./client";

export const getMyInfo = () => api.get("/users/me");
