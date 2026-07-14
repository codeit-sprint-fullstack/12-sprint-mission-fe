import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import { FallbackImage } from "@/common/components/ui/FallbackImage";
import { getImageUrl } from "@/common/utils/getImageUrl";
import type { ArticleSummary } from "@/features/article/type";

type PostCardProps = {
  post: ArticleSummary;
};

export function PostCard({ post }: PostCardProps) {
  const hasImages = post.imageUrls.length > 0;
  const imageSrc = hasImages
    ? getImageUrl(post.imageUrls[0])
    : "/images/post-default-image.png";

  return (
    <Link
      href={`/community/${post.id}`}
      className="block w-full mt-6 pb-6 border-b border-gray-200 bg-surface"
    >
      <div className="flex flex-col gap-4">
        <div className="flex w-full justify-between gap-2">
          <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
          <div className="flex justify-center items-center w-[72px] h-[72px] px-3 py-[13.7px] rounded-lg border border-gray-100 bg-white">
            <FallbackImage
              src={imageSrc}
              fallbackSrc="/images/post-default-image.png"
              width={48}
              height={45}
              unoptimized
              alt={hasImages ? `${post.title}의 썸네일` : ""}
              aria-hidden={!hasImages}
            />
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2 text-md">
            <Image src="/icons/ic-profile.svg" width={24} height={24} alt="" />
            <span className="text-gray-600">{post.authorNickname}</span>
            <time dateTime={post.createdAt} className="text-gray-400">
              {format(new Date(post.createdAt), "yyyy. MM. dd")}
            </time>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src="/icons/ic-heart.svg"
              width={16}
              height={16}
              alt=""
              aria-hidden="true"
            />
            <span className="text-gray-500 text-lg">{post.favoriteCount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
