import "./Button.css";

export default function Button({ text, isFullWidth, isSmallerBorderRaduis, isBlack }) {
  return (
    <div>
      <button
        className={`
          mainButton
          ${isFullWidth ? "fullWidthMed" : ""} 
          ${isSmallerBorderRaduis ? "smallerBorderRaduis" : ""}
        `.trim()}
        style={{
          background: isBlack ? "var(--black-shade08)" : "var(--primary-color-red)",
          border: isBlack ? "1px solid var(--black-shade15)" : "none",
        }}
      >
        {text}
      </button>
    </div>
  );
}
