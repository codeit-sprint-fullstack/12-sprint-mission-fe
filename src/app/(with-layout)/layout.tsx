import type { ReactNode } from "react";

import { Footer } from "@/common/components/layout/Footer";
import { Header } from "@/common/components/layout/Header";

type WithLayoutProps = {
  children: ReactNode;
};

export default function WithLayout({ children }: WithLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
