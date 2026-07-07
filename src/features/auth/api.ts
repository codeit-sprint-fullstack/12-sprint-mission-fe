import type { User } from "@/features/user/types";

import { api } from "../../common/api/client";

type SignupBody = {
  email: string;
  nickname: string;
  password: string;
};

type LoginBody = {
  email: string;
  password: string;
};

type SignupResponse = {
  data: User;
};

// 로그인 응답: 토큰은 httpOnly 쿠키로만 내려오고, 바디엔 user 정보만 있음
type LoginResponse = {
  data: {
    user: Pick<User, "id" | "email" | "nickname">;
  };
};

export const signup = async (data: SignupBody): Promise<User> => {
  const res = await api.post<SignupResponse, SignupBody>(`/auth/signup`, data);
  return res.data;
};

export const login = async (
  data: LoginBody,
): Promise<LoginResponse["data"]["user"]> => {
  const res = await api.post<LoginResponse, LoginBody>(`/auth/login`, data);
  return res.data.user;
};

export const logout = () => api.post<void>(`/auth/logout`);
