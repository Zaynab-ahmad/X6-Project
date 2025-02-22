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
  const [alert, setAlert] = useState({ visible: false, message: "", type: "" });

  const [selectedFlag, setSelectedFlag] = useState(flag1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, isChecked: !formData.isChecked });
  };

  const handleSendMessage = () => {
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.isChecked
    ) {
      setAlert({
        visible: true,
        message: "Please fill out all required fields and agree to the terms.",
        type: "alert-error",
      });
      setTimeout(
        () => setAlert({ visible: false, message: "", type: "" }),
        3000
      );
      return;
    }

    setAlert({
      visible: true,
      message: "Thank you! Your message has been sent.",
      type: "alert-success",
    });
    setTimeout(() => setAlert({ visible: false, message: "", type: "" }), 3000);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      isChecked: false,
    });
  };

  const handleFlagSelect = (flag) => {
    setSelectedFlag(flag); 
  };

  return (
    <Container id="Contact-Us" className="SupportForm">
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
                  <img src={selectedFlag} alt="Flag" />
                  <img src={DropdownIcon} alt="Dropdown Icon" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleFlagSelect(flag1)}>
                    <img src={flag1} alt="India" /> India
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleFlagSelect(flag2)}>
                    <img src={flag2} alt="Saudi Arabia" /> Saudi Arabia
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleFlagSelect(flag3)}>
                    <img src={flag3} alt="USA" /> USA
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleFlagSelect(flag4)}>
                    <img src={flag4} alt="Germany" /> Germany
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleFlagSelect(flag5)}>
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
      <Row className="d-flex justify-between align-items-center">
        <Col md={9} sm={12}>
          <div className="CheckBoxArea">
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
        {alert.visible && (
          <div className={`custom-alert ${alert.type}`}>{alert.message}</div>
        )}
      </Row>
    </Container>
  );
}
