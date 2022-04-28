import { createContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PopUp from "./components/common/pop-up/pop-up.component";
import Header from "./components/header/header.component";
import NewTaskForm from "./components/new-task-form/new-task-form.component";
import RootComponent from "./components/root/root.component";
import TaskPreview from "./components/task-preview/task-preview.component";
import UtilDropDown from "./components/util-dropdown/util-dropdown.component";
import useTasks from "./hooks/useTasks";
import useUser from "./hooks/useUser";
import ArchivedPage from "./pages/archive-tasks/archived-page.component";
import LoadingPage from "./pages/loading/loading-page.component";
import SigninPage from "./pages/sign-in/sign-in-page.component";
import SignUpPage from "./pages/sign-up/sign-up-page.component";

export const UserContext = createContext();
export const GlobalContext = createContext();
export const TaskPreviewContext = createContext();

const changeState = (state, setState) => {
  setState(!state);
};

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
  const [archivePop, setArchivePop] = useState(false);
  const [taskToPreview, setTaskToPreview] = useState(null);

  useEffect(() => {
    const theme = user?.darkTheme || false;
    setDarkTheme(theme);
  }, [user]);

  document.body.className = darkTheme ? "dark" : "";

  return (
    <div className="App">
      <Header
        handleDropdown={() => changeState(utils, setUtils)}
        avatar={user?.avatar}
      />
      {utils ? (
        <UtilDropDown
          archivePopUp={() => changeState(archivePop, setArchivePop)}
          user={user}
          theme={darkTheme}
          setTheme={setDarkTheme}
        />
      ) : null}

      {newTaskPop ? (
        <PopUp handleClose={() => changeState(newTaskPop, setNewTaskPop)}>
          <NewTaskForm
            createNewTask={createNewTask}
            handleClose={() => changeState(newTaskPop, setNewTaskPop)}
          />
        </PopUp>
      ) : null}

      {archivePop ? (
        <PopUp handleClose={() => changeState(archivePop, setArchivePop)}>
          <GlobalContext.Provider value={{ setTaskToPreview }}>
            <ArchivedPage
              handleClose={() => changeState(archivePop, setArchivePop)}
            />
          </GlobalContext.Provider>
        </PopUp>
      ) : null}
      {taskToPreview ? (
        <PopUp handleClose={() => setTaskToPreview(null)}>
          <GlobalContext.Provider value={{ taskToPreview }}>
            <TaskPreview />
          </GlobalContext.Provider>
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
                    setTaskToPreview,
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
