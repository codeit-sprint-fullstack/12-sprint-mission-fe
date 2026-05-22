"use client";

import { useState } from "react";
import { getArticleComments } from "@/lib/api/posts";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import CommentListSkeleton from "./CommentListSkeleton";

export default function CommentSectionClient({ postId, initialComments }) {
  const [comments, setComments] = useState(initialComments);
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = async () => {
    setIsLoading(true);
    try {
      const { data } = await getArticleComments({ articleId: postId });
      setComments(data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col mb-6 md:mb-8 lg:mb-10">
        <h3 className="mb-2 text-lg font-semibold">댓글달기</h3>
        <CommentForm postId={postId} onSuccess={handleRefresh} />
      </div>

      {isLoading ? (
        <CommentListSkeleton />
      ) : (
        <CommentList comments={comments} onRefresh={handleRefresh} />
      )}
    </>
  );
}
