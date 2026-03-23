import React, { useEffect, useState } from "react";
import styles from "./OnSaleProducts.module.css";
import { getProducts } from "../../api/productsApi";
import { PageNation } from "../common/PageNation/PageNation";
import { OnSaleProductHeader } from "./OnSaleProductHeader";
import { OnSaleProductList } from "./OnSaleProductList";

export const OnSaleProducts = () => {
  const [sortBy, setSortBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async (params) => {
      try {
        const data = await getProducts(params);
        setProducts(data.list);
      } catch (error) {
        console.log(error.message);
      }
    };

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
