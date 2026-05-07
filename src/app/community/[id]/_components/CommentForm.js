"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function CommentForm({ postId }) {
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    // API 호출
  };

  return (
    <div>
      <div className="flex flex-col gap-3">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="댓글을 입력해주세요."
          className="w-full h-[6.5rem] px-6 py-4 rounded-xl bg-gray-100"
        />

        <div className="flex justify-end">
          <Button
            className="px-[1.4375rem] h-[2.625rem] text-lg-semibold rounded-lg"
            onClick={handleSubmit}
            disabled
          >
            등록
          </Button>
        </div>
      </div>
    </div>
  );
}
