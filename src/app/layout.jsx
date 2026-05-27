import localFont from "next/font/local";
import "./globals.css";
import GNB from "./components/GNB";
import Footer from "./components/Footer";
import Providers from "./providers";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "400 700",
  variable: "--font-pretendard",
});

export const metadata = {
  title: "판다마켓",
  description: "중고거래를 위한 커뮤니티 플랫폼",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${pretendard.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
