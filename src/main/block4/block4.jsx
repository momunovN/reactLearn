import React from "react";

import "./block4.scss";
import "../main.scss";
import Categori from "./categories";

import Aerrow from "../images/Aerrow.svg"


const Products = () => {
  return (
    <section className="block-4">
      <div className="container">
        <div className="block4-inner">
          <div className="block4-title-text">
            <p className="block4-title">Categories</p>
            <h1 className="block4-text">Our Products</h1>
          </div>

          <Categori />

          <button className="categ-btn">
            Load More 
            <img src={Aerrow} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
