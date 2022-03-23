import React, { createContext, useState } from "react";
import PastEventsPage from "../../pages/past-events/past-events-page.component";
import NavBar from "../navbar/navbar.component";
import HomePage from "./../../pages/home/home-page.component";
import "./root.styles.scss";

export const PageContext = createContext();

const RootComponent = () => {
  const [page, setPage] = useState("homePage");

  const pageStateProvider = {
    page,
    setPage,
  };

  return (
    <div className="root-component container">
      <PageContext.Provider value={pageStateProvider}>
        <NavBar />
      </PageContext.Provider>
      <div className="page-container">
        {page === "homePage" ? <HomePage /> : <PastEventsPage />}
      </div>
    </div>
  );
};

export default RootComponent;
