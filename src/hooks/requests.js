import http from "./../services/http/http";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmY0MWMyMTViYzQxMGQ0NDRkZTZhMiIsImlzR29sZCI6ZmFsc2UsImlhdCI6MTY0ODAxNTcwOCwiZXhwIjoxNjQ4MTAyMTA4fQ.vja_GahYZPTAKsUHcEFR_bzU3yFXQLQQWUdSedcA1MM";

export async function httpGetEvents() {
  const { data: fetchedEvents } = await http.get(`${API_ENDPOINT}/events`, {
    headers: {
      "x-auth-token": token,
    },
  });
  return fetchedEvents;
}

export async function httpUpdateEvents(id, updateCred) {
  const { data: updatedEvent } = await http.put(
    `${API_ENDPOINT}/events/${id}`,
    updateCred,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
  return updatedEvent;
}

export async function httpDeleteEvent(id) {
  const { data: deletedEvent } = await http.delete(
    `${API_ENDPOINT}/events/${id}`,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );

  return deletedEvent;
}
