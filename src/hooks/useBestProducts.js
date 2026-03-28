import { useState, useEffect } from "react";
import { getBestProducts } from "../api/products";

/**
 * 베스트 상품을 가져오는 커스텀 훅
 * @param {number} pageSize
 */

export function useBestProducts(pageSize) {
  const [bestProducts, setBestProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!pageSize) return;

    let cancelled = false;

    setLoading(true);
    setError(null);
    getBestProducts(pageSize)
      .then((data) => {
        if (!cancelled) setBestProducts(data.list ?? []);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [pageSize]);

  return { bestProducts, loading, error }; // cleanup func(컴포넌트 사라질 대 자동 실행)
}
