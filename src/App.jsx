import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProductListPage } from "./pages/ProductListPage";

function App() {
  return (
    <>
      <Header />
      <ProductListPage />
      <Footer />
    </>
  );
}

export default App;
