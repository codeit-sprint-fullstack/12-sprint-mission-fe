import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Items from "./routes/Items/Items.jsx";
import Home from "./routes/Home/Home.jsx";

const App = () => {
  const location = useLocation();
  const curPathname = location.pathname;

  const pathClassMap = {
    "/": "home",
    "/items": "items",
  };
  const pageClass = pathClassMap[curPathname] ?? "";

  return (
    <div>
      <Header />

      <main id="wrapper">
        <div id="container" className={pageClass}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
