import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useDebounce } from "@/hooks/useDebounce";

type UseListFiltersParams = {
  pathname: string;
  keyword: string;
  orderBy: string;
};

export function useListFilters({
  pathname,
  keyword,
  orderBy,
}: UseListFiltersParams) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState(keyword);
  const debouncedKeyword = useDebounce(inputValue, 300);

  useEffect(() => {
    if (debouncedKeyword === keyword) {
      return;
    }

    const params = new URLSearchParams();

    if (debouncedKeyword) {
      params.set("keyword", debouncedKeyword);
    }

    if (orderBy !== "recent") {
      params.set("orderBy", orderBy);
    }

    router.replace(`${pathname}${params.toString() ? `?${params}` : ""}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedKeyword]);

  const handleOrderByChange = (value: string) => {
    const params = new URLSearchParams();

    if (inputValue) {
      params.set("keyword", inputValue);
    }

    if (value !== "recent") {
      params.set("orderBy", value);
    }

    router.push(`${pathname}${params.toString() ? `?${params}` : ""}`);
  };

  return { inputValue, setInputValue, handleOrderByChange };
}
