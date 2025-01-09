import React, { useState, useEffect } from "react";
import Button from "../Buttons/Button";
import "./CTA.css";
import CTAImg from "../../assets/Imgs/CTA.png";
import CTAMobile from "../../assets/Imgs/CTAMobile.png";
import HomeParagraph from "../SharedTitlesAndParagraph/HomeParagraph/HomeParagraph";
import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";

export default function CTA() {
  const [backgroundSrc, setBackgroundSrc] = useState(
    window.innerWidth <= 576 ? CTAMobile : CTAImg
  );

  useEffect(() => {
    const handleResize = () => {
      setBackgroundSrc(window.innerWidth <= 576 ? CTAMobile : CTAImg);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="xContainer customMargin">
      <div className="ctaSA">
        <div className="ctaBackgroundSA ">
          <img src={backgroundSrc} alt="CTA" />
        </div>

        {/* Overlay */}
        <div className="ctaOverlaySA"></div>

        {/* Content Section */}
        <div className="ctaContentSA d-flex flex-column flex-xl-row align-items-center">
          <div className="ctaTextSection d-flex flex-column align-items-center align-items-xl-start text-center text-xl-start">
            <HomeMoviesAndShowsTitle
              title="Start your free trial today!"
              home={true}
              fontSizeType="type1"
              lineHeightType="type1"
            />
            <HomeParagraph
              paragraph="This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe."
            />
          </div>
          {/* Button Component */}
          <Button
            text="Start a Free Trial"
            isFullWidth={false}
            isSmallerBorderRaduis={true}
            isBlack={false}
            paddingType="type2"
          />
        </div>
      </div>
    </div>
  );
}
