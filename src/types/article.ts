export type ArticleSummary = {
  id: number;
  title: string;
  content: string;
  favoriteCount: number;
  authorId: number;
  createdAt: string;
  updatedAt: string;
  authorNickname: string;
  imageUrls: string[];
};

export type Article = ArticleSummary & {
  isLiked: boolean;
};

export type ArticleLoadMoreParams = {
  keyword: string;
  orderBy: string;
  initialPage: number;
  totalPages: number;
};
