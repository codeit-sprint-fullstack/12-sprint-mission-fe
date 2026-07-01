import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/lib/authService";

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ email, password }) => authService.login(email, password),
    onSuccess: (res) => {
      // 성공 시에만 유저 캐시 무효화 (상태코드 200)
      if (res.status === 200) {
        queryClient.invalidateQueries({ queryKey: ["user"] });
      }
    },
  });
};

export const useSignUp = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ email, nickname, password }) =>
      authService.signUp(email, nickname, password),
    onSuccess: (res) => {
      if (res.status === 201) {
        queryClient.invalidateQueries({ queryKey: ["user"] });
      }
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      // 로그아웃 성공 시 유저 캐시 데이터 초기화
      queryClient.removeQueries({ queryKey: ["user"] });
      localStorage.removeItem("accessToken");
    },
  });
};
