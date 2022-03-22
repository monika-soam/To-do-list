import './style.css';
import addTask from '../modules/addTask.js';
import getTasks from '../modules/displayTasks.js';
import { setTaskIntoLocalStorage } from '../modules/localStorage.js';

const newTask = document.getElementById('add-task');
const showTasks = document.getElementById('show-tasks');

if (localStorage.getItem('tasks') == null) {
  setTaskIntoLocalStorage([{
    index: 3,
    completed: false,
    description: 'Complete JavaScript tutorial',
  },
  {
    index: 1,
    completed: true,
    description: 'Prepare Breakfast',

  },
  {
    index: 2,
    completed: true,
    description: 'Transfer UTI Payment',

  },
  ]);
}

const checkboxClickHandler = (e) => {
  if (e.target.checked === true) {
    e.target.parentNode.children[1].classList.add('strike');
  } else {
    e.target.parentNode.children[1].classList.remove('strike');
  }
};
const refreshTaskList = () => {
  const sortedTasks = getTasks();
  showTasks.innerHTML = '';
  for (let i = 0; i < sortedTasks.length; i += 1) {
    let str = '';
    let strike = '';
    if (sortedTasks[i].completed === true) {
      str = 'checked';
      strike = 'strike';
    }
    showTasks.innerHTML += `<div class="task-list">
          <input type="checkbox" class="checkbox" ${str} ><input type="text" class="task ${strike}" id="${sortedTasks[i].index}" value="${sortedTasks[i].description}" ><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </div>
        <hr>`;
  }

  const checkboxes = document.querySelectorAll('.checkbox');

  for (let i = 0; i < checkboxes.length; i += 1) {
    checkboxes[i].addEventListener('click', (e) => {
      checkboxClickHandler(e);
    });
  }
};

newTask.addEventListener('keyup', (e) => {
  e.stopImmediatePropagation();
  if (e.keyCode === 13) {
    addTask(e.target.value);
    e.target.value = '';
    refreshTaskList();
  }
});

window.onload = () => {
  refreshTaskList();
};