import React from "react";
import MainButton from "../../Buttons/Button.jsx";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./PlanCard.css";

export default function PlanCard({ plans, isMonthly }) {
  const displayedPlans = plans.map((plan, index) => {
    const price = isMonthly ? plan.monthlyPrice : plan.yearlyPrice;
    const period = isMonthly ? "/month" : "/year";
    return (
      <Col
        key={index}
        xs={12}
        sm={12}
        md={12}
        lg={4}
        xl={4}
        className="mb-3 d-flex px-3">
        <Card className="plan p-3 h-100">

          <Card.Body className="p-0">
            <Card.Title className="text-light mb-3 card-title fs-3">
              {plan.name}
            </Card.Title>
            <Card.Text className="card-paragraph card-features h-">
              {plan.description}
            </Card.Text>
            <div className="price card-features fs-2 d-flex flex-row text-light">
              ${price}
              <span className="period fs-5 card-features">{period}</span>
            </div>
            <div className="d-flex justify-content-center flex-row mb-5 gap-md-5 gap-sm-4 gap-xs-4 gap-lg-4 gap-xl-4 gap-xxl-3">
              <MainButton
                text="Start a Free Trail"
                isFullWidth={false}
                isSmallerBorderRaduis={true}
                isBlack={true}
                paddingType="type2"
              />
              <MainButton
                text="Choose Plan"
                isFullWidth={false}
                isSmallerBorderRaduis={true}
                isBlack={false}
                paddingType="type2"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <Row className="m-0">
      {displayedPlans}
    </Row>
  );
}
