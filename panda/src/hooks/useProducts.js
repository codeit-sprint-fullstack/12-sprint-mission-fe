"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductList } from "@/lib/ProductService";

export default function useProducts() {
  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const updatePageSize = () => {
      const width = window.innerWidth;

      if (width >= 1200) setPageSize(10);
      else if (width >= 744) setPageSize(6);
      else setPageSize(4);

      setPage(1);
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);

    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
      setPage(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [keyword]);

  const query = useQuery({
    queryKey: ["products", page, pageSize, orderBy, debouncedKeyword],
    queryFn: () =>
      getProductList({
        page,
        pageSize,
        orderBy,
        keyword: debouncedKeyword,
      }),
    staleTime: 1000 * 10,
    refetchInterval: 1000 * 30,
  });

  return {
    products: query.data?.list || [],
    totalCount: query.data?.totalCount || 0,
    loading: query.isLoading,
    error: query.error,
    orderBy,
    setOrderBy,
    keyword,
    setKeyword,
    page,
    setPage,
    pageSize,
  };
}
