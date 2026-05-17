import { useRouter } from "next/navigation";

const DEFAULT_IMAGE = "/images/default-product.png";

export default function ArticleListItem({ article }) {
  const router = useRouter();

  return (
    <article
      onClick={() => router.push(`/community/${article.id}`)}
      className="relative flex min-h-[110px] cursor-pointer border-b border-[#E5E7EB] py-[22px]"
    >
      <div className="flex-1">
        <h3 className="text-[16px] font-semibold leading-[24px] text-[#111827]">
          {article.title}
        </h3>

        <div className="mt-[28px] flex items-center gap-[8px] text-[11px] text-[#9CA3AF]">
          <img
            src="/images/icons/pr-small.svg"
            alt="프로필"
            className="h-[24px] w-[24px]"
          />
          <span>좋은판다</span>
          <span>2024. 04. 16</span>
        </div>
      </div>

      <div className="flex items-center gap-[20px]">
        <img
          src={article.image || DEFAULT_IMAGE}
          alt=""
          className="h-[72px] w-[72px] rounded-[4px] object-cover"
        />

        <span className="flex w-[58px] items-center gap-[4px] text-[11px] text-[#9CA3AF]">
          <img
            src="/images/icons/fv-inactive.png"
            alt=""
            className="h-[16px] w-[16px]"
          />
          {article.likeCount || 9999}+
        </span>
      </div>
    </article>
  );
}
