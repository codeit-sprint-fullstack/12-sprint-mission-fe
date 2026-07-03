export type ArticleSummary = {
  id: number;
  title: string;
  content: string;
  favoriteCount: number;
  authorId: number;
  createdAt: string;
  updatedAt: string;
  authorNickname: string;
};

export type Article = ArticleSummary & {
  isLiked: boolean;
};
