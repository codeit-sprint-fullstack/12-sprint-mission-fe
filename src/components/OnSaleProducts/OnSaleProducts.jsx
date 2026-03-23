import React, { useEffect, useState } from "react";
import styles from "./OnSaleProducts.module.css";
import { getProducts } from "../../api/productsApi";
import { OnSaleProductHeader } from "./OnSaleProductHeader";
import { OnSaleProductList } from "./OnSaleProductList";
import { PageNation } from "../common/PageNation";

export const OnSaleProducts = () => {
  const [sortBy, setSortBy] = useState("recent");
  const [products, setProducts] = useState([]);

  const fetchProducts = async (params) => {
    try {
      const data = await getProducts(params);
      setProducts(data.list);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProducts({ orderBy: sortBy });
  }, [sortBy]);

  return (
    <section className={styles.section}>
      <OnSaleProductHeader value={sortBy} onChange={setSortBy} />
      <OnSaleProductList products={products} />
      <PageNation />
    </section>
  );
};
