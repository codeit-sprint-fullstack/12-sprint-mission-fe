"use client";

import { useState, useEffect } from "react";
import { getArticleComments } from "@/lib/api/posts";
import CommentCard from "./CommentCard";

export default function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPostComments = async () => {
      const { data } = await getArticleComments({ articleId: postId });
      setComments(data);
    };

    fetchPostComments();
  }, []);

  return (
    <div className="flex flex-col gap-4 md:gap-6 mb-10 md:mb-14 lg:mb-16">
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
