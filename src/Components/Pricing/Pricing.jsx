import { useState } from "react";
import "./Pricing.css"
import PlanCards from "/X6-Project/src/Components/Cards/PlanCard/PlanCard";

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
        "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      monthlyPrice: 12.99,
      yearlyPrice: 129.99
    },
    {
      name: "Premium Plan",
      description:
        "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
      monthlyPrice: 14.99,
      yearlyPrice: 149.99
    }
  ];

  const handleToggle = (monthly) => {
    setIsMonthly(monthly);
  };

  return (
    <div className="container">
      <div className="part1">
        <div className="part2">
          <h1>Choose the plan that is right for you</h1>
          <p className="pa">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing pref____-_______-__erences. Get ready
            for non-stop entertainment!
          </p>
        </div>
        <div className="toggle-buttons">
          <button
            className={`toggle ${isMonthly ? "active" : ""}`}
            onClick={() => handleToggle(true)}>
            Monthly
          </button>
          <button
            className={`toggle ${!isMonthly ? "active" : ""}`}
            onClick={() => handleToggle(false)}>
            Yearly
          </button>
        </div>
      </div>
      <PlanCards plans={plansData} isMonthly={isMonthly} />
    </div>
  );
}

export default Pricing;
