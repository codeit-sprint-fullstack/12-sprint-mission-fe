import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BestProducts from "../../components/BestProducts/BestProducts";
import ProductList from "../../components/ProductList/ProductList";
import Pagination from "../../components/Pagination/Pagination";
import styles from "./MarketPage.module.css";

function MarketPage() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    setPage(1);
  }, [orderBy, keyword]);

  useEffect(() => {
    async function loadProducts() {
      const res = await fetch(
        `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
      );
      const data = await res.json();

      setProducts(data.list);
      setTotalCount(data.totalCount);
    }

    loadProducts();
  }, [page, pageSize, orderBy, keyword]);

  useEffect(() => {
    async function loadBest() {
      const res = await fetch(
        `https://panda-market-api.vercel.app/products?orderBy=favorite&pageSize=4`,
      );
      const data = await res.json();

      setBestProducts(data.list);
    }

    loadBest();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.contentsWrap}>
        <div className={styles.productsWrap}>
          <BestProducts bestProducts={bestProducts} />
          <ProductList
            products={products}
            orderBy={orderBy}
            setOrderBy={setOrderBy}
            keyword={keyword}
            setKeyword={setKeyword}
          />
        </div>
        <Pagination
          page={page}
          totalCount={totalCount}
          setPage={setPage}
          pageSize={pageSize}
        />
      </div>
      <Footer />
    </>
  );
}

export default MarketPage;
