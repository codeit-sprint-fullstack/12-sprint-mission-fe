import Image from "next/image";

export default function LikeCount({ count }) {
  return (
    <div className="flex flex-col items-center justify-center px-3 py-1 rounded-full border border-gray-200 bg-white">
      <div className="flex items-center gap-1 ">
        <Image
          src="/icons/ic-heart.svg"
          width={32}
          height={32}
          alt=""
          aria-hidden="true"
          className="w-6 h-6 md:w-8 md:h-8 shrink-0"
        />
        <span className="text-lg-medium text-gray-500">{count}</span>
      </div>
    </div>
  );
}
