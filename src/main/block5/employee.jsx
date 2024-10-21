import React, { useEffect, useState } from "react";
import "./block5.scss"
import employee from "../API/employee.json";

const Slide = () => {
  const DataEmployee = employee;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % employee.length);
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
            <img src={slide.avatar} alt={`Слайд ${index + 1}`} />

            <p>{slide.review}</p>
            <h1>{slide.name}</h1>

          </div>
        ))}
      </div>
    </>
  );
};

export default Slide;
