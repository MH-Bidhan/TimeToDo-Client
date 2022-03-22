import "font-awesome/css/font-awesome.min.css";
import React from "react";

const Important = ({ isImportant, ...otherProps }) => {
  const classes = isImportant ? "fa-solid fa-star" : "fa-regular fa-star";
  return <i className={`important-icon ${classes}`} {...otherProps}></i>;
};

export default Important;
