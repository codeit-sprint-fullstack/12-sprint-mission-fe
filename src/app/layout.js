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
  title: "판다마켓",
  description: "중고 시장",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${pretendard.variable} antialiased`}>
      <body>
        <Header />
        <main className="flex-grow min-h-[calc(100vh-10rem-4.375rem)]">
          {children}
        </main>{" "}
        <Footer />
      </body>
    </html>
  );
}
