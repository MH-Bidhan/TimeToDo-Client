import moment from "moment";
import React from "react";
import CustomButton from "./../common/custom-button/custom-button.component";
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

  const events = a
    .filter((data) => data.upcoming && !data.isImportant)
    .map((data) => {
      const {
        _id,
        name,
        description,
        upcoming,
        marked,
        completed,
        archived,
        isImportant,
        timeOfEvent,
      } = data;
      const formatedDate = moment(timeOfEvent)
        .format("MMMM Do YYYY, h:mm:ss a")
        .split(", ");
      const date = formatedDate[0];
      const time = formatedDate[1];

      return {
        _id,
        name,
        description,
        upcoming,
        marked,
        completed,
        archived,
        isImportant,
        time,
        date,
      };
    });

  console.log(events);
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
      content: (event) => (
        <CustomButton label={"delete"} size={"small"} color={"red"} />
      ),
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
