import React from "react";
import "../main.scss";
import "./block3.scss";

import Sect3Img from "../images/sect3.svg";
import Point1 from "../images/point1.svg";
import Point2 from "../images/point2.svg";
import Arr from "../images/Aerrow.svg";

const Block3 = () => {
  return (
    <section className="sect3">
      <div className="container">
        <div className="sect3-inner">
          <img src={Sect3Img} alt="" className="sect3-img" />
          <div className="sect3-discr">
            <div className="discr-title1">
              <span className="discr-title-span">About Us</span>
              <h1>
                We Believe in Working <br />
                Accredited Farmers
              </h1>

              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
            </div>

            <div className="discr-title3">
              <div className="points-1">
                <img src={Point1} alt="" />
                <div className="points-content">
                  <h1 className="point-title">Organic Foods Only</h1>
                  <p className="point-text">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </div>
              </div>

              <div className="points-1">
                <img src={Point2} alt="" />
                <div className="points-content">
                  <h1 className="point-title">Quality Standards</h1>
                  <p className="point-text">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
            <button className="discr-btn">
              Shop Now
              <img src={Arr} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Block3;
