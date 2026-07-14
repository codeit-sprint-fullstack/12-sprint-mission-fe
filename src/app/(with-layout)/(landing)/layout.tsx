import type { ReactNode } from "react";

type LandingLayoutProps = {
  children: ReactNode;
};

export default function LandingLayout({ children }: LandingLayoutProps) {
  return <main className="flex-1 w-full">{children}</main>;
}
