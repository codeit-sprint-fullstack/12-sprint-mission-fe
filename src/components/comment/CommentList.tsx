import Image from "next/image";

import CommentCard from "./CommentCard";
import type { CommentListProps } from "./types";

export default function CommentList({
  comments,
  queryKey,
  updateComment,
  deleteComment,
  emptyImage,
  emptyMessage,
  emptySize,
  className,
}: CommentListProps) {
  return (
    <div className="flex flex-col gap-4 md:gap-6 mb-10 md:mb-14 lg:mb-16">
      {comments.length == 0 ? (
        <div className="flex flex-col items-center justify-center">
          <Image
            src={emptyImage}
            width={emptySize}
            height={emptySize}
            alt=""
            aria-hidden="true"
            loading="eager"
            className={className}
          />
          <p className="text-lg text-gray-400 text-center">{emptyMessage}</p>
        </div>
      ) : (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            queryKey={queryKey}
            updateComment={updateComment}
            deleteComment={deleteComment}
          />
        ))
      )}
    </div>
  );
}
