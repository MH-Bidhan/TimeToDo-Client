import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "./../../components/common/custom-button/custom-button.component";
import LoadingScreen from "./../../components/common/loading-screen/loading-screen.component";
import ImportantEvents from "./../../components/important-events/important-events";
import UpcomingEvents from "./../../components/upcomin-events/upcoming-events.component";
import useEvents from "./../../hooks/useEvents";
import "./home-page.styles.scss";

const HomePage = () => {
  const { loading, events, handleImportant, deleteEvent } = useEvents();
  const navigate = useNavigate();

  return (
    <div className="home container">
      {loading ? (
        <LoadingScreen />
      ) : (
        <React.Fragment>
          <div className="button-container">
            <CustomButton
              handleClick={() => navigate("/newEvent")}
              size={"small"}
              label={"add new event"}
            />
          </div>
          <ImportantEvents
            events={events}
            handleImportant={handleImportant}
            deleteEvent={deleteEvent}
          />
          <UpcomingEvents
            events={events}
            handleImportant={handleImportant}
            deleteEvent={deleteEvent}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default HomePage;
