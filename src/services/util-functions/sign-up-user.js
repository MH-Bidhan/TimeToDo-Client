import { httpSignUpUser } from "../../hooks/requests";
import signInUser from "./sign-in-user";

async function signUpUser(userCreds) {
  const { email, password } = userCreds;
  try {
    const response = await httpSignUpUser(userCreds);

    const { error } = response;

    if (error) {
      return error;
    }

    const { token } = await signInUser({
      email,
      password,
    });

    return localStorage.setItem("token", token);
  } catch (e) {
    console.log(e);
  }
}

export default signUpUser;
