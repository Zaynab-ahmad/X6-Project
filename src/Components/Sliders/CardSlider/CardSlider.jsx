import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import "./CardSlider.css"; 
import RightArrow from "../../../assets/Icons/rightarrow.svg"; 
import LeftArrow from "../../../assets/Icons/leftarrow.svg"; 

// Custom previous arrow component
function PrevArrow({ onClick }) {
  return (
    <div className="customArrow" onClick={onClick}>
      <img src={LeftArrow} alt="Previous" />
    </div>
  );
}

// Custom next arrow component
function NextArrow({ onClick }) {
  return (
    <div className="customArrow" onClick={onClick}>
      <img src={RightArrow} alt="Next" />
    </div>
  );
}

export default function CardSlider({ cards, slidesToShow }) {
  // Ref for the slider container 
  const sliderContainerRef = useRef(null);

  // Ref for the slider instance (used for controlling the slider)
  const sliderRef = useRef(null);

  // State to track the current active slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slick slider settings configuration
  const settings = {
    infinite: true, // Allows infinite looping of slides
    speed: 500, // Transition speed in milliseconds
    slidesToShow: slidesToShow, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    arrows: false, // Disable default slick arrows (custom arrows are used)
    beforeChange: (_, next) => setCurrentSlide(next), // Updates current slide state before changing
    responsive: [
      // Responsive breakpoints for adapting slider settings
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
          slidesToShow: slidesToShow - 3, 
        },
      },
    ],
  };

  // Function to navigate to a specific slide
  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index); // Use the slick slider method to navigate
    setCurrentSlide(index); // Update the current slide state
  };

  return (
    <div className="sliderContainer" ref={sliderContainerRef}>
      <div className="controlsWrapper">
        <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
        {/* Custom pagination dots */}
        <div className="customPagination">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`paginationDot ${
                index === currentSlide ? "active" : "" 
              }`}
              onClick={() => goToSlide(index)} // Navigate to corresponding slide on click
            ></div>
          ))}
        </div>

        <NextArrow onClick={() => sliderRef.current.slickNext()} />
      </div>

      {/* Slider component */}
      <Slider ref={sliderRef} {...settings}>
        {cards.map((CardComponent, index) => (
          <div
            key={index}
            className={`sliderItemZA ${
              slidesToShow === 4 ? "itemCustomWidthZA" : "" // Apply custom width styling for specific slidesToShow
            }`}
          >
            {CardComponent} 
          </div>
        ))}
      </Slider>

      {/* Custom scrollbar for additional navigation */}
      <div className="customScrollbar">
        {cards.map((_, index) => (
          <div
            key={index}
            className="scrollbarSegment"
            onClick={() => goToSlide(index)} // Navigate to corresponding slide on click
            style={{
              width: `calc(100% / ${cards.length})`, // Each segment takes up equal width
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
