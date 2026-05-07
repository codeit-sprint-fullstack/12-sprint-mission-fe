"use client";

import { useEffect, useState } from "react";
import { getArticleComments } from "@/lib/api/posts";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const { data } = await getArticleComments({
      articleId: postId,
    });

    setComments(data);
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

      <CommentList comments={comments} />
    </>
  );
}
