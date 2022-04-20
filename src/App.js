import { createContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PopUp from "./components/common/pop-up/pop-up.component";
import Header from "./components/header/header.component";
import NewTaskForm from "./components/new-task-form/new-task-form.component";
import RootComponent from "./components/root/root.component";
import UtilDropDown from "./components/util-dropdown/util-dropdown.component";
import useTasks from "./hooks/useTasks";
import useUser from "./hooks/useUser";
import LoadingPage from "./pages/loading/loading-page.component";
import SigninPage from "./pages/sign-in/sign-in-page.component";
import SignUpPage from "./pages/sign-up/sign-up-page.component";
import TaskPreviewPage from "./pages/task-preview/task-preview-page.component";

export const UserContext = createContext();
export const GlobalContext = createContext();

function App() {
  const { user } = useUser();
  const { createNewTask } = useTasks();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  const [utils, setUtils] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [newTaskPop, setNewTaskPop] = useState(false);

  useEffect(() => {
    const theme = user?.darkTheme || false;
    console.log();
    setDarkTheme(theme);
  }, [user]);

  document.body.className = darkTheme ? "dark" : "";

  const a = (state, setState) => {
    setState(!state);
  };
  return (
    <div className="App">
      <Header state={utils} setState={setUtils} avatar={user?.avatar} />
      {utils ? (
        <UtilDropDown user={user} theme={darkTheme} setTheme={setDarkTheme} />
      ) : null}

      {newTaskPop ? (
        <PopUp>
          <NewTaskForm
            createNewTask={createNewTask}
            handleClose={() => a(newTaskPop, setNewTaskPop)}
          />
        </PopUp>
      ) : null}

      {loading ? (
        <LoadingPage />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <GlobalContext.Provider
                  value={{
                    newTaskPop,
                    setNewTaskPop,
                  }}
                >
                  <RootComponent />
                </GlobalContext.Provider>
              ) : (
                <Navigate to={"/signin"} />
              )
            }
          />

          <Route
            path="/task/:id"
            index
            element={user ? <TaskPreviewPage /> : <Navigate to={"/signin"} />}
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
