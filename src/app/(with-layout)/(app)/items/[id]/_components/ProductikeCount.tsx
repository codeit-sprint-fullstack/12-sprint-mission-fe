"use client";

import LikeCountClient from "@/components/ui/LikeCountClient";
import { toggleProductFavorite } from "@/lib/api/products.api";
import type { Product } from "@/types/product";

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
