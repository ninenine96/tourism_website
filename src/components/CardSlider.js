import React from "react";
import "./CardSlider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const CardSlider = () => {
  const slides = [
    {
      image: "https://picsum.photos/300/300",
      title: "Random image",
      description: "Random image is being displayed",
    },
    {
      image: "https://picsum.photos/400/600",
      title: "Random image",
      description: "Random image is being displayed",
    },
    {
      image: "https://picsum.photos/900/1200",
      title: "Random image",
      description: "Random image is being displayed",
    },
    {
      image: "https://picsum.photos/300/300",
      title: "Random image",
      description: "Random image is being displayed",
    },
    {
      image: "https://picsum.photos/400/600",
      title: "Random image",
      description: "Random image is being displayed",
    },
    {
      image: "https://picsum.photos/900/1200",
      title: "Random image",
      description: "Random image is being displayed",
    },
  ];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft -= 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft += 500;
  };
  return (
    <div id="slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
      />
      <div id="slider">
        {slides.map((slide, index) => {
          return (
            <div className="slider-card" key={index}>
              <div
                className="slider-card-image"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="slider-card-title">{slide.title}</p>
              <p className="slider-card-description">{slide.description}</p>
            </div>
          );
        })}
      </div>
      <MdChevronRight
        size={40}
        className="slider-icon right"
        onClick={slideRight}
      />
    </div>
  );
};

export default CardSlider;
