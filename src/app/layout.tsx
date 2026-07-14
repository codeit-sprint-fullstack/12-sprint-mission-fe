import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

import Providers from "./providers";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "판다마켓",
    template: "%s | 판다마켓",
  },
  description: "일상의 모든 물건을 거래해보세요. 가장 쉬운 중고 거래 플랫폼",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" className={`${pretendard.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Providers>
          {children}

          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#333",
                color: "#fff",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
