import Header from "../components/Header";
import Footer from "../components/Footer";
import "./registration.css";
import { useState } from "react";
import tag_delete from "../assets/img/tag_delete.png";

const registration = () => {
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [tagsError, setTagsError] = useState("");

  const handleTagKeyDown = (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    const newTag = tagInput.trim();
    if (!newTag) return;
    if (tags.includes(newTag)) return;

    setTags([...tags, newTag]);
    setTagInput("");
  };

  const handleRemoveTag = (targetTag) => {
    setTags(tags.filter((tag) => tag !== targetTag));
  };

  const isFormValid =
    name.trim() !== "" &&
    description.trim() !== "" &&
    price.trim() !== "" &&
    tags.length > 0;

  return (
    <div>
      <Header />
      <main className="main-container">
        <form className="form-container">
          <section className="button-containter">
            <label className="button-label">상품 등록하기</label>
            {isFormValid ? (
              <button className="activation-button">등록</button>
            ) : (
              <button className="deactivation-button">등록</button>
            )}
          </section>
          <section className="input-container">
            <div className="input-field">
              <label className="input-label">상품명</label>
              <input
                className={nameError ? "input error" : ""}
                placeholder="상품명을 입력해주세요"
                value={name}
                onChange={(e) => {
                  const value = e.target.value;

                  if (value.length > 10) {
                    setNameError("10자 이내로 입력해주세요");
                  } else {
                    setNameError("");
                  }

                  setName(value);
                }}
              />
              {nameError && <span className="error-text">{nameError}</span>}
            </div>

            <div className="input-field">
              <label className="input-label">상품 소개</label>
              <textarea
                placeholder="상품 소개를 입력해주세요"
                className={descriptionError ? "input error" : ""}
                value={description}
                onChange={(e) => {
                  const value = e.target.value;

                  if (value.length < 10) {
                    setDescriptionError("10자 이상 입력해주세요");
                  } else {
                    setDescriptionError("");
                  }

                  setDescription(value);
                }}
              />
              {descriptionError && (
                <span className="error-text">{descriptionError}</span>
              )}
            </div>
            <div className="input-field">
              <label className="input-label">판매가격</label>
              <input
                className={priceError ? "input error" : ""}
                placeholder="판매 가격을 입력해주세요"
                value={price}
                onChange={(e) => {
                  const value = e.target.value;
                  setPrice(value);
                  if (!/^\d*$/.test(value)) {
                    setPriceError("숫자로 입력해주세요");
                  } else {
                    setPriceError("");
                  }
                }}
              />
              {priceError && <span className="error-text">{priceError}</span>}
            </div>
            <div className="input-field">
              <label className="input-label">태그</label>
              <input
                placeholder="태그를 입력해주세요"
                value={tagInput}
                onKeyDown={handleTagKeyDown}
                className={tagsError ? "input error" : ""}
                onChange={(e) => {
                  const value = e.target.value;

                  if (value.length > 5) {
                    setTagsError("5자 이내로 입력해주세요");
                  } else {
                    setTagsError("");
                  }

                  setTagInput(e.target.value);
                }}
              />
              <div className="tag-list">
                {tags.map((tag) => (
                  <div key={tag} className="tag-item">
                    <span>#{tag}</span>
                    <img
                      src={tag_delete}
                      className="tag-delete-button"
                      onClick={() => handleRemoveTag(tag)}
                    />
                  </div>
                ))}
              </div>
              {tagsError && <span className="error-text">{tagsError}</span>}
            </div>
          </section>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default registration;
