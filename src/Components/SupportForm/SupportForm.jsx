import "./SupportForm.css";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import flag1 from "../../assets/Icons/flag.png";
import flag2 from "../../assets/Icons/saudi-arabia-flag-icon.png";
import flag3 from "../../assets/Icons/united-states-flag-icon.png";
import flag4 from "../../assets/Icons/germany-flag-icon.png";
import flag5 from "../../assets/Icons/france-flag-icon.png";
import Button from "../Buttons/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownIcon from "../../assets/Icons/dropDownarrow.svg";


export default function SupportForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    isChecked: false,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, isChecked: !formData.isChecked });
  };

  const handleSendMessage = () => {
    console.log("Form Data Submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      isChecked: false,
    });
  };

  return (
    <Container className="SupportForm">
      <Row>
        <Col md={6} sm={12}>
          <div className="inputContainer bottom-margin">
            <label className="inputLabel">First Name</label>
            <input
              className="SupportFormInput"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter First Name"
            />
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div className="inputContainer bottom-margin">
            <label className="inputLabel">Last Name</label>
            <input
              className="SupportFormInput"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter Last Name"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={12}>
          <div className="inputContainer bottom-margin">
            <label className="inputLabel">Email</label>
            <input
              className="SupportFormInput"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your Email"
            />
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div className="inputContainer bottom-margin">
            <label className="inputLabel">Phone Number</label>
            <div className="PhoneNumberContainer">
              <Dropdown>
                <Dropdown.Toggle className="CountrySelector">
                  <img src={flag1} alt="Flag" />
                  <img src={DropdownIcon} alt="DropdownIcon" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <img src={flag1} alt="India" /> India
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <img src={flag2} alt="Saudi Arabia" /> Saudi Arabia
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <img src={flag3} alt="USA" /> USA
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <img src={flag4} alt="Germany" /> Germany
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <img src={flag5} alt="France" /> France
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <input
                className="SupportFormInput"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter Phone Number"
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} sm={12}>
          <div className="inputContainer bottom-margin">
            <label className="inputLabel">Message</label>
            <textarea
              className="SupportFormArea"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your Message"
            />
          </div>
        </Col>
      </Row>
      <Row className="d-flex  justify-between align-items-center">
        <Col md={9} sm={12}>
          <div className="CheckBoxArea  ">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={formData.isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="checkbox-mark"></span>
            </label>

            <p>I agree with Terms of Use and Privacy Policy</p>
          </div>
        </Col>
        <Col md={3} sm={12}>
          <Button
            onClick={handleSendMessage}
            text="Send Message"
            isFullWidth={true}
            paddingType="type2"
            isSmallerBorderRadius={true}
            isBlack={false}
          />
        </Col>
      </Row>
    </Container>
  );
}
