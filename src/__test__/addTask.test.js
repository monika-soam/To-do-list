/**
 * @jest-environment jsdom
 */
import addTask from "../modules/addTask.js";
import removeTask from "../modules/removeTask.js";
import getTasks from "../modules/displayTasks.js";
import updateTask from "../modules/updateTask.js";
import completedTask from "../modules/completedTasks.js"


describe("add, remove and update task", () => {
  test("add task", () => {
    addTask('new task');
    expect(getTasks()).toHaveLength(1);
  });
  test('update task', () => {
    let ele = document.createElement('div');
    ele.id = "1";
    ele.value = "updated task"
    updateTask(ele);
    expect(getTasks()[0].description).toMatch(/updated task/);

  });
  //   test('update checkbox', () => {
  //     let ele = document.createElement('div');
  //     ele.id = "1";
  //     updateCheckbox(ele);
  //     expect(getTasks()[0].completed).toBe(true);
  //   });
  test("remove task", () => {
    let ele = document.createElement('div');
    ele.id = "1";
    removeTask(ele);
    expect(getTasks()).toHaveLength(0);

  });

});

describe('complete All tasks', () => {
  test('complete all tasks', () => {
    completedTask();
    expect(getTasks()).toHaveLength(0)

  })

});