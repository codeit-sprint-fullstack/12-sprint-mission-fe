import React, { useEffect, useState } from "react";
import styles from "./OnSaleProducts.module.css";
import { getProducts } from "../../api/productsApi";
import { OnSaleProductHeader } from "./OnSaleProductHeader";
import { OnSaleProductList } from "./OnSaleProductList";
import { PageNation } from "../common/PageNation";

export const OnSaleProducts = () => {
  const [sortBy, setSortBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
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
    fetchProducts({
      orderBy: sortBy,
      keyword,
    });
  }, [sortBy, keyword]);

  return (
    <section className={styles.section}>
      <OnSaleProductHeader
        keyword={keyword}
        onKeywordChange={setKeyword}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <OnSaleProductList products={products} />
      <PageNation />
    </section>
  );
};
