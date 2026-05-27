import React from "react";
import GNB from "@/app/components/GNB";
import Footer from "@/app/components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <GNB />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
