import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import ProductsHeader from "./ProductsHeader";
import ProductsList from "./ProductsList";

const ProductsOnSale = ({ pCol }) => {
  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [orderBy, setOrderBy] = useState("createdAt");
  const [keyword, setKeyword] = useState(""); //빈 문자열이면 모든것들에게 해당~

  //DB에서 전체목록 가져오기
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:4000/products?_page=${page}&_per_page=${pageSize}&_sort=-${orderBy}&name:contains=${keyword}`,
      );
      const result = await response.json();
      setProducts(result.data);
      console.log("products 목록 가져옴", result.data);
    };

    fetchData();
  }, [page, pageSize, orderBy, keyword]);

  return (
    <>
      <div className="products-container">
        <ProductsHeader
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          keyword={keyword}
          setKeyword={setKeyword}
        />
        <ProductsList products={products} pCol={pCol} />
      </div>
      <Pagination
        page={page}
        pageSize={pageSize}
        setPage={setPage}
        setPageSize={setPageSize}
      />
    </>
  );
};

export default ProductsOnSale;
