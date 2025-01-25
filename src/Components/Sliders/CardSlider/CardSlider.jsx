import React, { useRef, useState, useEffect } from "react";
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

export default function CardSlider({
  cards,
  slidesToShow,
  page,
  sec,
  top,
  right,
}) {
  const topOptions = {
    type1: { lg: "-174px", md: "-140px" },
    type2: { lg: "-80px", md: "-50px" },
  };

  const selectedTop = topOptions[top] || topOptions.type1;
  const [dynamicTop, setDynamicTop] = useState("");

  const updateTop = () => {
    if (window.innerWidth > 1440) {
      setDynamicTop(selectedTop.lg);
    } else {
      setDynamicTop(selectedTop.md);
    }
  };

  useEffect(() => {
    updateTop();
    window.addEventListener("resize", updateTop);

    return () => window.removeEventListener("resize", updateTop);
  }, [selectedTop]);

  // Ref for the slider instance (used for controlling the slider)
  const sliderRef = useRef(null);

  // State to track the current active slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slick slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: slidesToShow - 1 } },
      { breakpoint: 768, settings: { slidesToShow: slidesToShow - 2 } },
      { breakpoint: 576, settings: { slidesToShow: slidesToShow - 3 } },
    ],
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
    setCurrentSlide(index);
  };

  return (
    <div className={page ==="home"? "sliderContainer": "moviesSliderContainer"}>
      <div
        className="controlsWrapper"
        style={{
          top: dynamicTop,
          right: right ? "2%" : "1%",
        }}
      >
        {" "}
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

      {/* Slider component */}
      <Slider ref={sliderRef} {...settings}>
        {cards.map((CardComponent, index) => {
          const itemClass =
            slidesToShow === 5 && page === "home"
              ? "sliderItemZA"
              : slidesToShow === 5 &&
                page === "moviesAndShows" &&
                sec === "genres"
              ? "multiSliderItemZA"
              : slidesToShow === 4 && sec === "genres"
              ? "genreItemWidthZA"
              : slidesToShow === 5 &&
                page === "moviesAndShows" &&
                sec === "movies"
              ? "movieSliderItemZA"
              : slidesToShow === 4 &&
                page === "moviesAndShows" &&
                sec === "movies"
              ? "mustSliderItemZA"
              : "";

          return (
            <div key={index} className={itemClass}>
              {CardComponent}
            </div>
          );
        })}
      </Slider>

      {/* Custom scrollbar */}
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
