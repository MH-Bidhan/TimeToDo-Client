import React from "react";
import configureAndFilterEvents from "./../../services/util-functions/events/configure-and-filter-events";
import Important from "./../common/important/important.component";
import Table from "./../common/table/table.component";

const UpcomingEventTable = () => {
  const a = [
    {
      _id: "622f421315bc410d444de6a8",
      userId: "622f41c215bc410d444de6a2",
      name: "New Event 3",
      description: "New Event description ",
      timeOfEvent: "2022-03-14T14:30:00.000Z",
      upcoming: true,
      marked: false,
      completed: true,
      archived: false,
      isImportant: true,
      __v: 0,
    },
    {
      _id: "622f421b15bc410d444de6ae",
      userId: "622f41c215bc410d444de6a2",
      name: "New Event 2",
      description: "New Event description ",
      timeOfEvent: "2022-03-14T14:30:00.000Z",
      upcoming: true,
      marked: false,
      completed: true,
      archived: false,
      isImportant: false,
      __v: 0,
    },
  ];

  const events = configureAndFilterEvents(
    a,
    (data) => data.upcoming && !data.isImportant
  );

  const columns = [
    {
      key: "important",
      content: (event) => <Important isImportant={event.isImportant} />,
    },
    { path: "name", label: "name" },
    { path: "date", label: "Date" },
    { path: "time", label: "time" },
    {
      key: "delete",
      content: (event) => <button className="btn btn-danger">Delete</button>,
    },
  ];

  return (
    <div className="upcoming-event-table">
      <div className="event-title">upcoming events</div>
      <Table columns={columns} data={events} />
    </div>
  );
};

export default UpcomingEventTable;
