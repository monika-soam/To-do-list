import { getTaskFromLocalStorage, setTaskIntoLocalStorage } from './localStorage.js';


const completedTask = () => {
  let globalTasks;
  globalTasks = getTaskFromLocalStorage();
  const completedTasks = globalTasks.filter((t) => t.completed);
  const splicedIndex = (f) => {
    globalTasks.splice(globalTasks.findIndex((e) => e.index === f.index), 1);
  };
  completedTasks.forEach(splicedIndex);

  setTaskIntoLocalStorage(globalTasks);
};
export default completedTask;