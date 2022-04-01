import { createContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import RootComponent from "./components/root/root.component";
import UtilDropDown from "./components/util-dropdown/util-dropdown.component";
import useUser from "./hooks/useUser";
import LoadingPage from "./pages/loading/loading-page.component";
import NewTaskPage from "./pages/new-tasks/new-tasks-page.component";
import SigninPage from "./pages/sign-in/sign-in-page.component";
import SignUpPage from "./pages/sign-up/sign-up-page.component";

export const UserContext = createContext();

function App() {
  const { user, loading } = useUser();

  const [utils, setUtils] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const theme = user?.darkTheme || false;
    console.log();
    setDarkTheme(theme);
  }, [user]);

  document.body.className = darkTheme ? "dark" : "";

  return (
    <div className="App">
      <Header state={utils} setState={setUtils} avatar={user?.avatar} />
      {utils ? (
        <UtilDropDown user={user} theme={darkTheme} setTheme={setDarkTheme} />
      ) : null}

      {loading ? (
        <LoadingPage />
      ) : (
        <Routes>
          <Route
            path="/"
            element={user ? <RootComponent /> : <Navigate to={"/signin"} />}
          />
          <Route
            path="/newTask"
            index
            element={user ? <NewTaskPage /> : <Navigate to={"/signin"} />}
          />
          <Route
            path="/signin"
            element={!user ? <SigninPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signup"
            element={!user ? <SignUpPage /> : <Navigate to={"/"} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
