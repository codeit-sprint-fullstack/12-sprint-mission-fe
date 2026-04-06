import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Items from "./pages/Items/Items";
import Faq from "./pages/Faq/Faq";
import Privacy from "./pages/Privacy/Privacy";
import Registration from "./pages/Registration/Registration";
import ItemDetail from "./pages/ItemDetail/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/items" element={<Items />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/items/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
