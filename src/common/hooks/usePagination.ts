import { useRouter } from "next/navigation";

type UsePaginationParams = {
  pathname: string;
  keyword?: string;
  orderBy?: string;
};

export function usePagination({
  pathname,
  keyword,
  orderBy,
}: UsePaginationParams) {
  const router = useRouter();
  const GROUP_SIZE = 5;

  const getPageGroup = (page: number): number => {
    const startPage = Math.floor((page - 1) / GROUP_SIZE) * GROUP_SIZE + 1;
    return startPage;
  };

  const movePage = (nextPage: number) => {
    const params = new URLSearchParams();
    if (keyword) {
      params.set("keyword", keyword);
    }
    if (orderBy && orderBy !== "recent") {
      params.set("orderBy", orderBy);
    }
    if (nextPage > 1) {
      params.set("page", String(nextPage));
    }

    router.push(
      `${pathname}${params.toString() ? `?${params.toString()}` : ""}`,
    );
  };

  return { getPageGroup, movePage, GROUP_SIZE };
}
