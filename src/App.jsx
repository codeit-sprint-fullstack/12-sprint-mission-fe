import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layouts/Header/Header";
import { Footer } from "./components/layouts/Footer/Footer";
import { Landing } from "./pages/Landing";
import { Market } from "./pages/Market/Market";
import { Registration } from "./pages/Registration/Registration";

function App() {
  return (
    <BrowserRouter>
      <Header variant="tab" />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/items" element={<Market />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
