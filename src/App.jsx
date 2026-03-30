import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Market from "./pages/Market";

function App() {
  return (
    <div>
      <Navbar />
      <Market />
      <Footer />
    </div>
  );
}

export default App;
