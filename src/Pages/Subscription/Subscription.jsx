import Pricing from "../../Components/Pricing/Pricing";
import ScrollAnimation from "../../Components/ScrollAnimation/ScrollAnimation";
import SubTable from "../../Components/SubTable/SubTable";
import "./Subscription.css";

export default function Subscription() {
  return (
    <>
      <div className="subscriptionPricingZA">
        <ScrollAnimation>
          <Pricing />
        </ScrollAnimation>
        <ScrollAnimation>
          <SubTable />
        </ScrollAnimation>
      </div>
    </>
  );
}
