import React from "react";
import LoadingScreen from "../../components/common/loading-screen/loading-screen.component";
import UnmarkedTasks from "../../components/unmarked-tasks/unmarked-tasks.component";
import useTasks from "../../hooks/useTasks";
import PastTasks from "./../../components/past-tasks/past-tasks.component";
import "./past-tasks-page.styles.scss";

const PastTasksPage = () => {
  const { loading, tasks, handleImportant, deleteTask, handleMark } =
    useTasks();
  return (
    <div className="past-tasks-page">
      {loading ? (
        <LoadingScreen />
      ) : (
        <React.Fragment>
          <UnmarkedTasks tasks={tasks} markTask={handleMark} />
          <PastTasks
            tasks={tasks}
            handleImportant={handleImportant}
            deleteTask={deleteTask}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default PastTasksPage;
