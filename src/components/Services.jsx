import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
        showIndicators={false}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img1} alt="Item2" />
          <p className="legend">Web Developer</p>
        </div>
        <div>
          <img src={img1} alt="Item3" />
          <p className="legend">Full Stack</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
