import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./reset.css";
import Rending from "./pages/Rending";
import Items from "./pages/Items";
import Market from "./pages/Market";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Rending />} />
        <Route path="/items" element={<Items />} />
        {/* <Route path="/items" element={<  Market />} />  */}
      </Routes>
    </>
  );
}

export default App;
