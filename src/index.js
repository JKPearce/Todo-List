import "./scss/main.scss";
import Task from "./modules/Task";
import Project from "./modules/Project";
import ProjectController from "./modules/ProjectController";

const projectController = new ProjectController();
const addTaskButton = document.getElementById('addTaskBtn');
const addTaskForm = document.getElementById('newTaskForm');
const addProjectButton = document.getElementById('addProjectBtn');
const addProjectForm = document.getElementById('addProjectForm');
const todoWrapper = document.querySelector('.project-todo-wrapper');
const projectButtons = document.querySelectorAll('.project-btn');

addTaskForm.onsubmit = addTaskToProject;
addProjectForm.onsubmit = addNewProject;

projectButtons.forEach(button => {
    button.addEventListener('click', swapProjects);
});

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
    button.addEventListener('click', ((e) => {
        //i hate that i had to wrap the button and form in a section just to select the button
        e.currentTarget.closest('section').querySelector('.add').classList.remove('active');
        e.currentTarget.closest('form').classList.remove('active');
    }));
});

function displayTaskList(){
    const tasks = projectController.getCurrentProject().getTasks();
    todoWrapper.innerHTML = '';
    tasks.forEach((task) => {
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

    projectController.getCurrentProject().addTask(newTask);

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

function addNewProject(e){
    e.preventDefault();
    // console.log(projectController.getProjects());
    projectController.addProject(document.getElementById('projectTitle').value);

    displayForm(addProjectForm, addProjectButton, false);
    
    displayProjects();
}

function displayProjects(){
    const projectWrapper = document.getElementById('projectWrapper');
   const projects = projectController.getProjects();
   projectWrapper.innerHTML = '';

    projects.forEach((project, i) => {
        const projectButton = document.createElement('button');
        projectButton.classList.add('project-btn');
        projectButton.textContent = project.name;
        projectButton.dataset.projectId = i;
        projectButton.addEventListener('click', swapProjects);
        projectWrapper.appendChild(projectButton);
    });
}

function swapProjects(e){
    projectController.setCurrentProject(e);
    displayTaskList();
}