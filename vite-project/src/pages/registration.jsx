import Header from "../components/Header";
import Footer from "../components/Footer";
import "./registration.css";
import { useState } from "react";
import tag_delete from "../assets/img/tag_delete.png";

const registration = () => {
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

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

  return (
    <div>
      <Header />
      <main className="main-container">
        <form className="form-container">
          <section className="button-containter">
            <label className="button-label">상품 등록하기</label>
            <button className="register-button">등록</button>
          </section>
          <section className="input-container">
            <div className="input-field">
              <label className="input-label">상품명</label>
              <input placeholder="상품명을 입력해주세요" />
            </div>
            <div className="input-field">
              <label className="input-label">상품 소개</label>
              <textarea placeholder="상품명을 입력해주세요" />
            </div>
            <div className="input-field">
              <label className="input-label">판매가격</label>
              <input placeholder=" 판매 가격을 입력해주세요" />
            </div>
            <div className="input-field">
              <label className="input-label">태그</label>
              <input
                placeholder="태그를 입력해주세요"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
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
            </div>
          </section>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default registration;
