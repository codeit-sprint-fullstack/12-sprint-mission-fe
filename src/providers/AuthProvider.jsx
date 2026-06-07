"use client";

import { authService } from "@/lib/authService";
import { userService } from "@/lib/userService";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  user: null,
  updateUser: () => {},
  signUp: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const { data } = await userService.getMe();
      setUser(data);
    } catch (error) {
      console.error("사용자 정보를 가져오는데 실패했습니다:", error);
      setUser(null);
    }
  };

  const signUp = async (emial, nickname, password) => {
    const data = await authService.signUp(emial, nickname, password);
    await getUser();
    return data;
  };

  const login = async (email, password) => {
    const data = await authService.login(email, password);
    await getUser();
    return data;
  };

  const logout = async () => {
    authService.logout();
    setUser(null);
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return;
      }

      try {
        await getUser();
      } catch (error) {
        console.log("로그인 세션이 만료되었습니다.");
      }
    };

    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
