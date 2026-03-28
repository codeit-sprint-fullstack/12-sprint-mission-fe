import React, { useState, useEffect } from "react";
import { BestProductList } from "./BestProductList";
import styles from "./BestProducts.module.css";
import { getProducts } from "../../api/productsApi";

const getPageSize = () => {
  if (window.innerWidth <= 743) return 1;
  if (window.innerWidth <= 1199) return 2;
  return 4;
};

export const BestProducts = () => {
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize);

  useEffect(() => {
    const handleResize = () => setPageSize(getPageSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts({ pageSize, orderBy: "favorite" });
        setProducts(data.list);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchProducts();
  }, [pageSize]);

  return (
    <section className={styles.section}>
      <h2 className={`${styles.title} text-xl-bold`}>베스트 상품</h2>
      <BestProductList products={products} />
    </section>
  );
};
