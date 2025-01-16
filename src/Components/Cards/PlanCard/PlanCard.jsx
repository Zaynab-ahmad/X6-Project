import MainButton from "../../Buttons/Button.jsx";
import { Card, Col } from "react-bootstrap";
import "./PlanCard.css";

export default function PlanCard({ plans, isMonthly }) {
  return plans.map((plan, index) => {
    const price = isMonthly ? plan.monthlyPrice : plan.yearlyPrice;
    const period = isMonthly ? "/month" : "/year";

    return (
      <Col
        key={index}
        sm={12}
        md={6}
        xl={4}
        className="d-flex justify-content-center"
      >
        <div className="planEM">
          <div>
            <Card.Title className="cardTitleEM">{plan.name}</Card.Title>
            <Card.Text className="cardParagraphEM">
              {plan.description}
            </Card.Text>
            <div className="planCardbottomEM">
              <div className="priceEM">
                ${price}
                <span className="periodEM">{period}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <MainButton
                  text="Start a Free Trial"
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
            </div>
          </div>
        </div>
      </Col>
    );
  });
}
