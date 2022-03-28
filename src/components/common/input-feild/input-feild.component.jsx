import React from "react";
import InputError from "./../input-error/input-error.component";
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
      {error ? <InputError error={error} /> : null}
    </div>
  );
};

export default InputFeild;
