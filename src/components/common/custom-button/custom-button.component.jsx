import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ size, label, handleClick }) => {
  return (
    <button onClick={handleClick} className={`custom-button ${size} `}>
      {label}
    </button>
  );
};

export default CustomButton;
