import React from "react";
import UpcomingEventTable from "./../../components/upcomin-event-table/upcoming-event-table.component";
import "./home-page.styles.scss";

const HomePage = () => {
  return (
    <div className="home container">
      <UpcomingEventTable />
    </div>
  );
};

export default HomePage;
