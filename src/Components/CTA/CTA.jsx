import Button from "../Buttons/Button";
import "./CTA.css";
import HomeParagraph from "../SharedTitlesAndParagraph/HomeParagraph/HomeParagraph";
import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";

export default function CTA() {
  return (
    <div className="xContainer customMargin">
      <div className="ctaSA">
        {/* Content Section */}
        <div className="ctaContentSA d-flex flex-column flex-xl-row align-items-center">
          <div className="ctaTextSection d-flex flex-column align-items-center align-items-xl-start text-center text-xl-start">
            <div className="d-none d-sm-block">
            <HomeMoviesAndShowsTitle
              title= "Start your free trial today!"
              home={true}
              fontSizeType="type1"
              lineHeightType="type1"
            />
            </div>
            <div className="d-sm-none">
            <HomeMoviesAndShowsTitle
              title={
                <>
                  Start your free trial
                  <br />
                  today!
                </>
              }
              home={true}
              fontSizeType="type1"
              lineHeightType="type1"
            />
            </div>

            <HomeParagraph
              paragraph="This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe."
            />
          </div>
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
