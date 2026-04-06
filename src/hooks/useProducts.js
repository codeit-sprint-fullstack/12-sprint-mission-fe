import { useState, useEffect } from "react";
import { getProductList } from "../services/ProductService";

export default function useProducts() {
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

  // keyword만 debounce 처리
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
      setPage(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [keyword]);

  // 전체 상품 fetch
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const offset = (page - 1) * pageSize;

        const res = await getProductList({
          offset,
          limit: pageSize,
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

    fetchProducts();
  }, [page, pageSize, orderBy, debouncedKeyword]);

  return {
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
