import React from "react";
import "../main.scss";
import "./block-1.scss";

import aerrow from "../images/Aerrow.svg";

const Block1 = () => {
  return (

    
    <section className="selectino-1">
      <div className="container">
        <div className="sect-inner">
          <div className="title">
            <h1 className="title-1">100% Natural Food</h1>
            <h1 className="title-2">
              Choose the best <br /> healthier way <br /> of life
            </h1>
          </div>
          <div className="btn">
            <button className="title-btn">
              Explore Now
              <img src={aerrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Block1;
