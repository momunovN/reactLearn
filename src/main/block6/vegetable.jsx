import React, { useState } from "react";
import "../main.scss";
import "./sect6.scss";

import VegetableJson from "../API/veg.json";
const VegerTable = ({ showAll }) => {
  const dataVegetable = VegetableJson;
  const itemsToShow = showAll ? dataVegetable : dataVegetable.slice(0, 4);


  return (
    <div className="vegetable_-card-inner">
      {itemsToShow.map((vegItem) => (
        <div className="vegetable_-card" key={vegItem.name}>
          <p className="vegetable_card-type">{vegItem.type}</p>
          <img src={vegItem.image} alt="" className="vegetable_categ-img" />
          <div className="vegetable_name-price">
            <h1>{vegItem.name}</h1>
            <div className="vegetable_categ-price">
              <p className="vegetable_orig-price">${vegItem.original_price}</p>
              <p className="vegetable_sale-price">${vegItem.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VegerTable;

// <button className="show-more-btn" onClick={() => setShowMore(!showMore)}>
// {showMore ? "Show Less" : "View All Products"}
// </button>
