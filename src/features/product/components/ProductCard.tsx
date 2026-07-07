import Image from "next/image";
import Link from "next/link";

import { FallbackImage } from "@/common/components/ui/FallbackImage";
import type { ProductSummary } from "@/features/product/type";
import { getImageUrl } from "@/common/utils/getImageUrl";

type ProductCardProps = {
  product: ProductSummary;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/items/${product.id}`} className="block w-full">
      <div className="flex flex-col gap-[0.62rem] lg:gap-4">
        <div className="relative w-full aspect-square overflow-hidden rounded-[1.03675rem]">
          <FallbackImage
            src={getImageUrl(product.imageUrls[0])}
            fallbackSrc="/images/product-default-img.svg"
            alt={`${product.name} 사진`}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-[0.38rem] w-full">
          <h3 className="text-md font-medium text-gray-800">{product.name}</h3>

          <strong className="text-lg font-bold text-gray-800">
            {product.price}원
          </strong>

          <div className="flex items-center gap-[0.25rem]">
            <Image
              src="/icons/ic-heart.svg"
              width={16}
              height={16}
              alt=""
              aria-hidden="true"
            />
            <span className="text-xs font-medium text-gray-600">
              {product.favoriteCount}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
