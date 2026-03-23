import React from "react";
import searchIcon from "./ic-search.svg";
import styles from "./SearchInput.module.css";

export const SearchInput = ({ value, onChange }) => {
  return (
    <div className={styles.searchBox}>
      <img className={styles.icon} src={searchIcon} alt="검색" />
      <input
        className={`${styles.input} text-lg-regular`}
        type="text"
        name="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="검색할 상품을 입력해주세요"
      />
    </div>
  );
};
