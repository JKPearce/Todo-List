import "./scss/main.scss";
import Task from "./modules/Task";
import ProjectController from "./modules/ProjectController";
import { format, formatISO } from "date-fns";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const projectController = new ProjectController();
const addNewTaskButton = document.getElementById("addTaskBtn");
const addTaskForm = document.getElementById("newTaskForm");
const addNewProjectButton = document.getElementById("addProjectBtn");
const addProjectForm = document.getElementById("addProjectForm");
const todoWrapper = document.querySelector(".project-todo-wrapper");
const projectButtons = document.querySelectorAll(".project-btn");

//font awesome icon creation
library.add(faPenToSquare, faTrashCan, faAngleDown);
const faPenToSquareIcon = icon(faPenToSquare);
const faTrashCanIcon = icon(faTrashCan);
const faArrowDownIcon = icon(faAngleDown);

addTaskForm.onsubmit = addTaskToProject;
addProjectForm.onsubmit = addNewProject;
projectController
  .getCurrentProject()
  .addTask(
    new Task(
      "Default Task",
      "This is a placeholder description",
      new Date(),
      "low"
    )
  );
displayTaskList();

projectButtons.forEach((button) => {
  button.addEventListener("click", swapProjects);
});

function displayForm(formName, button, toggle) {
  if (toggle) {
    formName.classList.add("active");
    button.classList.add("active");
  } else {
    formName.classList.remove("active");
    button.classList.remove("active");
  }
}

const cancelNewTask = document.querySelectorAll(".btn-cancel");
cancelNewTask.forEach((button) => {
  button.addEventListener("click", (e) => {
    //i hate that i had to wrap the button and form in a section just to select the button
    e.currentTarget
      .closest("section")
      .querySelector(".add")
      .classList.remove("active");
    e.currentTarget.closest("form").classList.remove("active");
  });
});

function displayTaskList() {
  const tasks = projectController.getCurrentProject().getTasks();
  const projectTitle = projectController.getCurrentProject().name;
  const projectTitleElement = document.createElement("h1");
  todoWrapper.innerHTML = "";
  projectTitleElement.textContent = projectTitle;

  todoWrapper.appendChild(projectTitleElement);
  tasks.forEach((task, i) => {
    const card = document.createElement("div");
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    const priority = document.createElement("p");
    const cardOptions = document.createElement("div");
    const editButton = document.createElement("i");
    const deleteButton = document.createElement("i");
    const expandArrow = document.createElement("i");

    card.classList.add("card");
    card.classList.add(task.priority);
    card.dataset.taskId = i;
    title.classList.add("todo-title");
    description.classList.add("todo-description");
    dueDate.classList.add("due-date");
    priority.classList.add("priority");
    cardOptions.classList.add("card-options");
    editButton.classList.add("edit-btn");
    deleteButton.classList.add("delete-btn");
    expandArrow.classList.add("arrow");

    title.textContent = task.title;
    description.textContent = task.description;
    dueDate.textContent = format(task.dueDate, "dd/MM/yyyy");
    priority.textContent = task.priority;

    editButton.appendChild(faPenToSquareIcon.node[0]);
    deleteButton.appendChild(faTrashCanIcon.node[0]);
    expandArrow.appendChild(faArrowDownIcon.node[0]);
    card.appendChild(title);
    card.appendChild(dueDate);
    card.appendChild(description);
    card.appendChild(priority);
    card.appendChild(expandArrow);
    cardOptions.appendChild(editButton);
    cardOptions.appendChild(deleteButton);
    card.appendChild(cardOptions);

    deleteButton.addEventListener("click", (e) => {
      projectController.getCurrentProject().deleteTask(e);
    });

    card.addEventListener("click", (e) => {
      const description = e.target
        .closest(".card")
        .querySelector(".todo-description");

      if (e.target.closest(".card").classList.contains("editing")) return;
      if (description.classList.contains("show")) {
        description.classList.remove("show");
        e.target
          .closest(".card")
          .querySelector(".arrow")
          .classList.remove("up");
      } else {
        description.classList.add("show");
        e.target.closest(".card").querySelector(".arrow").classList.add("up");
      }
    });

    editButton.addEventListener("click", (e) => {
      const taskWrapper = e.target.closest(".card");
      const taskId = parseInt(taskWrapper.dataset.taskId);
      const selectedTask = projectController
        .getCurrentProject()
        .getTask(taskId);

      if (e.target.innerText === "Save") {
        selectedTask.setTitle(
          taskWrapper.querySelector(".todo-title").textContent
        );
        selectedTask.setDescription(
          taskWrapper.querySelector(".todo-description").textContent
        );
        selectedTask.setDueDate(
          new Date(taskWrapper.querySelector('input[type="date"]').value)
        );
        console.log(taskWrapper.querySelector('input[type="date"]').value);

        editButton.innerText = "Edit";
        title.contentEditable = false;
        description.contentEditable = false;
        taskWrapper.classList.remove("editing");
        displayTaskList();
      } else {
        editButton.innerText = "Save";
        title.contentEditable = true;
        description.contentEditable = true;
        title.classList.add("show");
        description.classList.add("show");

        const newDueDate = document.createElement("input");
        const currentDateElement = taskWrapper.querySelector(".due-date");
        newDueDate.type = "date";
        newDueDate.value = formatISO(selectedTask.getDueDate(), {
          representation: "date",
        });
        taskWrapper.replaceChild(newDueDate, currentDateElement);

        taskWrapper.classList.add("editing");
      }
    });

    todoWrapper.appendChild(card);
  });
}

addNewTaskButton.addEventListener("click", () => {
  displayForm(addProjectForm, addNewProjectButton, false);
  addTaskForm.reset();
  displayForm(addTaskForm, addNewTaskButton, true);
});

addNewProjectButton.addEventListener("click", () => {
  displayForm(addTaskForm, addNewTaskButton, false);
  addProjectForm.reset();
  displayForm(addProjectForm, addNewProjectButton, true);
});

function addTaskToProject(e) {
  e.preventDefault();
  const newTask = getTaskFormData();

  projectController.getCurrentProject().addTask(newTask);

  displayForm(addTaskForm, addNewTaskButton, false);

  displayTaskList();
}

const getTaskFormData = () => {
  const title = document.getElementById("taskTitle").value;
  const description = document.getElementById("taskDescription").value;
  const dueDate = new Date(document.getElementById("taskDueDate").value);
  const priority = document.querySelector('input[name="radio"]:checked').value;
  return new Task(title, description, dueDate, priority);
};

function addNewProject(e) {
  e.preventDefault();
  projectController.addProject(document.getElementById("projectTitle").value);
  displayForm(addProjectForm, addNewProjectButton, false);
  displayProjects();
}

function displayProjects() {
  const projectWrapper = document.getElementById("projectWrapper");
  const projects = projectController.getProjects();
  projectWrapper.innerHTML = "";

  projects.forEach((project, i) => {
    //stop creation of default project folders
    if (i < 3) return;
    //make all new user created projects
    const projectButton = document.createElement("button");
    projectButton.classList.add("project-btn");
    projectButton.textContent = project.name;
    projectButton.dataset.projectId = i;
    projectButton.addEventListener("click", swapProjects);
    projectWrapper.appendChild(projectButton);
  });
}

function swapProjects(e) {
  projectController.setCurrentProject(e);
  displayTaskList();
}

export { displayTaskList };
