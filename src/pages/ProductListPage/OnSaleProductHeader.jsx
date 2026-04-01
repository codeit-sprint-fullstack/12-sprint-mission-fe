import React from "react";
import { Link } from "react-router-dom";
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
      <Link
        to="/registration"
        className={`btn-base text-lg-semibold ${styles.registrationBtn} show-mobile`}
      >
        상품 등록하기
      </Link>
      <div className={styles.controls}>
        <SearchInput value={keyword} onChange={onKeywordChange} />
        <Link
          to="/registration"
          className={`btn-base text-lg-semibold ${styles.registrationBtn} hide-mobile`}
        >
          상품 등록하기
        </Link>
        <SortSelect value={sortBy} onChange={onSortChange} />
      </div>
    </div>
  );
};
