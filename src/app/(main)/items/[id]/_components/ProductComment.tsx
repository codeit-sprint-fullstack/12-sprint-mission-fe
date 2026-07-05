"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import icBack from "@/assets/icons/ic_back.png";
import Image from "next/image";

import type { Comment } from "../../../../../types";
import Button from "../../../../components/Button";
import EmptyComment from "../../../../components/EmptyComment";
import ListProductReply from "../../../../components/ListProductReply";

const ProductComment = () => {
  const { id } = useParams();
  const idString = String(id);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState({ content: "" });
  const router = useRouter();

  useEffect(() => {
    const fetchComments = async (id: string) => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_PANDAMARKET_API_URL}/products/${id}/comments?limit=10`,
        );
        if (!res.ok) {
          throw new Error("댓글 불러오기에 실패했습니다.");
        }
        const { list } = await res.json();
        setComments(list);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error("알 수 없는 에러가 발생했습니다:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchComments(idString);
  }, [idString]);

  const handleRefreshComments = () => {
    const reFetch = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_PANDAMARKET_API_URL}/products/${id}/comments?limit=10`,
        );
        if (res.ok) {
          const { list } = await res.json();
          setComments(list);
        }
      } catch (e) {
        console.error(e);
      }
    };
    if (id) reFetch();
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PANDAMARKET_API_URL}/products/${id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({
            content: values.content,
          }),
        },
      );

      setValues({ content: "" });
      handleRefreshComments();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("알 수 없는 에러가 발생했습니다:", error);
      }
    }
  };

  const trimmedContent = values.content.trim();
  let errorMessage = null;

  if (trimmedContent === "") {
    errorMessage = "댓글을 입력해주세요";
  } else if (trimmedContent.length > 500) {
    errorMessage = "댓글을 500자 이하로 입력해주세요";
  }

  const isDisabled = errorMessage !== null || trimmedContent === "";

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="my-[24px]">
      <div className="mb-[24px] flex flex-col gap-[9px] md:mb-[32px] xl:mb-[40px]">
        <h1 className="text-lg text-(--Secondary-900) font-semibold">
          문의하기
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[16px] items-end"
        >
          <textarea
            name="content"
            value={values.content}
            onChange={handleChange}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            className="w-full h-[129px] px-[24px] py-[16px] bg-(--Secondary-100) rounded-xl text-lg resize-none"
          />
          <div>
            <Button type="submit" disabled={isDisabled}>
              등록
            </Button>
          </div>
        </form>
      </div>
      {comments.length <= 0 ? (
        <EmptyComment type={"products"} />
      ) : (
        <div className="flex flex-col gap-[16px]">
          {comments.map((comment) => {
            return (
              <ListProductReply
                key={comment.id}
                comment={comment}
                onUpdate={handleRefreshComments}
              />
            );
          })}
        </div>
      )}
      <div className="flex justify-center mt-[40px] md:mt-[56px] xl:mt-[64px]">
        <button
          onClick={() => {
            router.push("/items");
          }}
          className="flex gap-2 text-2lg font-semibold text-white text-center rounded-[40px] bg-(--Primary-100) px-[64px] py-[12px] cursor-pointer hover:bg-(--Primary-200)"
        >
          목록으로 돌아가기
          <figure className="w-[24px] h-[24px] shrink-0">
            <Image
              src={icBack}
              alt="목록으로 돌아가기"
              width={24}
              height={24}
            />
          </figure>
        </button>
      </div>
    </div>
  );
};

export default ProductComment;
