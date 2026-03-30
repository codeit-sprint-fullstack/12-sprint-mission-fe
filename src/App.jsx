import React from "react";
import GNB from "./components/GNB";
import Footer from "./components/Footer";
import UsedMarket from "./components/UsedMarket";
import { useWindowSize } from "./hooks/useWindowSize";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

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
        <Route
          path="/items"
          element={<UsedMarket isMobile={isMobile} isTablet={isTablet} />}
        />
        <Route path="/registration" />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
