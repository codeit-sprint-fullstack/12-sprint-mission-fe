"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BoardShell } from "./Layout";
import { createArticle, getArticle, patchArticle } from "../../api/boardService";

const DEFAULT_IMAGE_URL = "https://panda-market-api-crud.vercel.app/images/default-article.png";

export default function ArticleFormPage({ articleId }) {
  const router = useRouter();
  const isEdit = Boolean(articleId);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isEdit) return;

    let ignore = false;

    async function loadArticle() {
      try {
        const article = await getArticle(articleId);
        if (!ignore) {
          setTitle(article.title || "");
          setContent(article.content || "");
        }
      } catch {
        if (!ignore) setError("게시글 정보를 불러오지 못했습니다.");
      }
    }

    loadArticle();

    return () => {
      ignore = true;
    };
  }, [articleId, isEdit]);

  const canSubmit = title.trim() && content.trim() && !isSubmitting;

  async function handleSubmit(event) {
    event.preventDefault();
    if (!canSubmit) return;

    setIsSubmitting(true);
    setError("");

    try {
      const payload = {
        title: title.trim(),
        content: content.trim(),
        image: DEFAULT_IMAGE_URL,
      };
      const article = isEdit
        ? await patchArticle(articleId, payload)
        : await createArticle(payload);
      router.push(`/freeboard/${article?.id || articleId}`);
    } catch {
      setError(isEdit ? "게시글 수정에 실패했습니다." : "게시글 등록에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <BoardShell>
      <form className="article-form" onSubmit={handleSubmit}>
        <header className="form-header">
          <h1>{isEdit ? "게시글 수정하기" : "게시글 쓰기"}</h1>
          <button type="submit" className="submit-button" disabled={!canSubmit}>
            {isSubmitting ? "저장 중" : "등록"}
          </button>
        </header>

        {error ? <p className="form-error">{error}</p> : null}

        <label className="form-field">
          <span>*제목</span>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="제목을 입력해주세요"
          />
        </label>

        <label className="form-field">
          <span>*내용</span>
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="내용을 입력해주세요"
          />
        </label>
      </form>
    </BoardShell>
  );
}
