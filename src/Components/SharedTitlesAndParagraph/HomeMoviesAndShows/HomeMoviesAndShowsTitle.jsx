import React, { useState, useEffect } from "react";
import "./HomeMoviesAndShowsTitle.css";

export default function HomeMoviesAndShowsTitle({
  title,
  home,
  fontSizeType,
  lineHeightType,
}) {
  const fontSizes = {
    type1: { lg: "48px", md: "28px", sm: "24px" },
    type2: { lg: "38px", md: "30px", sm: "24px" },
    type3: { lg: "38px", md: "28px", sm: "24px" },
    type4: { lg: "38px", md: "28px", sm: "20px" },
  };

  const lineHeights = {
    type1: { lg: "72px", md: "42px", sm: "36px" },
    type2: { lg: "57px", md: "45px", sm: "36px" },
    type3: { lg: "57px", md: "42px", sm: "36px" },
    type4: { lg: "57px", md: "42px", sm: "30px" },
  };

  const [fontSize, setFontSize] = useState("");
  const [lineHeight, setLineHeight] = useState("");

  const updateFontSizeAndLineHeight = () => {
    const selectedFontSize = fontSizes[fontSizeType] || fontSizes.type1;
    const selectedLineHeight = lineHeights[lineHeightType] || lineHeights.type1;

    if (window.innerWidth > 1500) {
      setFontSize(selectedFontSize.lg);
      setLineHeight(selectedLineHeight.lg);
    } else if (window.innerWidth > 576) {
      setFontSize(selectedFontSize.md);
      setLineHeight(selectedLineHeight.md);
    } else {
      setFontSize(selectedFontSize.sm);
      setLineHeight(selectedLineHeight.sm);
    }
  };

  useEffect(() => {
    updateFontSizeAndLineHeight(); // Set initial values
    window.addEventListener("resize", updateFontSizeAndLineHeight); // Update on resize

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", updateFontSizeAndLineHeight);
  }, [fontSizeType, lineHeightType]); // Re-run when fontSizeType or lineHeightType changes

  return (
    <div className={home ? "homeTitleZA" : "moviesAndShowsTitle"}>
      <h2 style={{ fontSize: fontSize, lineHeight: lineHeight }}>{title}</h2>
    </div>
  );
}
