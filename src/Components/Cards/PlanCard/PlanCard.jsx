import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./PlanCard.css";

function PlanCards({ plans, isMonthly }) {
  const displayedPlans = plans.map((plan, index) => {
    const price = isMonthly ? plan.monthlyPrice : plan.yearlyPrice;
    const period = isMonthly ? "/month" : "/year";
    return (
      <Col key={index} xs={12} sm={6} md={12} lg={4} xl={4} className="mb-3 d-flex justify-content-center align-items-center">
        <Card className="plan h-100">
          <Card.Body className="p-0">
            <Card.Title className="text-light">{plan.name}</Card.Title>
            <Card.Text>{plan.description}</Card.Text>
            <div className="price">
              ${price}
              <span>{period}</span>
            </div>
            <div className="button-container d-flex justify-content-center">
              <Button variant="primary" className="trial p-3">
                Start Free Trial
              </Button>
              <Button variant="primary" className="outline-project p-3">
                Choose Plan
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return <Row className="m-0">{displayedPlans}</Row>;
}

export default PlanCards;
