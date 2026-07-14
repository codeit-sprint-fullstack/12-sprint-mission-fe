import type { Metadata } from "next";

import { NewProductClient } from "@/app/(with-layout)/(app)/items/new/_components/NewProductClient";

export const metadata: Metadata = {
  title: "상품 등록",
};

export default function NewProductPage() {
  return <NewProductClient />;
}
