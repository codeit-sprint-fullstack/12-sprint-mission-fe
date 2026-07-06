import type { User } from "@/types/user";

import { api } from "./client.api";

type UserResponse = {
  data: User;
};

export const getMyInfo = async (): Promise<User> => {
  const res = await api.get<UserResponse>(`/users/me`);
  return res.data;
};
