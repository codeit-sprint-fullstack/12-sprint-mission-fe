import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  const hasImage = Boolean(product?.images[0]);
  const imageSrc = hasImage
    ? product.images[0]
    : "/images/product-default-image.png";

  return (
    <Link href={`/items/${product.id}`} className="block w-full">
      <div className="flex flex-col gap-[0.62rem] lg:gap-4">
        <div className="relative w-full aspect-square overflow-hidden rounded-[1.03675rem]">
          <Image
            src={imageSrc}
            alt={hasImage ? `${product.name}의 썸네일` : ""}
            fill
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
