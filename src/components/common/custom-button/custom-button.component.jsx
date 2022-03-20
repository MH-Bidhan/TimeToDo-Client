import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ label, handleClick }) => {
  return (
    <button onClick={handleClick} className="custom-button">
      {label}
    </button>
  );
};

export default CustomButton;
