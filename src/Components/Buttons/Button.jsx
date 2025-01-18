import React, { useState, useEffect } from "react";
import "./Button.css";

export default function Button({
  text = "Button", 
  isFullWidth = false, 
  isSmallerBorderRadius = false, 
  isBlack = false, 
  paddingType,
  onClick, 
}) {
  const paddingOptions = {
    type1: { lg: "18px 24px", md: "14px 24px" },
    type2: { lg: "18px 24px", md: "14px 20px" },
    type3: { lg: "14px 24px", md: "12px 20px" },
    type4: { lg: "14px 24px", md: "14px 20px" },
  };

  const selectedPadding = paddingOptions[paddingType] || paddingOptions.type1;
  const [padding, setPadding] = useState("");

  const updatePadding = () => {
    if (window.innerWidth > 1440) {
      setPadding(selectedPadding.lg);
    } else {
      setPadding(selectedPadding.md);
    }
  };

  useEffect(() => {
    updatePadding(); // Set initial padding value
    window.addEventListener("resize", updatePadding);

    return () => window.removeEventListener("resize", updatePadding);
  }, [paddingType]);

  return (
    <button
      className={`mainButton ${isFullWidth ? "fullWidth" : ""} 
      ${isSmallerBorderRadius ? "smallerBorderRadius" : ""}`}
      style={{
        background: isBlack ? "var(--black-shade08)" : "var(--primary-color-red)",
        border: isBlack ? "1px solid var(--black-shade15)" : "none",
        padding: padding, // Apply dynamically calculated padding
      }}
      onClick={onClick} 
    >
      {text}
    </button>
  );
}
