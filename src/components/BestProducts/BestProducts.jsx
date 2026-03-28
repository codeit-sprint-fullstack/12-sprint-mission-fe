import React, { useState, useEffect } from "react";
import { BestProductList } from "./BestProductList";
import styles from "./BestProducts.module.css";
import { getProducts } from "../../api/productsApi";
import { usePageSize } from "../../hooks/usePageSize";

export const BestProducts = () => {
  const [products, setProducts] = useState([]);

  const pageSize = usePageSize({ mobile: 1, tablet: 2, desktop: 4 });

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
