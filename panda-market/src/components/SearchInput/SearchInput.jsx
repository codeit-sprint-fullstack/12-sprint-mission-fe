import React from "react";
import styles from "./SearchInput.module.css";
import search from "../../assets/SearchInput/ic_search.png";

function SearchInput({ keyword, setKeyword }) {
  return (
    <div className={styles.inputWrap}>
      <img className={styles.search} src={search} />
      <input
        className={styles.input}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="검색할 상품을 입력해주세요"
      />
    </div>
  );
}

export default SearchInput;
