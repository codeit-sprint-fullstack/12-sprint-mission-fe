import React from "react";
import PcProducts from "./PcProducts";
import MobileProducts from "./MobileProducts";
import TabletProducts from "./TabletProducts";

const Products = () => {
  return (
    <div>
      <PcProducts />
      {/* <MobileProducts /> */}
      {/* <TabletProducts /> */}
      {/* 조건에 따라 pc, tablet, mobile 로드하기 */}
    </div>
  );
};

export default Products;
