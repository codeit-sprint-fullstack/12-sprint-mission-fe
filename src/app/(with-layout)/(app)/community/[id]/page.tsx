import { format } from "date-fns";
import type { Metadata } from "next";
import Image from "next/image";

import { PostCommentSection } from "@/app/(with-layout)/(app)/community/[id]/_components/PostCommentSection";
import { BackToListButton } from "@/common/components/ui/BackToListButton";
import { fetchOr404 } from "@/common/utils/fetchOr404";
import { getImageUrl } from "@/common/utils/getImageUrl";
import { getArticle } from "@/features/article/api";
import { ArticleKebabMenu } from "@/features/article/components/ArticleKebabMenu";
import { ArticleLikeCount } from "@/features/article/components/ArticleLikeCount";

type ArticleDetailPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const { id } = await params;

  try {
    const { data: article } = await getArticle(Number(id));
    return { title: article.title };
  } catch {
    return { title: "게시글을 찾을 수 없어요" };
  }
}

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { id } = await params;
  const articleId = Number(id);

  const article = await fetchOr404(() => getArticle(articleId));
  const hasImages = article.imageUrls.length > 0;

  return (
    <section className="flex flex-col w-full">
      <div className="pb-4 mb-4 md:mb-6 border-b border-gray-200">
        <div className="flex justify-between gap-2 w-full pb-4">
          <h2 className="text-xl font-bold">{article.title}</h2>
          <ArticleKebabMenu articleId={articleId} />
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-4">
            <Image
              src="/icons/ic-profile.svg"
              width={40}
              height={40}
              alt="프로필 사진"
            />
            <div className="flex gap-1 text-md font-medium md:gap-2">
              <span className="text-gray-600">{article.authorNickname}</span>
              <time dateTime={article.createdAt} className="text-gray-400">
                {format(new Date(article.createdAt), "yyyy. MM. dd")}
              </time>
            </div>
          </div>
          <div className="w-px h-[2.125rem] bg-gray-200" />
          <ArticleLikeCount articleId={articleId} article={article} />
        </div>
      </div>

      {hasImages && (
        <div className="flex flex-wrap gap-3 mb-8 md:mb-10 lg:mb-8">
          {article.imageUrls.map((url) => (
            <div
              key={url}
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden bg-gray-100"
            >
              <Image
                src={getImageUrl(url)!}
                alt={`${article.title} 첨부 이미지`}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <p className="mb-8 md:mb-10 lg:mb-8 text-lg lg:text-2lg font-normal">
        {article.content}
      </p>

      <PostCommentSection articleId={articleId} />

      <BackToListButton href="/community" />
    </section>
  );
}
