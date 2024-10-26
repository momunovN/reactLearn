import React from "react";
import "./sect7.scss";
import "../main.scss"
import background from "../images/back7.svg";

const SectiotEco = () => {
  return (
    <section className="sect7">
      <div className="container">
        <div className="sect-cont-inner">
          <div className="sect7_-inner-item">
            <div className="sect7-header">
              <p className="sect7-header-p">Eco Friendly</p>
              <h1 className="sect7-header-h1">
                Econis is a Friendly <br />
                Organic Store
              </h1>
            </div>
            <div className="sect7-points">
              <div className="points">
                <h1>Start with Our Company First</h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium <br /> doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
              <div className="points">
                <h1>Learn How to Grow Yourself</h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium <br /> doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
              <div className="points">
                <h1>Farming Strategies of Today</h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium <br /> doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectiotEco;
