import React from "react";
import { useNavigate } from "react-router-dom";
import ImportantTasks from "../../components/important-tasks/important-tasks.component";
import UpcomingTasks from "../../components/upcomin-tasks/upcoming-tasks.component";
import CustomButton from "./../../components/common/custom-button/custom-button.component";
import LoadingScreen from "./../../components/common/loading-screen/loading-screen.component";
import useTasks from "./../../hooks/useTasks";
import "./home-page.styles.scss";

const HomePage = () => {
  const { loading, tasks, handleImportant, deleteTask } = useTasks();
  const navigate = useNavigate();

  return (
    <div className="home container">
      {loading ? (
        <LoadingScreen />
      ) : (
        <React.Fragment>
          <div className="button-container">
            <CustomButton
              handleClick={() => navigate("/newTask")}
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
