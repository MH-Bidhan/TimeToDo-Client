import { css } from "@emotion/react";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import Important from "../common/important/important.component";
import Table from "../common/table/table.component";
import configureAndFilterEvents from "./../../services/util-functions/events/configure-and-filter-events";
import "./unmarked-events.styles.scss";

const MarkButton = ({ label, event, markEvent, action }) => {
  const [loading, setLoading] = useState(false);

  const classes =
    label === "Complete" ? " btn btn-sm btn-success" : " btn btn-sm btn-danger";

  const override = css`
    display: block;
    margin: 0 1.3rem;
  `;

  return (
    <button
      onClick={() => {
        setLoading(true);

        markEvent(event, action);
      }}
      className={classes}
    >
      {loading ? (
        <ClipLoader color="#fff" loading={loading} css={override} size={20} />
      ) : (
        label
      )}
    </button>
  );
};

const UnmarkedEvents = ({ events, markEvent }) => {
  const filterdEvents = configureAndFilterEvents(
    events,
    (data) => !data.upcoming && !data.marked
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
      key: "Complete",
      content: (event) => (
        <MarkButton
          markEvent={markEvent}
          event={event}
          label="Complete"
          action={true}
        />
      ),
    },
    {
      key: "delete",
      content: (event) => (
        <MarkButton
          markEvent={markEvent}
          event={event}
          label={` Failed `}
          action={false}
        />
      ),
    },
  ];

  return (
    <div className="unmarked-events-table">
      {filterdEvents.length !== 0 ? (
        <Table columns={columns} data={filterdEvents} />
      ) : null}
    </div>
  );
};

export default UnmarkedEvents;
