import React from "react";
import ImportantEvents from "./../../components/important-events/important-events";
import UpcomingEvents from "./../../components/upcomin-events/upcoming-events.component";
import useEvents from "./../../hooks/useEvents";
import "./home-page.styles.scss";

const HomePage = () => {
  const { events, handleImportant, deleteEvent } = useEvents();
  return (
    <div className="home container">
      <ImportantEvents
        events={events}
        handleImportant={handleImportant}
        deleteEvent={deleteEvent}
      />
      <UpcomingEvents
        events={events}
        handleImportant={handleImportant}
        deleteEvent={deleteEvent}
      />
    </div>
  );
};

export default HomePage;
