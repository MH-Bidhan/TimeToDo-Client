import http from "./../services/http/http";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const token = localStorage.getItem("token");

export async function httpSignInUser(user) {
  const response = await fetch(`${API_ENDPOINT}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  return response.json();
}

export async function httpSignUpUser(user) {
  const response = await fetch(`${API_ENDPOINT}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  return response.json();
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

export async function httpCreateEvent(event) {
  const { data: fetchedEvents } = await http.post(
    `${API_ENDPOINT}/events`,
    event,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );

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
