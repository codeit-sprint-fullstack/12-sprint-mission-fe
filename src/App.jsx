import { Route, Routes } from "react-router-dom";
import Footer from "./components/Section/Footer";
import Navbar from "./components/Section/Navbar";
import Market from "./pages/MarketPage";
import MainPage from "./pages/MainPage";
import MainNavbar from "./components/Home/MainNavbar";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ItemsPage from "./pages/ItemsPage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <MainNavbar />
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
      <Route path="/items" element={<ItemsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  );
}

export default App;
