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

  // 전체 상품 fetch
  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      try {
        const res = await getProductList({ page, pageSize, orderBy, keyword });
        setProducts(res.list || []);
        setTotalCount(res.totalCount || 0);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(fetchAll, 300);
    return () => clearTimeout(debounce);
  }, [page, pageSize, orderBy, keyword]);

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
