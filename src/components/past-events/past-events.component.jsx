import React from "react";
import configureAndFilterEvents from "../../services/util-functions/events/configure-and-filter-events";
import Important from "../common/important/important.component";
import Table from "../common/table/table.component";
import DeleteButton from "./../common/delete-button/delete-button.component";

const PastEvents = ({ events, deleteEvent }) => {
  const filterdEvents = configureAndFilterEvents(
    events,
    (data) => !data.upcoming && data.marked
  );

  const columns = [
    {
      key: "important",
      content: (event) => (
        <Important
          onClick={() =>
            alert(
              "Can not update any properties of the event that are past their specified time"
            )
          }
          isImportant={event.isImportant}
        />
      ),
    },
    { path: "name", label: "Event" },
    { path: "date", label: "Date" },
    { path: "time", label: "time" },
    {
      key: "status",

      content: (event) => {
        const badgeColor = event.completed ? "badge-success" : "badge-danger";
        return (
          <span className={`badge ${badgeColor}`}>
            {" "}
            {event.completed ? "Completed" : "Failed"}
          </span>
        );
      },
    },
    {
      key: "delete",
      content: (event) => (
        <DeleteButton handleDelete={() => deleteEvent(event)} />
      ),
    },
  ];

  return (
    <div className="important-event-table">
      {filterdEvents.length !== 0 ? (
        <React.Fragment>
          <div className="event-title">past events</div>
          <Table columns={columns} data={filterdEvents} />
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default PastEvents;
