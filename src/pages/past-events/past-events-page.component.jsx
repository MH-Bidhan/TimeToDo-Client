import React from "react";
import LoadingScreen from "./../../components/common/loading-screen/loading-screen.component";
import PastEvents from "./../../components/past-events/past-events.component";
import UnmarkedEvents from "./../../components/unmarked-events/unmarked-events.component";
import useEvents from "./../../hooks/useEvents";

const PastEventsPage = () => {
  const { loading, events, handleImportant, deleteEvent, handleMark } =
    useEvents();
  return (
    <div className="past-events-page">
      {loading ? (
        <LoadingScreen />
      ) : (
        <React.Fragment>
          <UnmarkedEvents events={events} markEvent={handleMark} />
          <PastEvents
            events={events}
            handleImportant={handleImportant}
            deleteEvent={deleteEvent}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default PastEventsPage;
