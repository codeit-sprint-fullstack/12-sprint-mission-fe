export type ProductSummary = {
  id: number;
  name: string;
  price: number;
  favoriteCount: number;
  createdAt: string;
  updatedAt: string;
  imageUrls: string[];
};

export type Product = ProductSummary & {
  description: string;
  tags: string[];
  authorId: number;
  authorNickname: string;
  isLiked: boolean;
};
