import React from "react";
import "./toggle-switch.styles.scss";

const ToggleSwitch = ({ checked, ...otherProps }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} {...otherProps} />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitch;
