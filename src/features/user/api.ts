import type { User } from "@/features/user/types";

import { api } from "../../lib/api/client.api";

type UserResponse = {
  data: User;
};

export const getMyInfo = async (): Promise<User> => {
  const res = await api.get<UserResponse>(`/users/me`);
  return res.data;
};
