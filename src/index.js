import "./scss/main.scss";
import Task from "./modules/Task";
import Project from "./modules/Project";

const addTaskButton = document.getElementById('addTaskBtn');
const addTaskForm = document.getElementById('newTaskForm');
const currentProject = new Project("Default");

addTaskForm.onsubmit = addTaskToProject;

const displayTaskForm = (toggle) => {
    if (toggle) {
        addTaskButton.classList.add('active');
        addTaskForm.classList.add('active');
    } else {
        addTaskButton.classList.remove('active');
        addTaskForm.classList.remove('active');
    }
}

addTaskButton.addEventListener('click', () => {
    addTaskForm.reset();
    displayTaskForm(true);
});

const cancelNewTask = document.getElementById('cancelNewTask');
cancelNewTask.addEventListener('click', displayTaskForm(false));

const getTaskFormData = () => {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const dueDate = new Date(document.getElementById('taskDueDate').value);
    const priority = document.querySelector('input[name="radio"]:checked').value;
    return new Task(title,description,dueDate,priority)
}

function addTaskToProject(e){
    e.preventDefault();
    const newTask = getTaskFormData();
    currentProject.addTask(newTask);

    console.log(currentProject.getTasks());

    displayTaskForm(false);
};




