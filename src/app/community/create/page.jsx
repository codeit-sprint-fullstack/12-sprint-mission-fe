"use client";

import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateArticlePage = () => {
  const [values, setValues] = useState({
    title: "",
    content: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState({
    title: null,
    content: null,
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    const newArticle = {
      title: values.title.trim(),
      content: values.content.trim(),
    };

    if (newArticle.title === "") {
      setErrors((prev) => ({ ...prev, title: "제목을 입력해주세요" }));
      return;
    } else if (newArticle.title.length < 1) {
      setErrors((prev) => ({ ...prev, title: "제목을 1자 이상 입력해주세요" }));
      return;
    } else if (newArticle.title.length > 20) {
      setErrors((prev) => ({
        ...prev,
        title: "제목을 20자 이하로 입력해주세요",
      }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, title: null }));
    }

    if (newArticle.content === "") {
      setErrors((prev) => ({ ...prev, content: "내용을 입력해주세요" }));
      return;
    } else if (newArticle.content.length < 5) {
      setErrors((prev) => ({
        ...prev,
        content: "내용을 5자 이상 입력해주세요",
      }));
      return;
    } else if (newArticle.title.length > 500) {
      setErrors((prev) => ({
        ...prev,
        content: "내용을 500자 이하로 입력해주세요",
      }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, content: null }));
    }

    if (!errors.title && !errors.content) {
      setIsDisabled(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: values.title,
          content: values.content,
        }),
      });

      router.push("/community");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="w-full max-w-[1200px] h-full mx-auto px-[15px] my-[24px] flex flex-col gap-[15px] grow md:gap-[24px]">
      <header className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-(--Secondary-900)">
          게시글 쓰기
        </h2>
        <Button onClick={handleRegister} disabled={isDisabled}>
          등록
        </Button>
      </header>
      <main className="flex flex-col gap-[16px]">
        <section className="flex flex-col gap-[12px]">
          <h2 className="text-xl font-bold text-(--Secondary-900)">*제목</h2>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            placeholder="제목을 입력해주세요"
            className="w-full px-[24px] py-[16px] bg-(--Secondary-100) rounded-xl text-lg"
          />
          {errors.title && <p className="text-(--error-red)">{errors.title}</p>}
        </section>
        <section className="flex flex-col gap-[12px]">
          <h2 className="text-xl font-bold text-(--Secondary-900)">*내용</h2>
          <textarea
            name="content"
            value={values.content}
            onChange={handleChange}
            placeholder="내용을 입력해주세요"
            className="w-full h-[282px] px-[24px] py-[16px] bg-(--Secondary-100) rounded-xl text-lg resize-none"
          />
          {errors.content && (
            <p className="text-(--error-red)">{errors.content}</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default CreateArticlePage;
