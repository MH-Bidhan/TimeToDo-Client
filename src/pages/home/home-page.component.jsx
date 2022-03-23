import React from "react";
import LoadingScreen from "./../../components/common/loading-screen/loading-screen.component";
import ImportantEvents from "./../../components/important-events/important-events";
import UpcomingEvents from "./../../components/upcomin-events/upcoming-events.component";
import useEvents from "./../../hooks/useEvents";
import "./home-page.styles.scss";

const HomePage = () => {
  const { loading, events, handleImportant, deleteEvent } = useEvents();

  return (
    <div className="home container">
      {loading ? (
        <LoadingScreen />
      ) : (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </div>
  );
};

export default HomePage;
