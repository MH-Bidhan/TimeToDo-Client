import moment from "moment";

function configureAndFilterEvents(events = [], callback) {
  const filterdEvents = events.filter(callback).map((data) => {
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
      timeOfEvent,
      time,
      date,
    };
  });

  return filterdEvents.sort((a, b) => {
    const aTime = new Date(a.timeOfEvent);
    const bTime = new Date(b.timeOfEvent);

    return aTime - bTime;
  });
}

export default configureAndFilterEvents;
