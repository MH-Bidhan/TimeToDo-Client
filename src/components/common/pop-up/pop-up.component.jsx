import React from "react";
import "./pop-up.styles.scss";

const PopUp = ({ handleClose, children }) => {
  return (
    <div className="pop-up">
      <div onClick={handleClose} className="backdrop"></div>
      <div className="pop-up-body">
        <span className="close-button">
          <span onClick={handleClose}>&#10006;</span>
        </span>
        {children}
      </div>
    </div>
  );
};

export default PopUp;
