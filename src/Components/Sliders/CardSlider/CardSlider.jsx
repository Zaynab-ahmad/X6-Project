import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css";
import RightArrow from "../../../assets/Icons/rightarrow.svg";
import LeftArrow from "../../../assets/Icons/leftarrow.svg";

function PrevArrow({ onClick }) {
  return (
    <div className="customArrow" onClick={onClick}>
      <img src={LeftArrow} alt="Previous" />
    </div>
  );
}

function NextArrow({ onClick }) {
  return (
    <div className="customArrow" onClick={onClick}>
      <img src={RightArrow} alt="Next" />
    </div>
  );
}

export default function CardSlider({ cards, slidesToShow }) {
  const sliderContainerRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: slidesToShow - 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: slidesToShow - 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: slidesToShow -3,
        },
      },
      
    ],
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
    setCurrentSlide(index);
  };

  return (
    <div className="sliderContainer" ref={sliderContainerRef}>
      <div className="controlsWrapper">
        <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
        <div className="customPagination">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`paginationDot ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
        <NextArrow onClick={() => sliderRef.current.slickNext()} />
      </div>

      <Slider ref={sliderRef} {...settings}>
        {cards.map((CardComponent, index) => (
          <div key={index} 
               className={`sliderItemZA ${slidesToShow === 4 ? "itemCustomWidthZA" : ""}`}>
            {CardComponent}
          </div>
        ))}
      </Slider>

      <div className="customScrollbar">
  {cards.map((_, index) => (
    <div
      key={index}
      className="scrollbarSegment"
      onClick={() => goToSlide(index)}
      style={{
        width: `calc(100% / ${cards.length})`, 
        cursor: "pointer",
        background:
          index === currentSlide
            ? "var(--primary-color-red)"
            : "transparent",
      }}
    ></div>
  ))}
</div>

    </div>
  );
}
