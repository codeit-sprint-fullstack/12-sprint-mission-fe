import Providers from "./providers";
import "./globals.css";
import "@/styles/legacy.css";

export const metadata = {
  title: "판다마켓",
  description: "일상의 모든 물건을 거래해 보세요",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
