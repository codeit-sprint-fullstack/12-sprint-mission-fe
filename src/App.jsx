import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContents from "./MainPage";
import Login from "./Login";
import Auth from "./Auth";
import Faq from "./faq";
import Privacy from "./privacy";
import Item from "./Item";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 페이지 경로 */}
        <Route path="/" element={<MainContents />} />
        {/* 로그인 페이지 경로 */}
        <Route path="/login" element={<Login />} />

        <Route path="/auth" element={<Auth />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/item" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
