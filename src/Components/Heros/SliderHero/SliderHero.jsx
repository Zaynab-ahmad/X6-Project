import "./SliderHero.css";
import HomeMoviesAndShowsTitle from "../../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";
import HomeParagraph from "../../SharedTitlesAndParagraph/HomeParagraph/HomeParagraph";
import Button from "../../Buttons/Button";
import Play from "../../../assets/Icons/playicon1.svg";
import Plus from "../../../assets/Icons/plus.svg";
import Like from "../../../assets/Icons/like.svg";
import Volume from "../../../assets/Icons/volume.svg";
import Slider from "react-slick";
import RightArrow from "../../../assets/Icons/rightarrow.svg";
import LeftArrow from "../../../assets/Icons/leftarrow.svg";
import { AllMovies } from "../../../Data/data";
import { useNavigate } from "react-router-dom";

function PrevArrow({ onClick }) {
  return (
    <div className="customHeroArrowZA leftHeroArrowZA" onClick={onClick}>
      <img src={LeftArrow} alt="Previous" />
    </div>
  );
}

function NextArrow({ onClick }) {
  return (
    <div className="customHeroArrowZA rightHeroArrowZA" onClick={onClick}>
      <img src={RightArrow} alt="Next" />
    </div>
  );
}

export default function SliderHero() {
  const navigate = useNavigate();

  const filteredSlides = AllMovies.filter((movie) =>
    [19, 29, 55, 61].includes(movie.id)
  );

  const handleClick = (genre, id) => {
    navigate(`/pageopen/${genre}/${id}`);
  };

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendDots: (dots) => (
      <div style={{ marginTop: "20px" }}>
        <ul className="heroCustomDots">{dots}</ul>
      </div>
    ),
    customPaging: (i) => <div className="dot"></div>,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="sliderHeroZA xContainer">
      <Slider {...settings}>
        {filteredSlides.map((slide, index) => (
          <div key={index} className="heroSliderItemZA">
            <img
              className="herobackgroundZA"
              src={slide.coverSrc}
              alt={slide.title}
            />
            <div className="sliderHeroOverlay"></div>
            <div className="sliderHeroContent">
              <div className="sliderHeroTZA">
                <HomeMoviesAndShowsTitle
                  title={slide.title}
                  titlePadding="else"
                  fontSizeType="type2"
                  lineHeightType="type2"
                />
                <div className="d-lg-block d-none">
                  <HomeParagraph paragraph={slide.description} />
                </div>
              </div>
              <div className="sliderHeroButtons d-flex flex-column flex-lg-row align-items-center justify-content-center">
                <Button
                  text={
                    <>
                      <img className="playImg" src={Play} alt="play" />
                      Play Now
                    </>
                  }
                  isFullWidth={true}
                  isSmallerBorderRaduis={false}
                  isBlack={false}
                  paddingType="type4"
                  onClick={() => handleClick("movies", slide.id)} 
                />
                <div className="SliderHeroIconsGroupzA d-flex">
                  <button className="sliderHeroIconsZA">
                    <img src={Plus} alt="Add to Watchlist" />
                  </button>
                  <button className="sliderHeroIconsZA">
                    <img src={Like} alt="Like" />
                  </button>
                  <button className="sliderHeroIconsZA">
                    <img src={Volume} alt="Volume" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

