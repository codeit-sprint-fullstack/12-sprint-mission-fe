import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productsApi";

export const useProducts = ({ orderBy, keyword, page, pageSize }) => {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const fetchProducts = async () => {
      try {
        const data = await getProducts({ orderBy, keyword, page, pageSize });
        setProducts(data.list);
        setTotalCount(data.totalCount);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [orderBy, keyword, page, pageSize]);

  return { products, totalCount, isLoading };
};
