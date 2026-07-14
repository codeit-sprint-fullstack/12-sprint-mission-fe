"use client";

import { toggleArticleFavorite } from "@/features/article/api";
import type { Article } from "@/features/article/type";
import { LikeCountClient } from "@/features/Like/LikeCountClient";

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
