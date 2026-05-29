"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAccessToken } from "@/lib/api/auth";

export default function AuthLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (getAccessToken()) {
      router.replace("/items");
    }
  }, []);

  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4 md:px-0">
      {children}
    </main>
  );
}
