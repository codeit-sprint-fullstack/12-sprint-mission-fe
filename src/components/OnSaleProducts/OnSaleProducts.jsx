import React, { useEffect, useState } from "react";
import styles from "./OnSaleProducts.module.css";
import { getProducts } from "../../api/productsApi";
import { Pagination } from "../common/Pagination/Pagination";
import { OnSaleProductHeader } from "./OnSaleProductHeader";
import { OnSaleProductList } from "./OnSaleProductList";
import { usePageSize } from "../../hooks/usePageSize";

export const OnSaleProducts = () => {
  const [products, setProducts] = useState([]);

  const [sortBy, setSortBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const pageSize = usePageSize({ mobile: 4, tablet: 6, desktop: 10 });
  const totalPages = Math.ceil(totalCount / 10);

  useEffect(() => {
    const fetchProducts = async (params) => {
      try {
        const data = await getProducts(params);
        setProducts(data.list);
        setTotalCount(data.totalCount);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts({
      orderBy: sortBy,
      keyword,
      page,
      pageSize,
    });
  }, [sortBy, keyword, page, pageSize]);

  return (
    <section className={styles.section}>
      <OnSaleProductHeader
        keyword={keyword}
        onKeywordChange={setKeyword}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <OnSaleProductList products={products} />
      <Pagination page={page} onPageChange={setPage} totalPages={totalPages} />
    </section>
  );
};
