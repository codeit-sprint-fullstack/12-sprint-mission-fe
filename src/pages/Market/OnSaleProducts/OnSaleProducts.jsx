import React, { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { usePageSize } from "@/hooks/usePageSize";
import { useProducts } from "@/hooks/useProducts";
import { ErrorState } from "@/components/common/ErrorState";
import { Pagination } from "@/components/common/Pagination";
import { ProductCard } from "@/components/common/ProductCard";
import { ProductCardSkeleton } from "@/components/common/ProductCard/ProductCardSkeleton";
import { OnSaleProductHeader } from "./OnSaleProductHeader";
import styles from "./OnSaleProducts.module.css";

export const OnSaleProducts = () => {
  const [sortBy, setSortBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const pageSize = usePageSize({ mobile: 4, tablet: 6, desktop: 10 });
  const debouncedKeyword = useDebounce(keyword, 300);
  const { products, totalPages, isLoading, error, refetch } = useProducts({
    orderBy: sortBy,
    keyword: debouncedKeyword,
    page,
    pageSize,
  });

  const isEmpty = !isLoading && !error && products.length === 0;

  const handleKeywordChange = (newKeyword) => {
    setKeyword(newKeyword);
    setPage(1);
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    setPage(1);
  };

  return (
    <section className={styles.section}>
      <OnSaleProductHeader
        keyword={keyword}
        onKeywordChange={handleKeywordChange}
        sortBy={sortBy}
        onSortChange={handleSortChange}
      />
      {error ? (
        <ErrorState error={error} onRetry={refetch} />
      ) : isEmpty ? (
        <div className={styles.empty}>검색 결과가 없습니다.</div>
      ) : (
        <ul className={styles.productList}>
          {isLoading
            ? Array.from({ length: pageSize }).map((_, i) => (
                <ProductCardSkeleton key={i} type="general" />
              ))
            : products.map((item) => (
                <ProductCard key={item.id} item={item} type="general" />
              ))}
        </ul>
      )}
      {!error && !isEmpty && (
        <Pagination
          page={page}
          onPageChange={setPage}
          totalPages={totalPages}
        />
      )}
    </section>
  );
};
