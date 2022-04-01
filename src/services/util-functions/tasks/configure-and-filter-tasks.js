import moment from "moment";

function configureAndFilterTasks(tasks = [], callback) {
  const filterdTasks = tasks.filter(callback).map((data) => {
    const {
      _id,
      name,
      description,
      upcoming,
      marked,
      completed,
      archived,
      isImportant,
      timeOfTask,
    } = data;
    const formatedDate = moment(timeOfTask)
      .format("MMMM Do YYYY, h:mm:ss a")
      .split(", ");
    const date = formatedDate[0];
    const time = formatedDate[1];

    return {
      _id,
      name,
      description,
      upcoming,
      marked,
      completed,
      archived,
      isImportant,
      timeOfTask,
      time,
      date,
    };
  });

  return filterdTasks.sort((a, b) => {
    const aTime = new Date(a.timeOfTask);
    const bTime = new Date(b.timeOfTask);

    return aTime - bTime;
  });
}

export default configureAndFilterTasks;
