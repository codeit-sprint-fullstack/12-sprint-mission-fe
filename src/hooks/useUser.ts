import { useQuery } from "@tanstack/react-query";
import { userService } from "../lib/userService";

// 내 정보 조회 (GET)
export const useMe = () => {
  return useQuery({
    queryKey: ["user", "me"],
    queryFn: () => userService.getMe(),
    enabled:
      typeof window !== "undefined" && !!localStorage.getItem("accessToken"),
    retry: false, // 401 에러 등이 날 때 불필요한 재시도 방지
  });
};
