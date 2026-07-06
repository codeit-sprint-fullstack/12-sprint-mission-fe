import { format } from "date-fns";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import BackToListButton from "@/components/ui/BackToListButton";
import { getArticle } from "@/lib/api/article.api";
import type { ApiError } from "@/types/api";

import ArticleKebabMenu from "./_components/ArticleKebabMenu";
import CommentSection from "./_components/CommentSection";
import LikeCountClient from "./_components/LikeCountClient";

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

  let article;
  try {
    const { data } = await getArticle(articleId);
    article = data;
  } catch (err) {
    if (err instanceof Error && (err as ApiError).status === 404) {
      notFound();
    }
    throw err;
  }

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
          <LikeCountClient
            key={articleId}
            articleId={articleId}
            initialCount={article.favoriteCount}
            initialLiked={article.isLiked}
          />
        </div>
      </div>

      <p className="mb-8 md:mb-10 lg:mb-8 text-lg lg:text-2lg font-normal">
        {article.content}
      </p>

      <CommentSection articleId={articleId} />

      <BackToListButton href="/community" />
    </section>
  );
}
