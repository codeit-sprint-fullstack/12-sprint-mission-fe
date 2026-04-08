import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContents from "./MainPage";
import Login from "./Login";
import Auth from "./Auth";
import Faq from "./Faq";
import Privacy from "./Privacy";
import Item from "./Item";

import Forum from "./Forum";
import Registration from "./Registration";
import ItemDetail from "./ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContents />} />
        <Route path="/items" element={<Item />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/items/:id" element={<ItemDetail />} />

        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<Privacy />} />

        <Route path="Forum" element={<Forum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
