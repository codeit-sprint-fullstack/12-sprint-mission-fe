import { useState, useEffect } from "react";
import { getProductList } from "../services/ProductService";

export default function useProducts() {
  const [bestProducts, setBestProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // 화면 크기에 따른 pageSize 조정
  const updatePageSize = () => {
    const width = window.innerWidth;
    if (width >= 1200) setPageSize(10);
    else if (width >= 768) setPageSize(6);
    else setPageSize(4);
    setPage(1);
  };

  useEffect(() => {
    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  // 베스트 상품 fetch
  useEffect(() => {
    const fetchBest = async () => {
      try {
        const res = await getProductList({ pageSize: 4, orderBy: "favorite" });
        setBestProducts(res.list || []);
      } catch (err) {
        setError(err);
      }
    };
    fetchBest();
  }, []);

  // keyword만 debounce 처리
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
      setPage(1); // 검색 바뀌면 페이지 초기화
    }, 300);

    return () => clearTimeout(timer);
  }, [keyword]);

  // 전체 상품 fetch
  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      setError(null); // 에러 초기화

      try {
        const res = await getProductList({
          page,
          pageSize,
          orderBy,
          keyword: debouncedKeyword,
        });
        setProducts(res.list || []);
        setTotalCount(res.totalCount || 0);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll(); // 바로 실행 (debounce 없음)
  }, [page, pageSize, orderBy, debouncedKeyword]);

  return {
    bestProducts,
    products,
    totalCount,
    loading,
    error,
    orderBy,
    setOrderBy,
    keyword,
    setKeyword,
    page,
    setPage,
    pageSize,
  };
}
