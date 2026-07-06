import type { Metadata } from "next";

import NewProductClient from "./_components/NewProductClient";

export const metadata: Metadata = {
  title: "상품 등록",
};

export default function NewProductPage() {
  return <NewProductClient />;
}
