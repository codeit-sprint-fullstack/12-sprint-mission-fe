"use client";

import LikeCountClient from "@/features/Like/LikeCountClient";
import { toggleProductFavorite } from "@/features/product/api";
import type { Product } from "@/features/product/type";

type ProductikeCountProps = {
  productId: number;
  product: Product;
};

export function ProductikeCount({ productId, product }: ProductikeCountProps) {
  return (
    <LikeCountClient
      key={productId}
      initialCount={product.favoriteCount}
      initialLiked={product.isLiked}
      mutateFn={(liked) => toggleProductFavorite(productId, liked)}
    />
  );
}
