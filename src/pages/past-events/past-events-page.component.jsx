import React from "react";
import LoadingScreen from "./../../components/common/loading-screen/loading-screen.component";
import PastEvents from "./../../components/past-events/past-events.component";
import useEvents from "./../../hooks/useEvents";

const PastEventsPage = () => {
  const { loading, events, handleImportant, deleteEvent } = useEvents();
  return (
    <div className="past-events-page">
      {loading ? (
        <LoadingScreen />
      ) : (
        <PastEvents
          events={events}
          handleImportant={handleImportant}
          deleteEvent={deleteEvent}
        />
      )}
    </div>
  );
};

export default PastEventsPage;
