import React from "react";
import { FormField } from "@/components/common/FormField";
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
            <FormField
              label="상품명"
              id="productName"
              name="productName"
              placeholder="상품명을 입력해주세요"
            />

            <FormField
              type="textarea"
              label="상품 소개"
              id="productDesc"
              name="productDesc"
              placeholder="상품 소개를 입력해주세요"
            />

            <FormField
              type="number"
              label="판매가격"
              id="productPrice"
              name="productPrice"
              placeholder="판매 가격을 입력해주세요"
            />

            <FormField
              label="태그"
              id="productTags"
              name="productTags"
              placeholder="태그를 입력해주세요"
            />
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
