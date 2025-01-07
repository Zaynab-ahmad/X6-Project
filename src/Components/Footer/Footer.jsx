import { Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./Footer.css";
import Facebook from "../../assets/Icons/facebook.svg";
import Twitter from "../../assets/Icons/twitter.svg";
import LinkedIn from "../../assets/Icons/linkedIn.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  const [padding, setPadding] = useState("20px");

  useEffect(() => {
    const updatePadding = () => {
      if (window.innerWidth <= 1440) {
        setPadding("16px");
      } else {
        setPadding("20px");
      }
    };

    // Set the initial padding
    updatePadding();

    // Add a resize listener
    window.addEventListener("resize", updatePadding);

    // Cleanup the listener on unmount
    return () => window.removeEventListener("resize", updatePadding);
  }, []);
  return (
    <div className="footer">
    <div className="xContainer">
        <Row className="footerTopSection customFootergapZA">
        {/* Home Section */}
        <Col className="col-6 col-md-4 col-lg-2 d-flex flex-column">
          <Link to="/" className="footerTitleZA">
            Home
          </Link>
          <a href="#Categories" className="footerElementZA">
            Categories
          </a>
          <a href="#Devices" className="footerElementZA">
            Devices
          </a>
          <a href="#Pricing" className="footerElementZA">
            Pricing
          </a>
          <a href="#FAQ" className="footerElementZA">
            FAQ
          </a>
        </Col>

        {/* Movies Section */}
        <Col className="col-6 col-md-4 col-lg-2 d-flex flex-column">
          <Link to="/moviespageopen" className="footerTitleZA">
            Movies
          </Link>
          <a href="#" className="footerElementZA">
            Genres
          </a>
          <a href="#" className="footerElementZA">
            New Release
          </a>
          <a href="#" className="footerElementZA">
            Popular
          </a>
        </Col>

        {/* Shows Section */}
        <Col className="col-6 col-md-4 col-lg-2 d-flex flex-column">
          <Link to="/showspageopen" className="footerTitleZA">
            Shows
          </Link>
          <a href="#" className="footerElementZA">
            Genres
          </a>
          <a href="#" className="footerElementZA">
            New Release
          </a>
          <a href="#" className="footerElementZA">
            Popular
          </a>
        </Col>

        {/* Support Section */}
        <Col className="col-6 col-md-4 col-lg-2 d-flex flex-column">
          <Link to="/support" className="footerTitleZA">
            Support
          </Link>
          <a href="#" className="footerElementZA">
            Contact Us
          </a>
        </Col>

        {/* Subscription Section */}
        <Col className="col-6 col-md-4 col-lg-2 d-flex flex-column">
          <Link to="/subscription" className="footerTitleZA">
            Subscription
          </Link>
          <a href="#" className="footerElementZA">
            Plans
          </a>
          <a href="#" className="footerElementZA">
            Features
          </a>
        </Col>

        {/* Connect With Us Section */}
        <Col className="col-6 col-md-4 col-lg-2 d-flex flex-column">
          <h3 className="footerTitleZA">Connect With Us</h3>
          <div className="d-flex">
            <a href="https://facebook.com" className="footerSocialZA">
              <img src={Facebook} alt="Facebook" className="socialIconZA"/>
            </a>
            <a href="https://twitter.com" className="footerSocialZA">
              <img src={Twitter} alt="Twitter" className="socialIconZA"/>
            </a>
            <a href="https://linkedin.com" className="footerSocialZA">
              <img src={LinkedIn} alt="LinkedIn" className="socialIconZA"/>
            </a>
          </div>
        </Col>
      </Row>
      {/* Footer Bottom Section */}
      <Row className="customBFootergapZA footerBottomSection d-flex justify-content-between">
        <Col className="col-12 col-md-6 d-flex justify-content-start align-items-center">
          <p className="footerBottomElementZA">
            &copy; 2023 Streamvib, All Rights Reserved
          </p>
        </Col>
        <Col className="col-12 col-md-6 d-flex justify-content-start justify-content-md-end align-items-center">
          <a
            href="#terms-of-use"
            className="footerBottomElementZA"
            style={{
              borderRight: "1px solid var(--black-shade15)",
              paddingRight: padding,
            }}
          >
            Terms of Use
          </a>
          <a
            href="#privacy-policy"
            className="footerBottomElementZA"
            style={{
              borderRight: "1px solid var(--black-shade15)",
              padding: `0 ${padding}`,
            }}
          >
            Privacy Policy
          </a>
          <a
            href="#cookie-policy"
            className="footerBottomElementZA"
            style={{
              paddingLeft: padding,
            }}
          >
            Cookie Policy
          </a>
        </Col>
      </Row>
        

    </div>
    </div>

  );
}
