import React, { useState, useEffect } from "react";
import ShowsSection from "../../Components/ShowsSection/ShowsSection";
import MoviesSection from "../../Components/MoviesSection/MoviesSection";
import "./MoviesAndShows.css";
import MoviesAndShowsHero from "../../Components/Heros/MoviesAndShowsHero/MoviesAndShowsHero";

export default function MoviesAndShows() {
  const [activeSection, setActiveSection] = useState("movies");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 576);
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <MoviesAndShowsHero />
      
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
              <MoviesSection />
              <ShowsSection />
            </>
          )}

          {/* Display One Section for Small Screens */}
          {isSmallScreen && activeSection === "movies" && <MoviesSection />}
          {isSmallScreen && activeSection === "shows" && <ShowsSection />}
        </div>
      </div>
    </>
  );
}
