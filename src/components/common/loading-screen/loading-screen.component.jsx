import { css } from "@emotion/react";
import React from "react";
import ClockLoader from "react-spinners/ClockLoader";
import "./loading-screen.styles.scss";

const LoadingScreen = ({ loading }) => {
  const override = css`
    display: block;
    margin: 0 auto;
  `;
  return (
    <div className="loading-page">
      <ClockLoader
        color={"var(--color-heading)"}
        loading={loading}
        css={override}
        size={50}
      />
    </div>
  );
};

export default LoadingScreen;
