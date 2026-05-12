import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

export default function PostCard({ post }) {
  const hasImage = Boolean(post?.imageUrl);
  const imageSrc = hasImage ? post.imageUrl : "/images/post-default-image.png";

  return (
    <Link
      href={`/community/${post.id}`}
      className="block w-full mt-6 pb-6 border-b border-gray-200 bg-surface"
    >
      <div className="flex flex-col gap-4">
        <div className="flex w-full justify-between gap-2">
          <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
          <div className="flex justify-center items-center w-[72px] h-[72px] px-3 py-[13.7px] rounded-lg border border-gray-100 bg-white">
            <Image
              src={imageSrc}
              width={48}
              height={45}
              alt={hasImage ? `${post.title} 썸네일` : ""}
              aria-hidden={!imageSrc}
            />
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2 text-md">
            <Image src="/icons/ic-profile.svg" width={24} height={24} alt="" />
            <span className="text-gray-600">닉네임</span>
            <span className="text-gray-400">
              {format(new Date(post.createdAt), "yyyy. MM. dd")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src="/icons/ic-heart.svg"
              width={16}
              height={16}
              alt=""
              aria-hidden="true"
            />
            <span className="text-gray-500 text-lg">9999+</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
