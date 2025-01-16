import DevicesCard from "../Cards/DevicesCard/DevicesCard";
import "./Devices.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import icon1 from "./../../assets/Icons/smartphone.svg";
import icon2 from "./../../assets/Icons/tablet.svg";
import icon3 from "./../../assets/Icons/smartTV.svg";
import icon4 from "./../../assets/Icons/laptops.svg";
import icon5 from "./../../assets/Icons/gaming.svg";
import icon6 from "./../../assets/Icons/VRheadsets.svg";
import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";
import HomeParagraph from "../SharedTitlesAndParagraph/HomeParagraph/HomeParagraph";

export default function Devices() {
  // Array of devices with icons and titles
  const devices = [
    { icon: icon1, title: "Smartphones" },
    { icon: icon2, title: "Tablet" },
    { icon: icon3, title: "Smart TV" },
    { icon: icon4, title: "Laptops" },
    { icon: icon5, title: "Gaming Consoles" },
    { icon: icon6, title: "VR Headsets" },
  ];

  return (
    <div className="StreamingExpTay xContainer customMargin">
      <div className="StreamingExpTitleTay">
        <HomeMoviesAndShowsTitle
          title="We Provide you streaming experience across various devices."
          home={true}
          fontSizeType="type4"
          lineHeightType="type4"
        />
        <HomeParagraph
          paragraph="With StreamVibe, you can enjoy your favorite movies and TV shows anytime,
                anywhere. Our platform is designed to be compatible with 
                a wide range of devices, 
                ensuring that you 
                never miss a moment of entertainment."
        />
      </div>
      <Row>
        {devices.map((device, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <DevicesCard icon={device.icon} title={device.title} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
