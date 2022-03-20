import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ label, handleClick, size, color }) => {
  return (
    <button onClick={handleClick} className={`custom-button ${size} ${color}`}>
      {label}
    </button>
  );
};

export default CustomButton;
