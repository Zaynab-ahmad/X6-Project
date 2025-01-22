import './RevSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrow from "../../../assets/Icons/rightarrowgray.svg";
import LeftArrow from "../../../assets/Icons/leftarrowgray.svg";
import Slider from "react-slick";

export default function RevSlider({ CardsRev }) {
  function PrevArrow({ onClick }) {
    return (
      <div className="tayCustomArrow tayLeftHeroArrow" onClick={onClick}>
        <img src={LeftArrow} alt="Previous" />
      </div>
    );
  }

  function NextArrow({ onClick }) {
    return (
      <div className="tayCustomArrow tayRightHeroArrow" onClick={onClick}>
        <img src={RightArrow} alt="Next" />
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendDots: (dots) => (
      <div>
        <ul className="tayCustomPagination">{dots}</ul>
      </div>
    ),
    customPaging: (i) => <div className="paginationDot"></div>,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="taySliderContainer">
      <Slider {...settings}>
        {CardsRev.map((CardComponent, index) => (
          <div key={index} className="sliderItemZA">
            {CardComponent}
          </div>
        ))}
      </Slider>
    </div>
  );
}
