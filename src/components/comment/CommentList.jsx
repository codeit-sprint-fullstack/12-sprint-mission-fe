import Image from "next/image";
import CommentCard from "./CommentCard";

export default function CommentList({
  comments,
  onRefresh,
  updateComment,
  deleteComment,
}) {
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
            loading="eager"
          />
          <p className="text-lg text-gray-400 text-center">
            아직 댓글이 없어요,
            <br /> 지금 댓글을 달아보세요!
          </p>
        </div>
      ) : (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            onRefresh={onRefresh}
            updateComment={updateComment}
            deleteComment={deleteComment}
          />
        ))
      )}
    </div>
  );
}
