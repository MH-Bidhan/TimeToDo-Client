import { httpSignInUser } from "../../hooks/requests";

async function signInUser(userCreds) {
  try {
    const response = await httpSignInUser(userCreds);

    const { error } = response;

    if (error) {
      return error;
    }

    const { token } = response;

    return localStorage.setItem("token", token);
  } catch (e) {
    console.log(e);
  }
}

export default signInUser;
