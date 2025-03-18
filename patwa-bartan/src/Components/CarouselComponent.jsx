import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Css-page/CarouselComponent.css';
// 1200x600 px
const CarouselComponent = () => {
  return (
    <Carousel className="custom-carousel" fade interval={2000} controls={true} indicators={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dl5htbjf8/image/upload/v1741977347/patwa-banner_2_cccht1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dl5htbjf8/image/upload/v1741977347/patwa-banner_piudmf.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNleGLvTIPBEoE5LLrSXLbdNIXIYQgHCPvhQ&s"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
