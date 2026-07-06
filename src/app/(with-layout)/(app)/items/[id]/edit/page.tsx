import type { Metadata } from "next";

import { ProductEditClient } from "@/app/(with-layout)/(app)/items/[id]/edit/_components/ProductEditClient";
import { getProduct } from "@/lib/api/products.api";
import { fetchOr404 } from "@/utils/fetchOr404";

type ProductEditPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: ProductEditPageProps): Promise<Metadata> {
  const { id } = await params;

  try {
    const { data: product } = await getProduct(Number(id));
    return {
      title: `${product.name} 수정`,
    };
  } catch {
    return {
      title: "상품 수정",
    };
  }
}

export default async function ProductEditPage({
  params,
}: ProductEditPageProps) {
  const { id } = await params;
  const productId = Number(id);

  const product = await fetchOr404(() => getProduct(productId));

  return <ProductEditClient product={product} />;
}
