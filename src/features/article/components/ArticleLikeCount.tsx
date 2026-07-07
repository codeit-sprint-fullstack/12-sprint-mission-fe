"use client";

import LikeCountClient from "@/components/ui/LikeCountClient";
import { toggleArticleFavorite } from "@/features/article/api";
import type { Article } from "@/features/article/type";

type ArticleLikeCountProps = {
  articleId: number;
  article: Article;
};

export function ArticleLikeCount({
  articleId,
  article,
}: ArticleLikeCountProps) {
  return (
    <LikeCountClient
      key={articleId}
      initialCount={article.favoriteCount}
      initialLiked={article.isLiked}
      mutateFn={(liked) => toggleArticleFavorite(articleId, liked)}
    />
  );
}
