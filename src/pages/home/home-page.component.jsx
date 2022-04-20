import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import ImportantTasks from "../../components/important-tasks/important-tasks.component";
import UpcomingTasks from "../../components/upcomin-tasks/upcoming-tasks.component";
import CustomButton from "./../../components/common/custom-button/custom-button.component";
import LoadingScreen from "./../../components/common/loading-screen/loading-screen.component";
import useTasks from "./../../hooks/useTasks";
import useUser from "./../../hooks/useUser";
import "./home-page.styles.scss";

const HomePage = () => {
  const { user } = useUser();
  const { loading, tasks, handleImportant, deleteTask } = useTasks();

  const { newTaskPop, setNewTaskPop } = useContext(GlobalContext);

  return (
    <div className="home container">
      {loading ? (
        <LoadingScreen />
      ) : (
        <React.Fragment>
          <div className="new-task-container">
            <span className="quota-viewer">
              Reamining Quota : {user.remainingQuota}
            </span>

            <CustomButton
              handleClick={() => setNewTaskPop(!newTaskPop)}
              size={"small"}
              label={"add new task"}
            />
          </div>
          <ImportantTasks
            tasks={tasks}
            handleImportant={handleImportant}
            deleteTask={deleteTask}
          />
          <UpcomingTasks
            tasks={tasks}
            handleImportant={handleImportant}
            deleteTask={deleteTask}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default HomePage;
