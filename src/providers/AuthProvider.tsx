"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { userService } from "../lib/userService";
import { authService } from "../lib/authService";
import type { User } from "../types";

const AuthContext = createContext<{
  user: User;
  isPending: boolean;
  logout: () => void;
} | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("accessToken")
          : null;
      if (!token) return null;

      const res = await userService.getMe();
      return res.data; // 유저 데이터 반환
    },
    // 토큰 만료 에러 발생시 불필요한 재요청 방지
    retry: false,
  });

  const logout = async () => {
    authService.logout();
    // 로컬스토리지 정리 후 새로고침하여 캐시 초기화
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

  return (
    <AuthContext.Provider value={{ user, isPending, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
