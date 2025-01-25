import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowsSection from "../../Components/ShowsSection/ShowsSection";
import MoviesSection from "../../Components/MoviesSection/MoviesSection";
import "./MoviesAndShows.css";
import SliderHero from "../../Components/Heros/SliderHero/SliderHero";

export default function MoviesAndShows() {
  const [activeSection, setActiveSection] = useState("movies");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 576);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { text } = useParams();

  return (
    <>
      <SliderHero />
      <div>
        {/* Toggle Buttons for Small Screens */}
        {isSmallScreen && (
          <div className="xContainer">
            <div className="customToggleContainer">
              <button
                className={`customToggleButton ${
                  activeSection === "movies" ? "active" : ""
                }`}
                onClick={() => setActiveSection("movies")}
              >
                Movies
              </button>
              <button
                className={`customToggleButton ${
                  activeSection === "shows" ? "active" : ""
                }`}
                onClick={() => setActiveSection("shows")}
              >
                Shows
              </button>
            </div>
          </div>
        )}

        {/* Display Both Sections for Larger Screens */}
        <div>
          {!isSmallScreen && (
            <>
              <MoviesSection text={text} />
              <ShowsSection text={text} />
            </>
          )}

          {/* Display One Section for Small Screens */}
          {isSmallScreen && activeSection === "movies" && (
            <MoviesSection text={text} />
          )}
          {isSmallScreen && activeSection === "shows" && (
            <ShowsSection text={text} />
          )}
        </div>
      </div>
    </>
  );
}
