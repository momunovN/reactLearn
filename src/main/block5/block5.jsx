import React from "react";
import Slide from "./employee";
import "./block5.scss";

const counter = () => {
  return (
    <section className="sect5">
      <div className="container">
        <div className="sect5-inner">
          <div className="sect5-title">
            <p className="sect5_title-p">Testimonial</p>
            <h1 className="sect5_descr-h1">What Our Customer Saying?</h1>
          </div>
          <Slide />

          <div className="line_sect5"></div>

          <div className="rating_sect5">
            <div className="circle">
              <h1>100%</h1>
              <p>Organic</p>
            </div>
            <div className="circle">
              <h1>285</h1>
              <p>Active Product</p>
            </div>
            <div className="circle">
              <h1>350+</h1>
              <p>Organic Orchads</p>
            </div>
            <div className="circle">
              <h1>25+</h1>
              <p>Years of Farming</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default counter;
