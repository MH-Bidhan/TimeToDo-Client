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

export async function httpGetTasks() {
  const { data: fetchedTasks } = await http.get(`${API_ENDPOINT}/tasks`, {
    headers: {
      "x-auth-token": token,
    },
  });
  return fetchedTasks;
}

export async function httpCreateTask(task) {
  const { data: fetchedTasks } = await http.post(
    `${API_ENDPOINT}/tasks`,
    task,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );

  return fetchedTasks;
}

export async function httpUpdateTasks(id, updateCred) {
  const { data: updatedTask } = await http.put(
    `${API_ENDPOINT}/tasks/${id}`,
    updateCred,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
  return updatedTask;
}

export async function httpDeleteTask(id) {
  const { data: deletedTask } = await http.delete(
    `${API_ENDPOINT}/tasks/${id}`,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );

  return deletedTask;
}
