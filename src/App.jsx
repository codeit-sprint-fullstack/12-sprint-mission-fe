import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import MarketPage from "./pages/MarketPage";
import "./styles/global.css";

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <MarketPage />
      <Footer />
    </div>
  );
}
