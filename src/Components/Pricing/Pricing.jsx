import React, { useState } from "react";
import "./Pricing.css";
import PlanCards from "/X6-Project/src/Components/Cards/PlanCard/PlanCard";
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  ToggleButton
} from "react-bootstrap";

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  const plansData = [
    {
      name: "Basic Plan",
      description:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99
    },
    {
      name: "Standard Plan",
      description:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
      monthlyPrice: 12.99,
      yearlyPrice: 129.99
    },
    {
      name: "Premium Plan",
      description:
        "Access to a widest selection of movies,including all new releases and offline Viewing,including releases.",
      monthlyPrice: 14.99,
      yearlyPrice: 149.99
    }
  ];

  const handleToggle = (monthly) => {
    setIsMonthly(monthly);
  };

  return (
    <Container className="mt-4 xContainer customMargin">
      <Row className="w-100 p-4">
        <Col
          md={10}
          lg={11}
          xl={12}
          className="d-flex justify-content-start flex-column">
          <Row className="d-flex div-flex">
            <Col md={10}>
              <h1 className="main-title">Choose the plan that is right for you</h1>
              <p className="main-paragraph">
                Join StreamVibe and select from our flexible subscription
                options tailored to suit your viewing preferences. Get ready for
                non-stop entertainment!
              </p>
            </Col>
            <Col xs={6} md={2} className="d-flex align-items-center">
              <ButtonGroup toggle className="toggle-btn p-2">
                <ToggleButton
                  type="radio"
                  variant="text-center p-3 toggle"
                  name="radio"
                  value={true}
                  checked={isMonthly}
                  onClick={() => handleToggle(true)}>
                  Monthly
                </ToggleButton>
                <ToggleButton
                  type="radio"
                  variant="text-center p-3 toggle"
                  name="radio"
                  value={false}
                  checked={!isMonthly}
                  onClick={() => handleToggle(false)}>
                  Yearly
                </ToggleButton>
              </ButtonGroup>
            </Col>
          </Row>
        </Col>
      </Row>
      <Container className="mt-3 d-flex justify-content-center align-items-center">
        <PlanCards plans={plansData} isMonthly={isMonthly} />
      </Container>
    </Container>
  );
}

export default Pricing;
