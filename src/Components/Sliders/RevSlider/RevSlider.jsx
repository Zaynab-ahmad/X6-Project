import { useRef, useState } from "react";
import "./RevSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrow from "../../../assets/Icons/rightarrowgray.svg";
import LeftArrow from "../../../assets/Icons/leftarrowgray.svg";
import Slider from "react-slick";

export default function RevSlider({ CardsRev }) {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
    setCurrentSlide(index);
  };

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
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{ breakpoint: 1200, settings: { slidesToShow: 1 } }],
    afterChange: (current) => {
      setCurrentSlide(current);
    },
  };

  return (
    <div className="taySliderContainer">
      <Slider ref={sliderRef} {...settings}>
        {CardsRev.map((CardComponent, index) => (
          <div key={index} className="taySliderItem">
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
              className={`tayPaginationDot ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
        <NextArrow onClick={() => sliderRef.current.slickNext()} />
      </div>
    </div>
  );
}
