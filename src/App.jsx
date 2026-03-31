import { useState } from "react";
import Footer from "../src/components/Section/Footer";
import Navbar from "../src/components/Section/Navbar";
import Market from "../src/pages/Market";

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
