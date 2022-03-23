import { getTaskFromLocalStorage, setTaskIntoLocalStorage } from './localStorage.js';

const completedTask = () => {
  const tasks = getTaskFromLocalStorage();
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].completed === true) {
      tasks.splice(i, 1);
    }
  }
  setTaskIntoLocalStorage(tasks);
};

export default completedTask;