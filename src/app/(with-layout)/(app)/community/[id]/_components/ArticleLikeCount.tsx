"use client";

import LikeCountClient from "@/components/ui/LikeCountClient";
import { toggleArticleFavorite } from "@/lib/api/article.api";
import type { Article } from "@/types/article";

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
