import "./PlanCard.css";

function PlanCards({ plans, isMonthly }) {
  const displayedPlans = plans.map((plan, index) => {
    const price = isMonthly ? plan.monthlyPrice : plan.yearlyPrice;
    const period = isMonthly ? "/month" : "/year";

    return (
      <div className="plan" key={index}>
        <h2>{plan.name}</h2>
        <p>{plan.description}</p>
        <div className="price">
          ${price}
          <span>{period}</span>
        </div>
        <div className="button-container">
          <button className="trial">Start Free Trial</button>
          <button>Choose Plan</button>
        </div>
      </div>
    );
  });

  return <div className="plans">{displayedPlans}</div>;

}

export default PlanCards;
