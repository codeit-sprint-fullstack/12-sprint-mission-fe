import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

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
      <body>
        <Header />
        <main className="w-full max-w-[75rem] mx-auto px-4 md:px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
