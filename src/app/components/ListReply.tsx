"use client";

import React, { useState } from "react";
import icKebab from "../../../public/icons/ic_kebab.png";
import icProfileLg from "../../../public/icons/ic_profile_lg.svg";
import Image from "next/image";
import type { Comment } from "../../types";
import Button from "./Button";
import { getRelativeTime } from "../../utils/formatDate";

const ListReply = ({
  comment,
  onUpdate,
}: {
  comment: Comment;
  onUpdate: () => void;
}) => {
  const [isDrop, setIsDrop] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [values, setValues] = useState({
    content: comment.content,
  });

  const initComment = comment.content;

  const editComment = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/articles/comments/${comment.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: values.content,
          }),
        },
      );
      if (!res.ok) {
        throw new Error("댓글 수정에 실패했습니다");
      }
      setIsEdit(false);
      setIsDrop(false);
      if (onUpdate) onUpdate();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("알 수 없는 에러가 발생했습니다:", error);
      }
    }
  };

  const deleteComment = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/articles/comments/${comment.id}`,
        {
          method: "DELETE",
        },
      );
      if (!res.ok) {
        throw new Error("게시글 삭제에 실패했습니다");
      }
      setIsDrop(false);
      if (onUpdate) onUpdate();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("알 수 없는 에러가 발생했습니다:", error);
      }
    }
  };

  const handleEdit = () => {
    setIsEdit(true);
    setIsDrop(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const trimmedContent = values.content.trim();
  let errorMessage = null;

  if (trimmedContent === "") {
    errorMessage = "댓글을 입력해주세요";
  } else if (trimmedContent.length < 5) {
    errorMessage = "댓글을 5자 이상 입력해주세요";
  } else if (trimmedContent.length > 500) {
    errorMessage = "댓글을 500자 이하로 입력해주세요";
  }

  const isDisabled = errorMessage !== null || trimmedContent === "";

  return (
    <div className="p-[8px] flex flex-col gap-[24px] border-b-1 border-(--Secondary-200) bg-(--background-gray)">
      <div className="flex justify-between gap-2">
        {isEdit ? (
          <textarea
            name="content"
            value={values.content}
            onChange={handleChange}
            placeholder="댓글을 입력해주세요"
            className="w-full h-[80px] px-[24px] py-[16px] bg-white rounded-xl text-lg resize-none"
          />
        ) : (
          <>
            <p className="text-md text-(--Secondary-800)">{comment.content}</p>
            <div className="relative">
              <button
                onClick={() => {
                  setIsDrop((prev) => !prev);
                }}
                className="shrink-0 w-[24px] h-[24px] cursor-pointer"
              >
                <Image
                  src={icKebab}
                  alt="옵션 더보기"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain"
                />
              </button>
              {isDrop ? (
                <div className="absolute right-0 top-full mt-2 w-[102px] z-50 flex flex-col items-center justify-center text-md text-(--Secondary-500)">
                  <button
                    onClick={handleEdit}
                    className="w-full pt-[16px] pb-[12px] text-center bg-white rounded-t-lg  border-1 border-(--Secondary-300) hover:text-gray-900"
                  >
                    수정하기
                  </button>
                  <button
                    onClick={deleteComment}
                    className="w-full pt-[12px] pb-[16px] text-center bg-white rounded-b-lg  border-l-1 border-r-1 border-b-1 border-(--Secondary-300) cursor-pointer hover:text-gray-900"
                  >
                    삭제하기
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
          </>
        )}
      </div>
      <div className="flex justify-between gap-2">
        <div className="flex gap-2">
          <Image src={icProfileLg} alt="프로필 이미지" width={32} height={32} />
          <div className="flex flex-col gap-1">
            <p className="text-xs text-(--Secondary-600)">
              {comment.writer?.nickname || "알 수 없음"}
            </p>
            <p className="text-xs text-(--Secondary-400)">
              {getRelativeTime(new Date(comment.createdAt))}
            </p>
          </div>
        </div>
        {isEdit && (
          <div className="flex gap-1">
            <button
              onClick={() => {
                setIsEdit(false);
                setValues({ content: initComment });
              }}
              className="px-[20px] py-[7px] text-lg font-semibold"
            >
              취소
            </button>
            <Button onClick={editComment} disabled={isDisabled}>
              수정 완료
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListReply;
