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
      const user = await userService.getMe();
      setUser(user);
    } catch (error) {
      console.error("사용자 정보를 가져오는데 실패했습니다:", error);
      setUser(null);
    }
  };

  const signUp = async (name, email, password, passwordConfirmation) => {
    const data = await authService.signUp(
      name,
      email,
      password,
      passwordConfirmation,
    );
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
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
