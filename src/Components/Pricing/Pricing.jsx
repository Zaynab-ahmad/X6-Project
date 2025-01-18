import React, { useState } from "react";
import { ButtonGroup, ToggleButton, Row } from "react-bootstrap";
import PlanCard from "../Cards/PlanCard/PlanCard";
import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";
import HomeParagraph from "../SharedTitlesAndParagraph/HomeParagraph/HomeParagraph";
import "./Pricing.css";

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  const plansData = [
    {
      name: "Basic Plan",
      description:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
    },
    {
      name: "Standard Plan",
      description:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      monthlyPrice: 12.99,
      yearlyPrice: 129.99,
    },
    {
      name: "Premium Plan",
      description:
        "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
      monthlyPrice: 14.99,
      yearlyPrice: 149.99,
    },
  ];

  const handleToggle = (monthly) => {
    setIsMonthly(monthly);
  };

  return (
    <div id="Pricing" className="xContainer customMargin">
      <div className="headingZA d-flex flex-column flex-md-row justify-content-start justify-content-md-between align-items-md-start align-items-md-center">
        <div className="pricingTEM">
          <HomeMoviesAndShowsTitle
            title="Choose the plan that is right for you"
            titlePadding="home"
            fontSizeType="type4"
            lineHeightType="type4"
          />
          <HomeParagraph
            paragraph="Join StreamVibe and select from our flexible subscription
                options tailored to suit your viewing preferences. Get ready for
                non-stop entertainment!"
          />
        </div>

        <ButtonGroup toggle className="toggleBtn">
          <ToggleButton
            type="radio"
            variant="text-center toggle"
            name="radio"
            value={true}
            checked={isMonthly}
            onClick={() => handleToggle(true)}
          >
            Monthly
          </ToggleButton>
          <ToggleButton
            type="radio"
            variant="text-center toggle"
            name="radio"
            value={false}
            checked={!isMonthly}
            onClick={() => handleToggle(false)}
          >
            Yearly
          </ToggleButton>
        </ButtonGroup>
      </div>

      {/* Cards Section */}
      <Row className="cardRowEM d-flex justify-content-center">
        <PlanCard plans={plansData} isMonthly={isMonthly} />
      </Row>
    </div>
  );
}

export default Pricing;
