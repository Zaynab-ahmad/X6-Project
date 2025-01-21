import './RevSlider.css';
import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrow from "../../../assets/Icons/leftarrow.svg";
import LeftArrow from "../../../assets/Icons/rightarrow.svg";
import Slider from "react-slick";

export default function RevSlider({ CardsRev, slidesToShow }) {
    // Previous Arrow
    function PrevArrow({ onClick }) {
      return (
        <div className="tayCustomArrow" onClick={onClick}>
          <img src={RightArrow} alt="Previous" />
        </div>
      );
    }
    
    // Next Arrow
    function NextArrow({ onClick }) {
      return (
        <div className="tayCustomArrow" onClick={onClick}>
          <img src={LeftArrow} alt="Next" />
        </div>
      );
    }   
    
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
        { breakpoint: 992, settings: { slidesToShow: Math.max(slidesToShow - 1, 1) } },
        { breakpoint: 768, settings: { slidesToShow: Math.max(slidesToShow - 2, 1) } },
        { breakpoint: 576, settings: {slidesToShow: Math.max(slidesToShow-1, 1)}}
      ]
    };
  
    const goToSlide = (index) => {
      sliderRef.current.slickGoTo(index);
      setCurrentSlide(index);
    };
  
    return (
      <>
      <div className="taySliderContainer" ref={sliderContainerRef}>
        <Slider ref={sliderRef} {...settings}>
          {CardsRev.map((CardComponent, index) => (
            <div key={index} className={`sliderItemZA ${slidesToShow === 2 ? "itemCustomWidthZA" : ""}`}>
              {CardComponent}
            </div>
          ))}
        </Slider>

        <div className="tayControlsWrapper">
          <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <div className="tayCustomPagination">
            {CardsRev.map((_, index) => (
              <div
                key={index}
                className={`paginationDot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>
          <NextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>

        </>


      
    );
}