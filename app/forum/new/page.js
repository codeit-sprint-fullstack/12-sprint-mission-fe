"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { createArticle } from "../../../lib/articleService";

export default function CreateArticlePage() {
  const router = useRouter();
  const fileInputRef = useRef(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(""); // 업로드 한 파일 미리보기
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = title.trim() !== "" && content.trim() !== "";

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // 이미지 삭제
  const handleRemoveImage = (e) => {
    e.stopPropagation();
    setImageFile(null);
    setImagePreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    setError(null);

    try {
      await createArticle({
        title: title.trim(),
        content: content.trim(),
        image: imagePreview,
      });
      router.push("/forum");
    } catch (err) {
      setError("게시글 등록에 실패했습니다.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="page-content forum-create-page">
        <div className="forum-create__container">
          <div className="forum-create__top-bar">
            <h1 className="forum-create__title">게시글 작성</h1>
            <div className="forum-create__actions">
              <button
                type="button"
                className="cancel-button"
                onClick={() => router.push("/forum")}
              >
                취소
              </button>
              <button
                type="submit"
                form="article-form"
                disabled={isSubmitting || !isFormValid}
                className={`submit-button ${isFormValid ? "active" : "disabled"}`}
              >
                {isSubmitting ? "등록중..." : "등록"}
              </button>
            </div>
          </div>

          <form
            id="article-form"
            className="forum-create__form"
            onSubmit={handleSubmit}
          >
            <div className="forum-create__field">
              <label htmlFor="title">제목</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목을 입력해주세요"
              />
            </div>

            <div className="forum-create__field">
              <label htmlFor="content">내용</label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="내용을 입력해주세요"
                rows={12}
              />
            </div>

            <div className="forum-create__field">
              <label>이미지</label>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <div
                className={`image-upload-box ${imagePreview ? "has-image" : ""}`}
                onClick={() => fileInputRef.current.click()}
              >
                {imagePreview ? (
                  <>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="image-preview"
                    />
                    <button
                      type="button"
                      className="image-remove-btn"
                      onClick={handleRemoveImage}
                    >
                      ×
                    </button>
                  </>
                ) : (
                  <div className="upload-placeholder">
                    <span className="plus-icon">+</span>
                    <span>이미지 등록</span>
                  </div>
                )}
              </div>
            </div>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
