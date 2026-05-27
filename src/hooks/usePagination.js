import { useRouter } from "next/navigation";

export default function usePagination({ pathname, keyword, orderBy }) {
  const router = useRouter();
  const GROUP_SIZE = 5;

  const getPageGroup = (page) => {
    const startPage = Math.floor((page - 1) / GROUP_SIZE) * GROUP_SIZE + 1;
    return startPage;
  };

  const movePage = (page, nextPage) => {
    const params = new URLSearchParams();
    if (keyword) {
      params.set("keyword", keyword);
    }
    if (orderBy !== "recent") {
      params.set("orderBy", orderBy);
    }
    if (nextPage > 1) {
      params.set("page", nextPage);
    }
    router.push(`${pathname}${params.toString() ? `?${params}` : ""}`);
  };

  return { getPageGroup, movePage, GROUP_SIZE };
}
