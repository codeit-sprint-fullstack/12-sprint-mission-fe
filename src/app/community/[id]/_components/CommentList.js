"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
      {comments.length == 0 ? (
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/icons/ic-empty-comment.svg"
            width={140}
            height={140}
            alt=""
            aria-hidden="true"
          />
          <p className="text-lg-regular text-gray-400 text-center">
            아직 댓글이 없어요,
            <br /> 지금 댓글을 달아보세요!
          </p>
        </div>
      ) : (
        comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))
      )}
    </div>
  );
}
