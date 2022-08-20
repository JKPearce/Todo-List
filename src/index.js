import "./scss/main.scss";
import Task from "./modules/Task";
import Project from "./modules/Project";

const addTaskButton = document.getElementById('addTaskBtn');
const addTaskForm = document.getElementById('newTaskForm');
const todoWrapper = document.querySelector('.project-todo-wrapper');
const currentProject = new Project("Default");

addTaskForm.onsubmit = addTaskToProject;

const cancelNewTask = document.getElementById('cancelNewTask');
cancelNewTask.addEventListener('click', () =>{
    displayTaskForm(false)
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

function displayTaskForm(toggle){
    console.log('y u no work');
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

function addTaskToProject(e){
    e.preventDefault();
    const newTask = getTaskFormData();
    currentProject.addTask(newTask);

    displayTaskForm(false);
    
    displayTaskList();
};

const getTaskFormData = () => {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const dueDate = new Date(document.getElementById('taskDueDate').value);
    const priority = document.querySelector('input[name="radio"]:checked').value;
    return new Task(title,description,dueDate,priority)
};







