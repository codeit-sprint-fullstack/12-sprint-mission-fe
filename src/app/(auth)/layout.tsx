"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useUser } from "@/hooks/useUser";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace("/items");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return null;
  }

  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4 md:px-0">
      {children}
    </main>
  );
}
