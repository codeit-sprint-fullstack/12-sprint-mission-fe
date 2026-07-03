import { useQuery } from "@tanstack/react-query";

import { userQueryKeys } from "@/constants/queryKeys";
import { getMyInfo } from "@/lib/api/user.api";
import type { User } from "@/types/user";

export default function useUser() {
  const query = useQuery<User>({
    queryKey: userQueryKeys.me(),
    queryFn: getMyInfo,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  const isAuthenticated = Boolean(query.data) && !query.isError;

  return { ...query, isAuthenticated };
}
