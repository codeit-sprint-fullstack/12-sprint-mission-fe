import Providers from "./providers";
import Header from "../components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
