"use client";

import { useRouter } from "next/navigation";

const DEFAULT_IMAGE = "/images/default-product.png";

function ProductCard({ product }) {
  const router = useRouter();
  const formattedPrice = product.price?.toLocaleString() ?? "0";

  return (
    <div
      className="product-card"
      onClick={() => router.push(`/items/${product.id}`)}
    >
      <div className="product-image-box">
        <img src={DEFAULT_IMAGE} alt={product.name} />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{formattedPrice}원</p>
      </div>
    </div>
  );
}

export default ProductCard;
