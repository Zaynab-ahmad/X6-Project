import FAQs from "../../Components/FAQs/FAQs";
import ScrollAnimation from "../../Components/ScrollAnimation/ScrollAnimation";
import SupportForm from "../../Components/SupportForm/SupportForm";
import SupportWelcome from "../../Components/SupportWelcome/SupportWelcome";
import "./Support.css";

export default function Support() {
  return (
    <>
      <ScrollAnimation>
        <div className="xContainer customMargin SupportTop">
          <SupportWelcome />
          <SupportForm />
        </div>
      </ScrollAnimation>
      <ScrollAnimation>
        <FAQs />
      </ScrollAnimation>
    </>
  );
}
