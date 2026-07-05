import React from "react";
import GNB from "../components/GNB";
import Footer from "../components/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GNB />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
