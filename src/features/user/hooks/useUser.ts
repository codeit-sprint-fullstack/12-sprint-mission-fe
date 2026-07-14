import { useQuery } from "@tanstack/react-query";

import { userQueryKeys } from "@/common/constants/queryKeys";
import { getMyInfo } from "@/features/user/api";
import type { User } from "@/features/user/types";

export function useUser() {
  const query = useQuery<User>({
    queryKey: userQueryKeys.me(),
    queryFn: getMyInfo,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  const isAuthenticated = Boolean(query.data) && !query.isError;

  return { ...query, isAuthenticated };
}
