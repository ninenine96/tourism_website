import React from "react";
import "./CardSlider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const CardSlider = ({ slides }) => {
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
            <Link to={slide.path ? slide.path : "/home"}>
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
            </Link>
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

export const CardSliderHotelsSrinagar = ({ slides }) => {
  const slideLeft = () => {
    const slider = document.getElementById("slider-srinagar");
    slider.scrollLeft -= 500;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider-srinagar");
    slider.scrollLeft += 500;
  };

  return (
    <div id="slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
        // handleScroll={handleScrollLeft}
      />
      <div id="slider-srinagar">
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

export const CardSliderHotelsGulmarg = ({ slides }) => {
  const slideLeft = () => {
    const slider = document.getElementById("slider-gulmarg");
    slider.scrollLeft -= 500;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider-gulmarg");
    slider.scrollLeft += 500;
  };

  return (
    <div id="slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
        // handleScroll={handleScrollLeft}
      />
      <div id="slider-gulmarg">
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
export const CardSliderHotelsPahalgam = ({ slides }) => {
  const slideLeft = () => {
    const slider = document.getElementById("slider-pahalgam");
    slider.scrollLeft -= 500;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider-pahalgam");
    slider.scrollLeft += 500;
  };

  return (
    <div id="slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
        // handleScroll={handleScrollLeft}
      />
      <div id="slider-pahalgam">
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
export const CardSliderHotelsSonmarg = ({ slides }) => {
  const slideLeft = () => {
    const slider = document.getElementById("slider-sonmarg");
    slider.scrollLeft -= 500;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider-sonmarg");
    slider.scrollLeft += 500;
  };

  return (
    <div id="slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
        // handleScroll={handleScrollLeft}
      />
      <div id="slider-sonmarg">
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

export const CardSliderPackagesTop = ({ slides }) => {
  const slideLeft = () => {
    const slider = document.getElementById("slider-packagestop");
    slider.scrollLeft -= 500;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider-packagestop");
    slider.scrollLeft += 500;
  };

  return (
    <div id="slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
        // handleScroll={handleScrollLeft}
      />
      <div id="slider-packagestop">
        {slides.map((slide, index) => {
          return (
            <Link to={slide.path ? slide.path : "/home"}>
              <div className="slider-card" key={index}>
                <div
                  className="slider-card-image"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                  }}
                ></div>

                <p className="slider-card-title">{slide.title}</p>
                <p className="slider-card-description">
                  <b>{slide.price}</b>
                  {slide.description}
                </p>
              </div>
            </Link>
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

export const CardSliderPackagesBottom = ({ slides }) => {
  const slideLeft = () => {
    const slider = document.getElementById("slider-packagesbottom");
    slider.scrollLeft -= 500;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider-packagesbottom");
    slider.scrollLeft += 500;
  };

  return (
    <div id="slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
        // handleScroll={handleScrollLeft}
      />
      <div id="slider-packagesbottom">
        {slides.map((slide, index) => {
          return (
            <Link to={slide.path ? slide.path : "/home"}>
              <div className="slider-card" key={index}>
                <div
                  className="slider-card-image"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                  }}
                ></div>

                <p className="slider-card-title">{slide.title}</p>
                <p className="slider-card-description">
                  <b>{slide.price}</b>
                  {slide.description}
                </p>
              </div>
            </Link>
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
