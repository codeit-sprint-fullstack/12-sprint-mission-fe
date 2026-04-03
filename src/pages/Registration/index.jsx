import React from "react";
import deleteIcon from "./ic-x.svg";
import styles from "./Registration.module.css";

export const Registration = () => {
  return (
    <main>
      <section className={styles.container}>
        <form className={styles.form}>
          <div className={styles.header}>
            <h2 className={`${styles.title} text-xl-bold`}>상품 등록하기</h2>
            <button
              type="submit"
              disabled
              className={`btn-base text-lg-semibold ${styles.addBtn}`}
            >
              등록
            </button>
          </div>

          <div className={styles.fields}>
            <div className={styles.field}>
              <label
                htmlFor="productName"
                className={`text-2lg-bold ${styles.label}`}
              >
                상품명
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                placeholder="상품명을 입력해주세요"
                required
                className={`${styles.formControl} ${styles.input}`}
              />
            </div>

            <div className={styles.field}>
              <label
                htmlFor="productDesc"
                className={`text-2lg-bold ${styles.label}`}
              >
                상품 소개
              </label>
              <textarea
                type="text"
                id="productDesc"
                name="productDesc"
                placeholder="상품 소개를 입력해주세요"
                required
                className={`${styles.formControl} ${styles.textarea}`}
              />
            </div>

            <div className={styles.field}>
              <label
                htmlFor="productPrice"
                className={`text-2lg-bold ${styles.label}`}
              >
                판매가격
              </label>
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                placeholder="판매 가격을 입력해주세요"
                required
                className={`${styles.formControl} ${styles.input}`}
              />
            </div>

            <div className={styles.field}>
              <label
                htmlFor="productTags"
                className={`text-2lg-bold ${styles.label}`}
              >
                태그
              </label>
              <input
                type="text"
                id="productTags"
                name="productTags"
                placeholder="태그를 입력해주세요"
                required
                className={`${styles.formControl} ${styles.input}`}
              />
            </div>
          </div>

          <div className={styles.tagList}>
            <span className={`text-lg-regular ${styles.tag}`}>
              티셔츠
              <button type="button" className={styles.deleteBtn}>
                <img src={deleteIcon} alt="" />
                <span className="sr-only">태그 삭제</span>
              </button>
            </span>
          </div>
        </form>
      </section>
    </main>
  );
};
