import { POST_LIMIT } from "@/constants/pagination";
import type { Article, ArticleSummary } from "@/types/article";
import type {
  CommentListResponse,
  CommentResponse,
  CreateCommentBody,
} from "@/types/comment";
import type { ListQueryParams } from "@/types/list";

import { api } from "./client.api";

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
};

type UpdateArticleBody = {
  title?: string;
  content?: string;
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
  return api.get<ArticleResponse>(`/articles/${id}`);
};

export const createArticle = (data: CreateArticleBody) =>
  api.post<ArticleResponse, CreateArticleBody>(`/articles`, data);

export const updateArticle = (id: number, fields: UpdateArticleBody) =>
  api.patch<ArticleResponse, UpdateArticleBody>(`/articles/${id}`, fields);

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
