import { useCallback, useEffect, useState } from "react";
import { httpDeleteEvent, httpGetEvents, httpUpdateEvents } from "./requests";

function useEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const getEvents = useCallback(async () => {
    const fetchedEvents = await httpGetEvents();

    setEvents(fetchedEvents);
    setLoading(false);
  }, []);

  const handleImportant = useCallback(
    async (event) => {
      const { _id } = event;
      const updateCred = {
        isImportant: !event.isImportant,
      };

      try {
        await httpUpdateEvents(_id, updateCred);
        getEvents();
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
    loading,
    handleImportant,
    deleteEvent,
  };
}

export default useEvents;
