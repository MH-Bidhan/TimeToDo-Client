import React from "react";
import "./input-error.styles.scss";

const InputError = ({ error }) => {
  return <div className="input-error-message">{error}</div>;
};

export default InputError;
