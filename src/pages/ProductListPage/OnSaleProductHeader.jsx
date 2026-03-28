import React from "react";
import { SearchInput } from "../../components/common/SearchInput/SearchInput";
import { SortSelect } from "../../components/common/SortSelect/SortSelect";
import styles from "./OnSaleProductHeader.module.css";

export const OnSaleProductHeader = ({
  keyword,
  onKeywordChange,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.title} text-xl-bold`}>판매 중인 상품</h2>
      <a
        className={`btn-base text-lg-semibold ${styles.btn} show-mobile`}
        href="/"
      >
        상품 등록하기
      </a>
      <div className={styles.controls}>
        <SearchInput value={keyword} onChange={onKeywordChange} />
        <a
          className={`btn-base text-lg-semibold ${styles.btn} hide-mobile`}
          href="/"
        >
          상품 등록하기
        </a>
        <SortSelect value={sortBy} onChange={onSortChange} />
      </div>
    </div>
  );
};
