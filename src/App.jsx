import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContents from "./MainPage";
import Login from "./Login";
import Auth from "./Auth";
import Faq from "./faq";
import Privacy from "./privacy";
import Item from "./Item";

import Forum from "./Forum";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContents />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/item" element={<Item />} />
        <Route path="Forum" element={<Forum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
