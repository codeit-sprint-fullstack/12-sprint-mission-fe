import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

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
