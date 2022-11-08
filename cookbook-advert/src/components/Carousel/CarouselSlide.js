import React from "react";
import "../Carousel/carouselSlide.css";

export default function CarouselSlide(props) {
  const { id, slideTitle, slideDescription, slideImage } = props;

  return (
    <>
      <div className="madWrapper">
        <h2>{slideTitle}</h2>
        <p>{slideDescription}</p>
        <img src={slideImage} alt={slideTitle} />
      </div>
    </>
  );
}
