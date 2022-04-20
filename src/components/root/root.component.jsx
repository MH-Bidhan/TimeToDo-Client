import React, { createContext, useState } from "react";
import PastTaskPage from "../../pages/past-tasks/past-tasks-page.component";
import NavBar from "../navbar/navbar.component";
import HomePage from "./../../pages/home/home-page.component";
import "./root.styles.scss";

export const PageContext = createContext();

const RootComponent = () => {
  const persistedPage = sessionStorage.getItem("page") || "homePage";
  const [page, setPage] = useState(persistedPage);

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
        {page === "homePage" ? <HomePage /> : <PastTaskPage />}
      </div>
    </div>
  );
};

export default RootComponent;
