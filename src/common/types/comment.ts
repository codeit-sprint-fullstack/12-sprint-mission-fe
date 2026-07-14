export type Comment = {
  id: number;
  content: string;
  articleId: number | null;
  productId: number | null;
  authorId: number;
  createdAt: string;
  updatedAt: string;
  authorNickname: string;
};

export type CommentResponse = {
  data: Comment;
};

export type CommentListResponse = {
  data: Comment[];
  meta: {
    nextCursor: number | null;
    hasNextPage: boolean;
  };
};

export type CreateCommentBody = {
  content: string;
};
