import React, { useState } from "react";
import styles from "./SortSelect.module.css";
import arrow from "../../assets/SortSelect/ic_arrow_down.png";
import select from "../../assets/SortSelect/ic_sort.png";

function SortSelect({ orderBy, setOrderBy }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSelect(value) {
    setOrderBy(value);
    setIsOpen(false);
  }

  return (
    <>
      <div className={styles.selectWrap}>
        <div className={styles.minTablet}>
          <select
            className={styles.select}
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
          >
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
          <img className={styles.arrow} src={arrow} />
        </div>
        <button
          type="button"
          className={styles.iconBtn}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img src={select} alt="정렬" className={styles.icon} />
        </button>

        {isOpen && (
          <div className={styles.dropdown}>
            <button
              type="button"
              className={styles.option}
              onClick={() => handleSelect("recent")}
            >
              최신순
            </button>
            <button
              type="button"
              className={styles.option}
              onClick={() => handleSelect("favorite")}
            >
              좋아요순
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default SortSelect;
