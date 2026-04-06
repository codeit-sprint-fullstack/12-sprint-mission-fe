import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layouts/Header";
import { Footer } from "./components/layouts/Footer";
import { Landing } from "./pages/Landing";
import { Market } from "./pages/Market";
import { Registration } from "./pages/Registration";
import { ItemDetail } from "./pages/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <Header variant="tab" />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/items" element={<Market />} />
        <Route path="/items/:id" element={<ItemDetail />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
