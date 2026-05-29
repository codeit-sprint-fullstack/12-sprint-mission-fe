import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useDebounce from "@/hooks/useDebounce";

export default function useListFilters({ pathname, keyword, orderBy }) {
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
  }, [debouncedKeyword]);

  const handleOrderByChange = (value) => {
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
