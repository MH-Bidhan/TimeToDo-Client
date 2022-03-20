import "font-awesome/css/font-awesome.min.css";
import React from "react";

const Important = ({ isImportant }) => {
  const classes = isImportant ? "fa-solid fa-star" : "fa-regular fa-star";
  return <i className={`important-icon ${classes}`}></i>;
};

export default Important;
