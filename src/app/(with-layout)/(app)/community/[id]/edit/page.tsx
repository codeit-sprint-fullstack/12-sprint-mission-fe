import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getArticle } from "@/features/article/api";
import type { ApiError } from "@/types/api";

import PostEditClient from "./_components/PostEditClient";

type ArticleEditPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: ArticleEditPageProps): Promise<Metadata> {
  const { id } = await params;

  try {
    const { data: post } = await getArticle(Number(id));
    return {
      title: `${post.title} 수정`,
    };
  } catch {
    return {
      title: "게시글 수정",
    };
  }
}

export default async function ArticleEditPage({
  params,
}: ArticleEditPageProps) {
  const { id } = await params;
  const articleId = Number(id);

  const post = await getArticle(articleId)
    .then((res) => res.data)
    .catch((err: ApiError) => {
      if (err.status === 404) {
        notFound();
      }

      throw err;
    });

  return <PostEditClient post={post} />;
}
