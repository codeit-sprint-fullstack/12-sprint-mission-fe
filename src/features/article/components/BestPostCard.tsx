import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import FallbackImage from "@/components/ui/FallbackImage";
import type { ArticleSummary } from "@/features/article/type";
import { getImageUrl } from "@/utils/getImageUrl";

type BestPostCardProps = {
  post: ArticleSummary;
};

export default function BestPostCard({ post }: BestPostCardProps) {
  const hasImages = post.imageUrls.length > 0;
  const imageSrc = hasImages
    ? getImageUrl(post.imageUrls[0])
    : "/images/post-default-image.png";

  return (
    <Link href={`/community/${post.id}`}>
      <div
        className="
          flex flex-col items-start gap-4 h-full px-6 pb-4 rounded-lg bg-gray-50
          xl:h-[10.5625rem] xl:pb-2 xl:gap-[0.625rem]
        "
      >
        <div className="flex justify-center items-center gap-1 w-[6.375rem] py-0.5 px-6 rounded-b-2xl bg-primary">
          <Image
            src="/icons/ic-medal.svg"
            width={16}
            height={16}
            alt=""
            aria-hidden="true"
          />
          <span className="text-lg font-semibold text-white">Best</span>
        </div>
        <div className="flex w-full justify-between gap-2">
          <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">
            {post.title}
          </h3>
          <div
            className="
              flex justify-center items-center w-[4.5rem] h-[4.5rem] p-[0.857rem_0.75rem]
              rounded-lg border-gray-200 bg-white 
              md:rounded-md md:border md:flex-shrink-0"
          >
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
        <div className="flex justify-between items-center w-full text-md mt-6 xl:mt-0">
          <div className="flex gap-2">
            <span className="text-gray-600">{post.authorNickname}</span>
            <div className="flex items-center gap-1 text-gray-500">
              <Image
                src="/icons/ic-heart.svg"
                width={16}
                height={16}
                alt=""
                aria-hidden="true"
              />
              <span>{post.favoriteCount}</span>
            </div>
          </div>
          <time dateTime={post.createdAt} className="text-gray-400">
            {format(new Date(post.createdAt), "yyyy. MM. dd")}
          </time>
        </div>
      </div>
    </Link>
  );
}
