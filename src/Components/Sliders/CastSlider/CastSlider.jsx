import "./CastSlider.css";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrow from "../../../assets/Icons/rightarrow.svg";
import LeftArrow from "../../../assets/Icons/leftarrow.svg";

export default function CastSlider({ cast }) {
  const sliderRef = useRef(null);
  const PrevArrow = ({ onClick }) => (
    <div className="tayCustomArrow" onClick={onClick}>
      <img src={LeftArrow} alt="Previous" />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="tayCustomArrow" onClick={onClick}>
      <img src={RightArrow} alt="Next" />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 6 } },
      { breakpoint: 576, settings: { slidesToShow: 4 } },
    ],
  };
  return (
    <div className="castSliderWrapper">
      <div className="castControlsWrapper">
        <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
        <NextArrow onClick={() => sliderRef.current.slickNext()} />
      </div>

      <Slider ref={sliderRef} {...settings}>
        {cast.map((castItem, index) => (
          <div key={index} className="castSliderItem">
            <img className="castImg" src={castItem.src} alt="cast" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
