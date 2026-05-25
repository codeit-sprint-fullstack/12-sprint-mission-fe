import { api } from "./client";

export const signUp = (data) => api.post(`/auth/signUp`, data);

export const signIn = (data) => api.post(`/auth/signIn`, data);

export const saveTokens = ({ accessToken }) => {
  localStorage.setItem("accessToken", accessToken);
};

export const getAccessToken = () => localStorage.getItem("accessToken");
