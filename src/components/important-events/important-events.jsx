import React from "react";
import configureAndFilterEvents from "../../services/util-functions/events/configure-and-filter-events";
import Important from "../common/important/important.component";
import Table from "../common/table/table.component";

const ImportantEvents = ({ events, handleImportant, deleteEvent }) => {
  const filterdEvents = configureAndFilterEvents(
    events,
    (data) => data.upcoming && data.isImportant
  );

  const columns = [
    {
      key: "important",
      content: (event) => (
        <Important
          onClick={() => handleImportant(event)}
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
        <button onClick={() => deleteEvent(event)} className="btn btn-danger">
          Delete
        </button>
      ),
    },
  ];

  return (
    <div className="upcoming-event-table">
      {filterdEvents.length !== 0 ? (
        <React.Fragment>
          <div className="event-title">Important events</div>
          <Table columns={columns} data={filterdEvents} />
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default ImportantEvents;
