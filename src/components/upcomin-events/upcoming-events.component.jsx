import React from "react";
import configureAndFilterEvents from "../../services/util-functions/events/configure-and-filter-events";
import DeleteButton from "../common/delete-button/delete-button.component";
import Important from "../common/important/important.component";
import Table from "../common/table/table.component";

const UpcomingEvents = ({ events, handleImportant, deleteEvent }) => {
  const filterdEvents = configureAndFilterEvents(
    events,
    (data) => data.upcoming && !data.isImportant
  );

  const columns = [
    {
      key: "important",
      content: (event) => (
        <Important
          handleImportant={() => handleImportant(event)}
          isImportant={event.isImportant}
        />
      ),
    },
    { path: "name", label: "Event" },
    { path: "date", label: "Date" },
    { path: "time", label: "time" },
    {
      key: "delete",
      content: (event) => (
        <DeleteButton handleDelete={() => deleteEvent(event)} />
      ),
    },
  ];

  return (
    <div className="important-event-table">
      <div className="event-title">upcoming events</div>
      {filterdEvents.length !== 0 ? (
        <Table columns={columns} data={filterdEvents} />
      ) : (
        <span>No events found in the current list</span>
      )}
    </div>
  );
};

export default UpcomingEvents;
