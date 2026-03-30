import { Route, Routes } from "react-router-dom";
import Footer from "./components/Section/Footer";
import Navbar from "./components/Section/Navbar";
import Market from "./pages/Market";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <MainPage />
            <Footer />
          </>
        }
      />
      <Route
        path="/market"
        element={
          <>
            <Navbar />
            <Market />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
