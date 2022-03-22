import React from "react";
import PastEventsPage from "../../pages/past-events/past-events-page.component";
import HomePage from "./../../pages/home/home-page.component";
import "./root.styles.scss";

const RootComponent = () => {
  return (
    <div className="root-component container">
      <HomePage />
      <PastEventsPage />
    </div>
  );
};

export default RootComponent;
