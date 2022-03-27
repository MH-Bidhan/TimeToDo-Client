import { httpSignInUser } from "../../hooks/requests";

async function signInUser(userCreds) {
  try {
    const { token } = await httpSignInUser(userCreds);
    console.log(token);

    return localStorage.setItem("token", token);
  } catch (e) {
    console.log(e);
  }
}

export default signInUser;
