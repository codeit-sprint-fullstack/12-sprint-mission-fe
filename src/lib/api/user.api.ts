import { api } from "./client.api";
import type { User } from "@/types/user";

type UserResponse = {
  data: User;
};

export const getMyInfo = async (): Promise<User> => {
  const res = await api.get<UserResponse>(`/users/me`);
  return res.data;
};
