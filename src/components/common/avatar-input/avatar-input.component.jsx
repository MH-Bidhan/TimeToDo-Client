import React from "react";
import "./avatar-input.styles.scss";

const AvatarInput = ({ active, image, handleChange, value }) => {
  return (
    <label className="avatar-input">
      <input
        type="checkbox"
        checked={active === value}
        onChange={handleChange}
        value={value}
      />
      <img className="avatar-image" src={`img/${image}.png`} alt="" />
    </label>
  );
};

export default AvatarInput;
