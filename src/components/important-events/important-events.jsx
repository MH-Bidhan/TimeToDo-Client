import React from "react";
import configureAndFilterEvents from "../../services/util-functions/events/configure-and-filter-events";
import Important from "../common/important/important.component";
import Table from "../common/table/table.component";
import DeleteButton from "./../common/delete-button/delete-button.component";

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
