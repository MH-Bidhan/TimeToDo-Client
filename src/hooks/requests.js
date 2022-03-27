import http from "./../services/http/http";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const token = localStorage.getItem("token");

export async function httpSignInUser(user) {
  const { data } = await http.post(`${API_ENDPOINT}/auth/login`, user);

  return data;
}

export async function httpGetUser() {
  const { data } = await http.get(`${API_ENDPOINT}/users`, {
    headers: {
      "x-auth-token": token,
    },
  });

  return data;
}

export async function httpUpdateUser(id, userCred) {
  const { data } = await http.put(`${API_ENDPOINT}/users/${id}`, userCred, {
    headers: {
      "x-auth-token": token,
    },
  });

  return data;
}

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
