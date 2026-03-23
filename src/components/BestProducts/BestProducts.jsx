import React, { useState, useEffect } from "react";
import { BestProductList } from "./BestProductList";
import styles from "./BestProducts.module.css";
import { getProducts } from "../../api/productsApi";

export const BestProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts({ pageSize: 4, orderBy: "favorite" });
        setProducts(data.list);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={`${styles.title} text-xl-bold`}>베스트 상품</h2>
      <BestProductList products={products} />
    </section>
  );
};
