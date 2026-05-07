"use client";

import { useState } from "react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import KebabMenu from "./KebabMenu";

export default function CommentCard({ comment }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex flex-col gap-6 pb-[0.75rem] border-b border-gray-300 bg-gray-bg">
      <div className="flex justify-between items-center">
        <p className="text-md-regular">{comment.content}</p>
        <KebabMenu>
          <KebabMenu.Button onClick={() => setIsEditing(true)}>
            수정하기
          </KebabMenu.Button>
          <KebabMenu.Button>삭제하기</KebabMenu.Button>
        </KebabMenu>
      </div>
      <div className="flex items-start gap-2">
        <Image
          src="/icons/ic-profile.svg"
          width={32}
          height={32}
          alt="프로필 사진"
        />
        <div className="flex flex-col gap-1 text-xs-regular">
          <span className="text-gray-600">닉네임</span>
          <span className="text-gray-400">
            {formatDistanceToNow(new Date(comment.createdAt), {
              addSuffix: true,
              locale: ko,
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
