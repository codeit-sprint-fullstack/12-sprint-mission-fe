"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Button from "../../../../components/Button";

const EditArticlePage = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    title: "",
    content: "",
  });
  const router = useRouter();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`,
        );
        if (!res.ok) {
          throw new Error("게시글 상세 조회에 실패했습니다.");
        }
        const { data } = await res.json();

        setValues({
          title: data.title.trim(),
          content: data.content.trim(),
        });
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error("알 수 없는 에러가 발생했습니다:", error);
        }
      }
    };

    fetchArticle();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const trimmedTitle = values.title.trim();
  const trimmedContent = values.content.trim();

  let titleError = null;
  if (trimmedTitle === "") {
    titleError = "제목을 입력해주세요";
  } else if (trimmedTitle.length > 20) {
    titleError = "제목을 20자 이하로 입력해주세요";
  }

  let contentError = null;
  if (trimmedContent === "") {
    contentError = "내용을 입력해주세요";
  } else if (trimmedContent.length < 5) {
    contentError = "내용을 5자 이상 입력해주세요";
  } else if (trimmedContent.length > 500) {
    contentError = "내용을 500자 이하로 입력해주세요";
  }

  const isDisabled = titleError !== null || contentError !== null;

  const handleRegister = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: values.title,
            content: values.content,
          }),
        },
      );

      router.push(`/community/${id}`);
    } catch (error) {
      console.error(error);
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
          {values.title !== "" && titleError && (
            <p className="text-(--error-red)">{titleError}</p>
          )}
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
          {values.content !== "" && contentError && (
            <p className="text-(--error-red)">{contentError}</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default EditArticlePage;
