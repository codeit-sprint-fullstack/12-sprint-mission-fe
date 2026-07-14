export const userQueryKeys = {
  me: () => ["user"] as const,
};

export const articleQueryKeys = {
  comments: (articleId: number) => ["articleComments", articleId] as const,
};

export const productQueryKeys = {
  comments: (productId: number) => ["productComments", productId] as const,
};
