import { useCallback, useEffect, useState } from "react";
import { httpDeleteEvent, httpGetEvents, httpUpdateEvents } from "./requests";

function useEvents() {
  const [events, setEvents] = useState([]);

  const getEvents = useCallback(async () => {
    const fetchedEvents = await httpGetEvents();

    setEvents(fetchedEvents);
  }, []);

  const handleImportant = useCallback(
    async (event) => {
      const { _id } = event;
      const updateCred = {
        isImportant: !event.isImportant,
      };

      try {
        const u = await httpUpdateEvents(_id, updateCred);
        getEvents();

        return u;
      } catch (e) {
        console.log(e.message);
      }
    },
    [getEvents]
  );

  const deleteEvent = useCallback(
    async (event) => {
      const { _id } = event;

      try {
        const deletedEvent = await httpDeleteEvent(_id);

        getEvents();

        return deletedEvent;
      } catch (e) {
        console.log(e.message);
      }
    },
    [getEvents]
  );

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return {
    events,
    handleImportant,
    deleteEvent,
  };
}

export default useEvents;
