"use client";

import { useRouter } from "next/navigation";

const DEFAULT_IMAGE = "/images/default-product.png";

export default function BestArticleCard({ article }) {
  const router = useRouter();

  return (
    <article
      onClick={() => router.push(`/community/${article.id}`)}
      className="relative h-[169px] w-[384px] cursor-pointer rounded-[8px] bg-[#F9FAFB] px-[14px] py-[0px]"
    >
      <img
        src="/images/icons/img_badge.svg"
        alt="Best"
        className="h-[24px] w-[72px]"
      />

      <div className="mt-[12px] flex items-start justify-between gap-[12px]">
        <h3 className="line-clamp-2 max-w-[190px] text-[15px] font-semibold leading-[22px] text-[#111827]">
          {article.title}
        </h3>

        <img
          src={article.image || DEFAULT_IMAGE}
          alt=""
          className="h-[72px] w-[72px] rounded-[4px] object-cover"
        />
      </div>

      <div className="absolute bottom-[14px] left-[16px] flex items-center gap-[8px] text-[11px] text-[#9CA3AF]">
        <img
          src="/images/icons/pr-small.svg"
          alt="프로필"
          className="h-[24px] w-[24px]"
        />
        <span>좋은판다</span>
        <span className="flex items-center gap-[4px]">
          <img
            src="/images/icons/fv-inactive.png"
            alt=""
            className="h-[14px] w-[14px]"
          />
          9999+
        </span>
      </div>

      <span className="absolute bottom-[14px] right-[16px] text-[11px] text-[#C4C4C4]">
        2024. 04. 16
      </span>
    </article>
  );
}
