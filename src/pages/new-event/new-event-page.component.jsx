import React from "react";
import { useNavigate } from "react-router-dom";
import NewEventForm from "./../../components/new-event-form/new-event-form.component";
import useEvents from "./../../hooks/useEvents";
import "./new-event-page.styles.scss";

const NewEventPage = () => {
  const { createNewEvent } = useEvents();
  const navigate = useNavigate();
  return (
    <div className="new-event-page">
      <div className="content">
        <NewEventForm createNewEvent={createNewEvent} navigate={navigate} />
      </div>
    </div>
  );
};

export default NewEventPage;
