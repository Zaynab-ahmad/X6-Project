import React, { useState, useEffect } from "react";
import "./HomeMoviesAndShowsTitle.css";

export default function HomeMoviesAndShowsTitle({
  title,
  titlePadding = "else",
  fontSizeType,
  lineHeightType,
}) {
  const fontSizes = {
    type1: { lg: "48px", md: "28px", sm: "24px" },
    type2: { lg: "38px", md: "30px", sm: "24px" },
    type3: { lg: "38px", md: "28px", sm: "24px" },
    type4: { lg: "38px", md: "28px", sm: "20px" },
    type5: { lg: "48px", md: "38px", sm: "28px" },
  };

  const lineHeights = {
    type1: { lg: "72px", md: "42px", sm: "36px" },
    type2: { lg: "57px", md: "45px", sm: "36px" },
    type3: { lg: "57px", md: "42px", sm: "36px" },
    type4: { lg: "57px", md: "42px", sm: "30px" },
    type5: { lg: "72px", md: "57px", sm: "42px" },
  };

  const paddingType = {
    home: { lg: "14px", md: "10px", sm: "8px" },
    movies: { lg: "15.5px", md: "11.5px", sm: "0px" },
    else: { lg: "0px", md: "0px", sm: "0px" },
  };

  const [fontSize, setFontSize] = useState("");
  const [lineHeight, setLineHeight] = useState("");
  const [padding, setPadding] = useState("");

  const updateStyles = () => {
    const selectedFontSize = fontSizes[fontSizeType] || fontSizes.type1;
    const selectedLineHeight = lineHeights[lineHeightType] || lineHeights.type1;
    const selectedPadding = paddingType[titlePadding] || paddingType.else;

    if (window.innerWidth > 1500) {
      setFontSize(selectedFontSize.lg);
      setLineHeight(selectedLineHeight.lg);
      setPadding(selectedPadding.lg);
    } else if (window.innerWidth > 576) {
      setFontSize(selectedFontSize.md);
      setLineHeight(selectedLineHeight.md);
      setPadding(selectedPadding.md);
    } else {
      setFontSize(selectedFontSize.sm);
      setLineHeight(selectedLineHeight.sm);
      setPadding(selectedPadding.sm);
    }
  };

  useEffect(() => {
    updateStyles();
    window.addEventListener("resize", updateStyles);

    return () => window.removeEventListener("resize", updateStyles);
  }, [fontSizeType, lineHeightType, titlePadding]);
  return (
    <div className="homeTitleZA">
      <h2
        style={{
          fontSize: fontSize,
          lineHeight: lineHeight,
          paddingBottom: padding,
        }}
      >
        {title}
      </h2>
    </div>
  );
}
