import React, { useEffect, useState, useCallback } from "react";
import { getProducts } from "@/api/productsApi";
import { parseError } from "@/utils/parseError";

export const useProducts = ({ orderBy, keyword, page, pageSize }) => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getProducts({ orderBy, keyword, page, pageSize });
      setProducts(data.data);
      setTotalPages(data.meta.totalPages);
    } catch (err) {
      setError(parseError(err));
    } finally {
      setIsLoading(false);
    }
  }, [orderBy, keyword, page, pageSize]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, totalPages, isLoading, error, refetch: fetchProducts };
};
