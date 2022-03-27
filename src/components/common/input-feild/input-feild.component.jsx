import React from "react";
import "./input-feild.styles.scss";

const InputFeild = ({ label, error, handleChange, ...otherProps }) => {
  return (
    <div className="input-feild-container">
      <input
        autoComplete="off"
        className="input-feild"
        placeholder={label}
        onChange={handleChange}
        {...otherProps}
      />
      {error ? <div className="input-error-messege">{error} </div> : null}
      {/* <div className="input-error-messege">
        "Password" length must be at least 8 characters long{" "}
      </div> */}
    </div>
  );
};

export default InputFeild;
