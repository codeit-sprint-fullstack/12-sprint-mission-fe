import React, { useEffect, useState } from "react";
import BestProductSection from "../components/Product/BestProductSection";
import ProductListSection from "../components/Product/ProductListSection";
import { getProductList } from "../api/ProductService";
import Pagination from "../components/Pagination";

const PAGE_SIZE = 10;

const Market = () => {
  const [bestProducts, setBestProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [sortOrder, setSortOrder] = useState("recent");
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    async function loadBestProducts() {
      const result = await getProductList(1, 4, "", "favorite");
      setBestProducts(result.list);
    }

    loadBestProducts();
  }, []);

  useEffect(() => {
    async function loadProducts() {
      const result = await getProductList(
        currPage,
        PAGE_SIZE,
        searchTitle,
        sortOrder
      );
      setProducts(result.list);
      setTotalCount(result.totalCount);
    }

    loadProducts();
  }, [currPage, searchTitle, sortOrder]);

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  return (
    <>
      <BestProductSection products={bestProducts} />
      <ProductListSection
        products={products}
        sortOrder={sortOrder}
        onSortChange={(nextOrder) => {
          setSortOrder(nextOrder);
          setCurrPage(1);
        }}
        searchTitle={searchTitle}
        setSearchTitle={(nextSearchTitle) => {
          setSearchTitle(nextSearchTitle);
          setCurrPage(1);
        }}
      />
      <Pagination
        currPage={currPage}
        totalPages={totalPages}
        onPageChange={setCurrPage}
      />
    </>
  );
};

export default Market;
