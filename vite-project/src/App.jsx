import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./reset.css";
import Market from "./pages/Market";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Market />} />
      </Routes>
    </>
  );
}

export default App;
