function signOutUser() {
  localStorage.removeItem("token");

  document.location = "/";
}

export default signOutUser;
