import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ size, label, handleClick, ...otherProps }) => {
  return (
    <button
      onClick={handleClick}
      className={`custom-button ${size} `}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default CustomButton;
