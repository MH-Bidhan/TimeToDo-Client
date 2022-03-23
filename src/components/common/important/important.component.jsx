import { css } from "@emotion/react";
import "font-awesome/css/font-awesome.min.css";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";

const Important = ({ isImportant, handleImportant, ...otherProps }) => {
  const [loading, setLoading] = useState(false);
  const classes = isImportant ? "fa-solid fa-star" : "fa-regular fa-star";

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  if (loading) {
    return (
      <ClipLoader
        color={"var(--color-heading)"}
        loading={loading}
        css={override}
        size={20}
      />
    );
  }

  return (
    <i
      onClick={() => {
        setLoading(true);
        handleImportant();
      }}
      className={`important-icon ${classes}`}
      {...otherProps}
    ></i>
  );
};

export default Important;
