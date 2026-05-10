"use client";

import { useEffect, useState } from "react";
import { getArticleComments } from "@/lib/api/posts";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import CommentListSkeleton from "./CommentListSkeleton";

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchComments = async () => {
    const { data } = await getArticleComments({
      articleId: postId,
    });

    setComments(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <div className="flex flex-col mb-6 md:mb-8 lg:mb-10">
        <h3 className="mb-2 text-lg-semibold">댓글달기</h3>
        <CommentForm postId={postId} onSuccess={fetchComments} />
      </div>

      {isLoading ? (
        <CommentListSkeleton />
      ) : (
        <CommentList comments={comments} onRefresh={fetchComments} />
      )}
    </>
  );
}
