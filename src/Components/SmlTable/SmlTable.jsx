import { useState } from "react";
import "./SmlTable.css";

export default function SmlTable() {
  const [selectedPlan, setSelectedPlan] = useState("Standard");

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const planData = {
    Basic: {
      price: "$9.99/Month",
      freeTrial: "7 Days",
      content:
        "Access to a wide selection of movies and shows, including some new releases.",
      devices: "Watch on one device simultaneously",
      cancelAnytime: "Yes",
      hdr: "No",
      dolbyAtmos: "No",
      adFree: "No",
      offlineViewing: "No",
      familySharing: "No",
    },
    Standard: {
      price: "$12.99/Month",
      freeTrial: "7 Days",
      content:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
      devices: "Watch on Two device simultaneously",
      cancelAnytime: "Yes",
      hdr: "Yes",
      dolbyAtmos: "Yes",
      adFree: "Yes",
      offlineViewing: "Yes, for select titles.",
      familySharing: "5 family members.",
    },
    Premium: {
      price: "$14.99/Month",
      freeTrial: "7 Days",
      content:
        "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
      devices: "Watch on Four device simultaneously",
      cancelAnytime: "Yes",
      hdr: "Yes",
      dolbyAtmos: "Yes",
      adFree: "Yes",
      offlineViewing: "Yes, for all titles.",
      familySharing: "6 family members.",
    },
  };

  return (
    <div className="plan-dad">
      <div className="plan-tabs">
        <button
          className={selectedPlan === "Basic" ? "active" : ""}
          onClick={() => handlePlanChange("Basic")}
        >
          Basic
        </button>
        <button
          className={selectedPlan === "Standard" ? "active" : ""}
          onClick={() => handlePlanChange("Standard")}
        >
          Standard
        </button>
        <button
          className={selectedPlan === "Premium" ? "active" : ""}
          onClick={() => handlePlanChange("Premium")}
        >
          Premium
        </button>
      </div>
      <div className="plan-details">
        <div className="details-row">
          <div className="spe-width">
            <p className="spe-color-g">Price</p>
            <p className="spe-gap">{planData[selectedPlan].price}</p>
          </div>
          <div>
            <p className="spe-color-g">Free Trial</p>
            <p className="spe-gap">{planData[selectedPlan].freeTrial}</p>
          </div>
        </div>

        <div className="details-row">
          <div>
            <p className="spe-color-g">Content</p>
            <p className="spe-gap">{planData[selectedPlan].content}</p>
          </div>
        </div>

        <div className="details-row">
          <div>
            <p className="spe-color-g">Devices</p>
            <p className="spe-gap">{planData[selectedPlan].devices}</p>
          </div>
        </div>

        <div className="details-row">
          <div className="spe-width">
            <p className="spe-color-g">Cancel Anytime</p>
            <p className="spe-gap">{planData[selectedPlan].cancelAnytime}</p>
          </div>
          <div>
            <p className="spe-color-g">HDR</p>
            <p className="spe-gap">{planData[selectedPlan].hdr}</p>
          </div>
        </div>

        <div className="details-row">
          <div className="spe-width">
            <p className="spe-color-g">Dolby Atmos</p>
            <p className="spe-gap">{planData[selectedPlan].dolbyAtmos}</p>
          </div>
          <div>
            <p className="spe-color-g">Ad-Free</p>
            <p className="spe-gap">{planData[selectedPlan].adFree}</p>
          </div>
        </div>

        <div className="details-row">
          <div className="spe-width">
            <p className="spe-color-g">Offline Viewing</p>
            <p>{planData[selectedPlan].offlineViewing}</p>
          </div>
          <div>
            <p className="spe-color-g">Family Sharing</p>
            <p>{planData[selectedPlan].familySharing}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
