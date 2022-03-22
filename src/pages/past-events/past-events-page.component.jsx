import React from "react";
import PastEvents from "./../../components/past-events/past-events.component";
import useEvents from "./../../hooks/useEvents";

const PastEventsPage = () => {
  const { events, handleImportant, deleteEvent } = useEvents();
  return (
    <div className="past-events-page">
      <PastEvents
        events={events}
        handleImportant={handleImportant}
        deleteEvent={deleteEvent}
      />
    </div>
  );
};

export default PastEventsPage;
