export type ProductSummary = {
  id: number;
  name: string;
  price: number;
  favoriteCount: number;
  createdAt: string;
  updatedAt: string;
  imageUrl: string | null;
};

export type Product = ProductSummary & {
  description: string;
  tags: string[];
  authorId: number;
  authorNickname: string;
  isLiked: boolean;
};
