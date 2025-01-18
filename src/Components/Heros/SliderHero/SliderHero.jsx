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
import SliderHeroImg1 from "../../../assets/Imgs/showsAndMoviesHero.webp";
import SliderHeroImg2 from "../../../assets/Imgs/MoviesPageOpen/Kantara.webp";
import SliderHeroImg3 from "../../../assets/Imgs/drama2cover.webp";
import SliderHeroImg4 from "../../../assets/Imgs/ShowsPageOpen/StrangerThings.webp";

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
  // Slider settings for "react-slick"
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
    ), // Customize dots container
    customPaging: (i) => <div className="dot"></div>,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Slides array
  const slides = [
    {
      src: SliderHeroImg1,
      title: "Avengers : Endgame",
      description:
        "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
    },
    {
      src: SliderHeroImg2,
      title: "Kantara: An Epic Adventure",
      description:
        "When greed paves the way for betrayal, scheming and murder, a young tribal reluctantly dons the traditions of his ancestors to seek justice.",
    },
    {
      src: SliderHeroImg3,
      title: "Joker",
      description:
        "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City.",
    },
    {
      src: SliderHeroImg4,
      title: "Stranger Things",
      description:
        "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    },
  ];

  return (
    <div className="sliderHeroZA xContainer">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="heroSliderItemZA">
            <img
              className="herobackgroundZA"
              src={slide.src}
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
                      <img src={Play} alt="play" />
                      Play Now
                    </>
                  }
                  isFullWidth={true}
                  isSmallerBorderRaduis={false}
                  isBlack={false}
                  paddingType="type4"
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
