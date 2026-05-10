import Image from "next/image";

export default function LikeCount({ liked = false, count, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-pressed={liked}
      aria-label={`좋아요 ${count}개`}
      className="flex flex-col items-center justify-center px-3 py-1 rounded-full border border-gray-200 bg-white cursor-pointer"
    >
      <div className="flex items-center gap-1">
        <Image
          src={liked ? "/icons/ic-heart-filled.svg" : "/icons/ic-heart.svg"}
          width={32}
          height={32}
          alt=""
          aria-hidden="true"
          className="w-6 h-6 md:w-8 md:h-8 shrink-0"
        />
        <span className="text-lg-medium text-gray-500">{count}</span>
      </div>
    </button>
  );
}
