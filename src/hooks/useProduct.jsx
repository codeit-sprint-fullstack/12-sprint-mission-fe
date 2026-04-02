import React, { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";

const useProduct = () => {
  const [bestProducts, setBestProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const { isMobile, isTablet } = useWindowSize();

  const getProductsList = async () => {
    const BASE_URL = "https://panda-market-api.vercel.app/products";
    let pageSize = 10;

    if (isMobile) {
      pageSize = 4;
    } else if (isTablet) {
      pageSize = 6;
    } else {
      pageSize = 10;
    }

    const params = { page, pageSize, orderBy, keyword };

    const queryString = new URLSearchParams(params).toString();
    const url = `${BASE_URL}?${queryString}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      setProducts(data.list);
      setTotal(data.totalCount);
    } catch (error) {
      throw error;
    }
  };

  const getBestProductsList = async () => {
    const BASE_URL = "https://panda-market-api.vercel.app/products";

    let pageSize = 4;

    if (isMobile) {
      pageSize = 1;
    } else if (isTablet) {
      pageSize = 2;
    } else {
      pageSize = 4;
    }

    const params = { page: 1, pageSize, orderBy: "favorite" };

    const queryString = new URLSearchParams(params).toString();
    const url = `${BASE_URL}?${queryString}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      setBestProducts(data.list);
    } catch (error) {
      throw error;
    }
  };

  //  베스트 product
  useEffect(() => {
    getBestProductsList();
  }, [isMobile, isTablet]);

  //  기본 product
  useEffect(() => {
    getProductsList();
  }, [page, limit, orderBy, keyword, isMobile, isTablet]);

  return {
    total,
    page,
    setPage,
    limit,
    setOrderBy,
    setKeyword,
    products,
    bestProducts,
  };
};

export default useProduct;
