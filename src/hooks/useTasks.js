import { useCallback, useEffect, useState } from "react";
import {
  httpCreateTask,
  httpDeleteTask,
  httpGetTasks,
  httpUpdateTasks,
} from "./requests";

function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTasks = useCallback(async () => {
    const fetchedTasks = await httpGetTasks();

    setTasks(fetchedTasks);
    setLoading(false);
  }, []);

  const createNewTask = useCallback(
    async (task) => {
      const newTask = await httpCreateTask(task);

      await getTasks();

      return newTask;
    },
    [getTasks]
  );

  const handleImportant = useCallback(
    async (task) => {
      const { _id } = task;
      const updateCred = {
        isImportant: !task.isImportant,
      };

      try {
        await httpUpdateTasks(_id, updateCred);
        getTasks();
      } catch (e) {
        console.log(e.message);
      }
    },
    [getTasks]
  );

  const handleMark = useCallback(
    async (task, success) => {
      const { _id } = task;
      const updateCred = {
        marked: true,
        completed: success,
      };

      try {
        await httpUpdateTasks(_id, updateCred);
        getTasks();
      } catch (e) {
        console.log(e.message);
      }
    },
    [getTasks]
  );

  const deleteTask = useCallback(
    async (task) => {
      const { _id } = task;

      try {
        const deletedTask = await httpDeleteTask(_id);

        getTasks();

        return deletedTask;
      } catch (e) {
        console.log(e.message);
      }
    },
    [getTasks]
  );

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return {
    tasks,
    loading,
    createNewTask,
    handleImportant,
    handleMark,
    deleteTask,
  };
}

export default useTasks;
