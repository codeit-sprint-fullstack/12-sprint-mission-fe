import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layouts/Header/Header";
import { Footer } from "./components/layouts/Footer/Footer";
import { Landing } from "./pages/Landing/Landing";
import { ProductListPage } from "./pages/ProductListPage/ProductListPage";
import { Registration } from "./pages/Registration/Registration";

function App() {
  return (
    <BrowserRouter>
      <Header variant="tab" />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/items" element={<ProductListPage />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
