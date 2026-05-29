import Image from "next/image";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { getProduct } from "@/lib/api/products";
import BackToListButton from "@/components/ui/BackToListButton";
import FallbackImage from "@/components/ui/FallbackImage";
import LikeCountClient from "./_components/LikeCountClient";
import ProductKebabMenu from "./_components/ProductKebabMenu";
import CommentSection from "./_components/CommentSection";

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const product = await getProduct(id);
    return { title: product.name };
  } catch {
    return { title: "상품을 찾을 수 없어요" };
  }
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  let product;
  try {
    product = await getProduct(id);
  } catch (err) {
    if (err.status === 404) {
      notFound();
    }
    throw err;
  }

  return (
    <section className="flex flex-col w-full">
      <div className="mb-6 pb-6 md:mb-10 md:pb-8 lg:pb-10 border-b border-gray-200">
        <div className="flex flex-col md:flex-row gap-4 lg:gap-6 w-full">
          <div className="relative w-full aspect-square overflow-hidden rounded-[1.78675rem]">
            <FallbackImage
              src={product.images[0]}
              fallbackSrc="/images/product-default-img.svg"
              alt={`${product.name} 사진`}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between mb-4 lg:mb-6 pb-4 border-b border-gray-200">
              <div>
                <h2 className="mb-2 lg:mb-4 text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
                  {product.name}
                </h2>
                <strong className="text-2xl md:text-3xl lg:text-[2.5rem] font-semibold lg:leading-normal">
                  {product.price}원
                </strong>
              </div>

              <ProductKebabMenu productId={id} ownerId={product.ownerId} />
            </div>

            <div className="mb-6">
              <h3 className="mb-2 lg:mb-4 text-lg font-semibold text-gray-600">
                상품 소개
              </h3>
              <p className="lg:text-lg font-regular text-gray-800">
                {product.description}
              </p>
            </div>

            <div className="mb-10 lg:mb-0">
              <h3 className="mb-2 lg:mb-4 text-lg font-semibold text-gray-600">
                상품 태그
              </h3>
              <div className="flex flex-wrap gap-1">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-[0.38rem] text-lg font-regular text-gray-800 rounded-[1.625rem] bg-gray-100"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between lg:mt-auto">
              <div className="flex items-center gap-4">
                <Image
                  src="/icons/ic-profile.svg"
                  width={40}
                  height={40}
                  alt="프로필 사진"
                />
                <div className="flex flex-col text-md font-medium">
                  <span className="text-gray-600">{product.ownerNickname}</span>
                  <time dateTime={product.createdAt} className="text-gray-400">
                    {format(new Date(product.createdAt), "yyyy. MM. dd")}
                  </time>
                </div>
              </div>

              <div className="pl-6 border-l border-gray-200">
                <LikeCountClient
                  productId={id}
                  initialCount={product.favoriteCount}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CommentSection productId={id} />

      <BackToListButton href="/items" />
    </section>
  );
}
