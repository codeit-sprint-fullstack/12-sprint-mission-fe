import React from "react";
import styles from "../styles/Registration.module.css";

const Registration = () => {
  return (
    <main className={styles.wrapper}>
      <form className={styles.registrationContainer}>
        <div className={styles.btnContainer}>
          <h1 className="text-xl bold">상품 등록하기</h1>
          <button type="submit" className={`${styles.addBtn} text-lg semibold`}>
            등록
          </button>
        </div>
        <div className={styles.inputContainer}>
          <section>
            <h2 className="text-2lg bold">상품명</h2>
            <input
              type="text"
              className={`${styles.nameInput} text-lg regular`}
              placeholder="상품명을 입력해주세요"
            />
          </section>
          <section>
            <h2 className="text-2lg bold">상품 소개</h2>
            <textarea
              type="text"
              className={`${styles.descriptionInput} text-lg regular`}
              placeholder="상품 소개를 입력해주세요"
            />
          </section>
          <section>
            <h2 className="text-2lg bold">판매가격</h2>
            <input
              type="text"
              className={`${styles.priceInput} text-lg regular`}
              placeholder="상품 가격을 입력해주세요"
            />
          </section>
          <section>
            <h2 className="text-2lg bold">태그</h2>
            <input
              type="text"
              className={`${styles.tagInput} text-lg regular`}
              placeholder="태그를 입력해주세요"
            />
          </section>
        </div>
      </form>
    </main>
  );
};

export default Registration;
