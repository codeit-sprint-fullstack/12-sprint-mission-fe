import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "../lib/authService";

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      authService.login(email, password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export const useSignUp = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      email,
      nickname,
      password,
    }: {
      email: string;
      nickname: string;
      password: string;
    }) => authService.signUp(email, nickname, password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await authService.logout();
    },
    onSuccess: () => {
      // 로그아웃 성공 시 유저 캐시 데이터 초기화
      queryClient.removeQueries({ queryKey: ["user"] });
    },
  });
};
