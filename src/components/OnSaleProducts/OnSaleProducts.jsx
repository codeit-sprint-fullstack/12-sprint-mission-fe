import React, { useState } from "react";
import { usePageSize } from "../../hooks/usePageSize";
import { useProducts } from "../../hooks/useProducts";
import { Pagination } from "../common/Pagination/Pagination";
import { ProductCard } from "../common/ProductCard/ProductCard";
import { OnSaleProductHeader } from "./OnSaleProductHeader";
import styles from "./OnSaleProducts.module.css";

export const OnSaleProducts = () => {
  const [sortBy, setSortBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const pageSize = usePageSize({ mobile: 4, tablet: 6, desktop: 10 });
  const { products, totalCount } = useProducts({
    orderBy: sortBy,
    keyword,
    page,
    pageSize,
  });

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <section className={styles.section}>
      <OnSaleProductHeader
        keyword={keyword}
        onKeywordChange={setKeyword}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <ul className={styles.productList}>
        {products.map((item) => (
          <ProductCard key={item.id} item={item} type="general" />
        ))}
      </ul>
      <Pagination page={page} onPageChange={setPage} totalPages={totalPages} />
    </section>
  );
};
