import { useQuery } from "@tanstack/react-query";
import { getMyInfo } from "@/lib/api/user";
import { getAccessToken } from "@/lib/api/auth";

export default function useUser() {
  const accessToken = getAccessToken();
  const isAuthenticated = Boolean(accessToken);

  return useQuery({
    queryKey: ["user"],
    queryFn: getMyInfo,
    enabled: isAuthenticated,
    retry: false,
  });
}
