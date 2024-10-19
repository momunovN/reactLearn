import React from "react";
import "../main.scss";
import "./block2.scss";

const Block2 = () => {
  return (
    <section className="sect-2">
      <div className="container">
        <div className="sect2-inner">
          <div className="sect2-card">
            <div className="banner-1">
              <span className="banner-title1">Natural!!</span>
              <h1 className="banner-text1">
                Get Garden <br /> Fresh Fruits
              </h1>
            </div>
            <div className="banner-2">
              <span className="banner-title2">Offer!!</span>
              <h1 className="banner-text2">Get 10% off <br /> on Vegetables</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Block2;
