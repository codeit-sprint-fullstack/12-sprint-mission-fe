import React from "react";
import GNB from "./components/GNB";
import Footer from "./components/Footer";
import UsedMarket from "./components/UsedMarket";
import { useWindowSize } from "./hooks/useWindowSize";

const App = () => {
  const { windowWidth } = useWindowSize();
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth < 1280;

  return (
    <div>
      <GNB isMobile={isMobile} />
      <UsedMarket isMobile={isMobile} isTablet={isTablet} />
      <Footer />
    </div>
  );
};

export default App;
