import { displayTaskList } from "..";

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  getTasks() {
    return this.tasks;
  }

  getTask(task) {
    return this.tasks[task];
  }

  addTask(newTask) {
    this.tasks.push(newTask);
  }

  deleteTask(e) {
    const taskId = parseInt(e.target.closest(".card").dataset.taskId);
    this.tasks.splice(taskId, 1);
    displayTaskList();
  }
}
