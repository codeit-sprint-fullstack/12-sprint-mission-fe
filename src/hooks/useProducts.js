import { useState, useEffect, useCallback } from "react";
import { getProducts } from "../api/products";

/**
 * 상품 목록을 가져오는 커스텀 훅
 * 검색, 정렬, 페이지네이션 상태 관리
 */
export function useProducts({ pageSize, orderBy: initialOrderBy = "recent" }) {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState(initialOrderBy);
  const [keyword, setKeyword] = useState(""); // 실제 검색에 쓰는 값
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    if (!pageSize) return;

    setLoading(true);
    setError(null);
    try {
      const data = await getProducts({ page, pageSize, orderBy, keyword });
      setProducts(data.list ?? []);
      setTotalCount(data.totalCount ?? 0);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [page, pageSize, orderBy, keyword]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // 정렬 변경 시 1페이지로 리셋
  const handleOrderByChange = useCallback((newOrderBy) => {
    setOrderBy(newOrderBy);
    setPage(1);
  }, []);

  // 검색 실행 (엔터 or 버튼)
  const handleSearch = useCallback(() => {
    setKeyword(searchInput.trim());
    setPage(1);
  }, [searchInput]);

  const handleSearchKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") handleSearch();
    },
    [handleSearch],
  );

  const totalPages = pageSize ? Math.ceil(totalCount / pageSize) : 1;

  return {
    products,
    totalCount,
    totalPages,
    page,
    setPage,
    orderBy,
    handleOrderByChange,
    searchInput,
    setSearchInput,
    handleSearch,
    handleSearchKeyDown,
    loading,
    error,
  };
}
