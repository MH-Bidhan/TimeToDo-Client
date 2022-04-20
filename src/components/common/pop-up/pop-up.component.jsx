import React from "react";
import "./pop-up.styles.scss";

const PopUp = ({ children }) => {
  return (
    <div className="pop-up">
      <div className="backdrop">{children}</div>
    </div>
  );
};

export default PopUp;
