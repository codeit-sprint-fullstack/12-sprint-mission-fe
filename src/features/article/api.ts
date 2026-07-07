import { api } from "@/common/api/client";
import { POST_LIMIT } from "@/common/constants/pagination";
import type {
  CommentListResponse,
  CommentResponse,
  CreateCommentBody,
} from "@/common/types/common";
import type { Article, ArticleSummary } from "@/features/article/type";
import type { FavoriteResponse } from "@/types/favorite";
import type { ListQueryParams } from "@/types/list";

type ArticleListResponse = {
  data: ArticleSummary[];
  meta: {
    totalCount: number;
    totalPages: number;
  };
};

type ArticleResponse = {
  data: Article;
};

type CreateArticleBody = {
  title: string;
  content: string;
  imageUrl?: string;
};

type UpdateArticleBody = {
  title?: string;
  content?: string;
  existingImageUrls?: string[]; // 수정 시 유지할 기존 이미지 URL 목록
};

type GetCommentsParams = {
  articleId: number;
  cursor?: number;
  take?: number;
};

export const getArticles = ({
  page = 1,
  pageSize = POST_LIMIT,
  orderBy = "recent",
  keyword = "",
}: ListQueryParams = {}) => {
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    orderBy,
    keyword,
  });
  return api.get<ArticleListResponse>(`/articles?${params}`);
};

export const getArticle = (id: number) => {
  return api.get<ArticleResponse>(`/articles/${id}`, { cache: "no-store" });
};

export const createArticle = (
  data: CreateArticleBody,
  imageFiles: File[] = [],
) => {
  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("content", data.content);

  imageFiles.forEach((file) => formData.append("images", file));

  return api.post<ArticleResponse, FormData>(`/articles`, formData);
};

export const updateArticle = (
  id: number,
  fields: UpdateArticleBody,
  newImageFiles: File[] = [],
) => {
  const formData = new FormData();

  if (fields.title !== undefined) {
    formData.append("title", fields.title);
  }
  if (fields.content !== undefined) {
    formData.append("content", fields.content);
  }

  formData.append(
    "existingImageUrls",
    JSON.stringify(fields.existingImageUrls ?? []),
  );

  newImageFiles.forEach((file) => formData.append("images", file));

  return api.patch<ArticleResponse, FormData>(`/articles/${id}`, formData);
};

export const deleteArticle = (id: number) =>
  api.delete<void>(`/articles/${id}`);

export const getArticleComments = ({
  articleId,
  cursor,
  take = 10,
}: GetCommentsParams) => {
  const params = new URLSearchParams({ take: String(take) });

  if (cursor !== undefined) {
    params.append("cursor", String(cursor));
  }

  return api.get<CommentListResponse>(
    `/articles/${articleId}/comments?${params}`,
  );
};

export const createArticleComment = (articleId: number, content: string) =>
  api.post<CommentResponse, CreateCommentBody>(
    `/articles/${articleId}/comments`,
    { content },
  );

export const addArticleFavorite = (articleId: number) =>
  api.post<FavoriteResponse, undefined>(
    `/articles/${articleId}/favorite`,
    undefined,
  );

export const removeArticleFavorite = (articleId: number) =>
  api.delete<void>(`/articles/${articleId}/favorite`);

// 추가/삭제가 별도 엔드포인트이므로 nextLiked 값을 기준으로 내부에서 분기
export const toggleArticleFavorite = (articleId: number, nextLiked: boolean) =>
  nextLiked ? addArticleFavorite(articleId) : removeArticleFavorite(articleId);
