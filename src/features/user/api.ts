import { api } from "@/common/api/client";
import type { User } from "@/features/user/types";

type UserResponse = {
  data: User;
};

export const getMyInfo = async (): Promise<User> => {
  const res = await api.get<UserResponse>(`/users/me`);
  return res.data;
};
