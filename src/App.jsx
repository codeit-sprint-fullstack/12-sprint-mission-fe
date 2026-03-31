import { Route, Routes } from "react-router-dom";
import Footer from "./components/Section/Footer";
import Navbar from "./components/Section/Navbar";
import Market from "./pages/Market";
import MainPage from "./pages/MainPage";
import MainNavbar from "./components/Home/MainNavbar";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

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
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
