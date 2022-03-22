import { getTaskFromLocalStorage, setTaskIntoLocalStorage } from './localStorage.js';

const addTask = (text) => {
  let tasks = getTaskFromLocalStorage();
  tasks = tasks.sort((v1, v2) => v1.index - v2.index);
  const index = tasks[tasks.length - 1].index + 1;
  const obj = { index, description: text, completed: false };
  tasks.push(obj);
  setTaskIntoLocalStorage(tasks);
};

export default addTask;