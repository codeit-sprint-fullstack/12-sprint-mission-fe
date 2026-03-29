import { Header } from "./components/layouts/Header/Header";
import { Footer } from "./components/layouts/Footer/Footer";
import { ProductListPage } from "./pages/ProductListPage/ProductListPage";

function App() {
  return (
    <>
      <Header variant="tab" />
      <ProductListPage />
      <Footer />
    </>
  );
}

export default App;
