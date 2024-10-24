import React, { useEffect, useState } from "react";
import "./block5.scss";
import employee from "../API/employee.json";

const Slide = () => {
  const DataEmployee = employee;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % DataEmployee.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="slider">
        {DataEmployee.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? "active" : ""}`}
          >
            <div className="slide_inner-item">
              <div className="slider_images">
                <img
                  src={slide.avatar}
                  alt={`Слайд ${index + 1}`}
                  className="slide_profile-img"
                />
              </div>

               
              <p className="profile_descrip">{slide.review}</p>

              <div className="name_user">
                <h1 className="profile_name">{slide.name}</h1>
                <p>{slide.user}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Slide;
