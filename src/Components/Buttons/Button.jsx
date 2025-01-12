import React, { useState, useEffect } from "react";
import "./Button.css";

export default function Button({
  text = "Button", // Default text if none is provided
  isFullWidth = false, // Default to false
  isSmallerBorderRadius = false, // Default to false
  isBlack = false, // Default to false
  paddingType = "type1", // Default padding type
}) {
  // Define padding values for different types and screen sizes
  const paddingOptions = {
    type1: { lg: "18px 24px", md: "14px 24px" },
    type2: { lg: "18px 24px", md: "14px 20px" },
    type3: { lg: "14px 24px", md: "12px 20px" },
    type4: { lg: "14px 24px", md: "14px 20px" },
  };

  // Fallback to a default padding if paddingType is invalid
  const selectedPadding = paddingOptions[paddingType] || paddingOptions.type1;

  const [padding, setPadding] = useState("");

  const updatePadding = () => {
    if (window.innerWidth > 1400) {
      setPadding(selectedPadding.lg);
    } else {
      setPadding(selectedPadding.md);
    }
  };

  useEffect(() => {
    updatePadding(); // Set initial padding value
    window.addEventListener("resize", updatePadding); // Update padding on resize

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", updatePadding);
  }, [paddingType]); // Re-run when paddingType changes

  return (
    <div>
      <button
        className={`mainButton ${isFullWidth ? "fullWidth" : ""} 
        ${isSmallerBorderRadius ? "smallerBorderRadius" : ""}`}
        style={{
          background: isBlack ? "var(--black-shade08)" : "var(--primary-color-red)",
          border: isBlack ? "1px solid var(--black-shade15)" : "none",
          padding: padding, // Apply dynamically calculated padding
        }}
      >
        {text}
      </button>
    </div>
  );
}
