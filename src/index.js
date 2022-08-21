import "./scss/main.scss";
import Task from "./modules/Task";
import Project from "./modules/Project";

const addTaskButton = document.getElementById('addTaskBtn');
const addTaskForm = document.getElementById('newTaskForm');
const addProjectButton = document.getElementById('addProjectBtn');
const addProjectForm = document.getElementById('addProjectForm');
const todoWrapper = document.querySelector('.project-todo-wrapper');
const currentProject = new Project("Default");

addTaskForm.onsubmit = addTaskToProject;

function displayForm(formName, button, toggle){
    if (toggle) {
        formName.classList.add('active');
        button.classList.add('active');
    } else {
        formName.classList.remove('active');
        button.classList.remove('active');
    }
}

const cancelNewTask = document.querySelectorAll('.btn-cancel');
cancelNewTask.forEach(button => {
    button.addEventListener('click', () => {
        displayForm(addTaskForm, addTaskButton, false);
    });
});

function displayTaskList(){
    const tasks = currentProject.getTasks();
    todoWrapper.innerHTML = '';
    tasks.forEach((task) => {
        console.log(task);
        const card = document.createElement('div');
        const title = document.createElement('h2');
        const description = document.createElement('p');
        const dueDate = document.createElement('p');
        const priority = document.createElement('p');

        card.classList.add('project-todo-card');
        title.classList.add('todo-title');
        description.classList.add('todo-description');
        dueDate.classList.add('due-date');
        priority.classList.add('priority');

        title.textContent = task.title;
        description.textContent = task.description;
        dueDate.textContent = task.dueDate
        priority.textContent = task.priority;

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(dueDate);
        card.appendChild(priority);
        todoWrapper.appendChild(card)
    });
}

addTaskButton.addEventListener('click', () => {
    displayForm(addProjectForm, addProjectButton, false);
    addTaskForm.reset();
    displayForm(addTaskForm, addTaskButton, true);
});

addProjectButton.addEventListener('click', () =>{
    displayForm(addTaskForm, addTaskButton, false);
    addProjectForm.reset();
    displayForm(addProjectForm, addProjectButton, true);
})

function addTaskToProject(e){
    e.preventDefault();
    const newTask = getTaskFormData();
    currentProject.addTask(newTask);

    displayForm(addTaskForm, addTaskButton, false);
    
    displayTaskList();
};

const getTaskFormData = () => {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const dueDate = new Date(document.getElementById('taskDueDate').value);
    const priority = document.querySelector('input[name="radio"]:checked').value;
    return new Task(title,description,dueDate,priority)
};







