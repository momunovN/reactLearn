import React from "react";
import Veget from "../API/veg.json";
import Aarrow from "../images/Aerrow.svg"


const SectVeget = () => {
  return (
    <section>
      <div className="container">
        <div className="cont_inner-item6">
          <div className="sect6_-title_bnt">
            <div className="sect6-title">
                <p>Offer</p>
                <h1>We Offer Organic For You</h1>
            </div>
            <button>
              View All Product
              <img src={Aarrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectVeget;
