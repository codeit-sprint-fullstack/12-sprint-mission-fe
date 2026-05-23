"use client";

import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { getProduct } from "@/lib/ProductService";

const DEFAULT_IMAGE = "/images/default-product.png";

function ProductCard({ product }) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const formattedPrice = Number(product.price || 0).toLocaleString();

  const handlePrefetch = () => {
    queryClient.prefetchQuery({
      queryKey: ["product", product.id],
      queryFn: () => getProduct(product.id),
      staleTime: 1000 * 30,
    });
  };

  return (
    <div
      className="product-card"
      onClick={() => router.push(`/items/${product.id}`)}
      onMouseEnter={handlePrefetch}
      onFocus={handlePrefetch}
    >
      <div className="product-image-box">
        <img
          src={product.images?.[0] || product.image || DEFAULT_IMAGE}
          alt={product.name}
        />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{formattedPrice}원</p>
      </div>
    </div>
  );
}

export default ProductCard;
