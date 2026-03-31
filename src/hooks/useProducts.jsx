import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productsApi";
import { parseError } from "../utils/parseError";

export const useProducts = ({ orderBy, keyword, page, pageSize }) => {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const fetchProducts = async () => {
      try {
        const data = await getProducts({ orderBy, keyword, page, pageSize });
        setProducts(data.list);
        setTotalCount(data.totalCount);
      } catch (error) {
        setError(parseError(error));
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [orderBy, keyword, page, pageSize]);

  return { products, totalCount, isLoading, error };
};
