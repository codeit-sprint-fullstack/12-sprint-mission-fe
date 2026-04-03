import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Items from "./routes/Items.jsx";
import Home from "./routes/Home.jsx";

const App = () => {
  return (
    <div>
      <Header />

      <main id="wrapper">
        <div id="container">
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
