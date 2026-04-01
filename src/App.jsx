import React from "react";
import { Route, Routes } from "react-router-dom";
import GNB from "./components/GNB";
import Footer from "./components/Footer";

import { useWindowSize } from "./hooks/useWindowSize";

import UsedMarket from "./pages/UsedMarket";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Detail from "./pages/Detail";
import ProductsLayout from "./layouts/ProductsLayout";

const App = () => {
  const { windowWidth } = useWindowSize();
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth < 1280;

  return (
    <div>
      <GNB isMobile={isMobile} />
      {/* <UsedMarket isMobile={isMobile} isTablet={isTablet} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ProductsLayout />}>
          <Route
            index
            element={<UsedMarket isMobile={isMobile} isTablet={isTablet} />}
          />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
