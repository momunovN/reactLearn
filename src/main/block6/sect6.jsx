import React, { useState } from "react";
import VegerTable from "./vegetable";
import "./sect6.scss"
import "../main.scss"
import Aarrow from "../images/Aerrow.svg"


const SectVeget = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const handleViewAllClick = () => {
    setShowAllProducts(!showAllProducts);
  };

  return (
    <section className="section6">
      <div className="container">
        <div className="cont_inner-item6">
          <div className="sect6_-title_bnt">
            <div className="sect6-title">
                <p>Offer</p>
                <h1>We Offer Organic For You</h1>
            </div>
            <button className="sect6_-btn" onClick={handleViewAllClick}>
              

              {showAllProducts ? "Show Less" : "View All Products"}
              <img src={Aarrow} alt="" />
            </button>
          </div>

          <VegerTable showAll={showAllProducts} /> 
        </div>
      </div>
    </section>
  );
};

export default SectVeget;