import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata = {
  title: {
    default: "판다마켓",
    template: "%s | 판다마켓",
  },
  description: "일상의 모든 물건을 거래해보세요. 가장 쉬운 중고 거래 플랫폼",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${pretendard.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 w-full max-w-[75rem] mx-auto px-4 md:px-6 pt-6 pb-[6rem] md:pb-[9rem] lg:pb-[12rem]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
