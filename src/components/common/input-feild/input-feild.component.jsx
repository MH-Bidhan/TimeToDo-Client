import React from "react";
import "./input-feild.styles.scss";

const InputFeild = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className="input-feild-container">
      <input
        autoComplete="off"
        className="input-feild"
        placeholder={label}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default InputFeild;
