import React from "react";
import styles from "../styles/Registration.module.css";
import icX from "../assets/ic_X.png";
import { useRegistration } from "../hooks/useRegistration.js";

const Registration = () => {
  const {
    name,
    description,
    price,
    tag,
    tags,
    isActive,
    handleOnChange,
    handleOnSubmit,
    handleKeyDown,
    handleTagDelete,
  } = useRegistration();

  return (
    <main className={styles.wrapper}>
      <form className={styles.registrationContainer} onSubmit={handleOnSubmit}>
        <div className={styles.btnContainer}>
          <h1 className="text-xl bold">상품 등록하기</h1>
          <button
            type="submit"
            className={
              isActive
                ? `${styles.addBtn} ${styles.active} text-lg semibold`
                : `${styles.addBtn} text-lg semibold`
            }
            disabled={!isActive}
          >
            등록
          </button>
        </div>
        <div className={styles.inputContainer}>
          <section>
            <h2 className="text-2lg bold">상품명</h2>
            <input
              type="text"
              className={`${styles.titleInput} text-lg regular`}
              placeholder="상품명을 입력해주세요"
              name="name"
              value={name}
              onChange={handleOnChange}
            />
          </section>
          <section>
            <h2 className="text-2lg bold">상품 소개</h2>
            <textarea
              type="text"
              className={`${styles.descriptionInput} text-lg regular`}
              placeholder="상품 소개를 입력해주세요"
              name="description"
              value={description}
              onChange={handleOnChange}
            />
          </section>
          <section>
            <h2 className="text-2lg bold">판매가격</h2>
            <input
              type="text"
              className={`${styles.priceInput} text-lg regular`}
              placeholder="상품 가격을 입력해주세요"
              name="price"
              value={price}
              onChange={handleOnChange}
            />
          </section>
          <section>
            <h2 className="text-2lg bold">태그</h2>
            <input
              type="text"
              className={`${styles.tagInput} text-lg regular`}
              placeholder="태그를 입력해주세요"
              name="tags"
              value={tag}
              onChange={handleOnChange}
              onKeyDown={handleKeyDown}
            />
            <ul className={styles.tagsContainer}>
              {tags.map((t) => {
                return (
                  <li className={styles.tag} key={t}>
                    <p className="text-lg regular">{`#${t}`}</p>
                    <img
                      src={icX}
                      onClick={() => {
                        handleTagDelete(t);
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </form>
    </main>
  );
};

export default Registration;
