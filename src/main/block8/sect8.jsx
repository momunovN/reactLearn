import React from "react";
import "./sect.scss";
import "../main.scss";

const Gallery = () => {
  return (
    <section className="sect8-gallery">
      <div className="gallery-inner">
        <div className="gallery-item">
          <div className="gallery-content1">
            <button className="gallery-btn">Organic Juice</button>
          </div>
          <div className="gallery-content2">
            <button className="gallery-btn">Organic Food</button>
          </div>
          <div className="gallery-content3">
            <button className="gallery-btn">Nuts Cookis</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
