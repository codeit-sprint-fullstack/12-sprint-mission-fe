import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function WithLayout({ children }) {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
}
