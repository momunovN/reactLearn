import React from "react";
import Header from "../main/header";
import Block1 from "../main/block1/block-1";
import Block2 from "../main/block2/block2";
import Block3 from "../main/block3/block3";
import Products from "../main/block4/block4";
import Counter from "../main/block5/block5";
import SectVeget from "../main/block6/sect6";
const IndexMain = () => {
  return (
    <>
      <Header />
      <Block1 />
      <Block2 />
      <Block3/>
      <Products/>
      <Counter/>
      <SectVeget/>
    </>
  );
};

export default IndexMain;
