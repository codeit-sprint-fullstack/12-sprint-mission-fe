import type { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <main className="flex-1 w-full max-w-[75rem] mx-auto px-4 md:px-6 pt-6 pb-[6rem] md:pb-[9rem] lg:pb-[12rem]">
      {children}
    </main>
  );
}
