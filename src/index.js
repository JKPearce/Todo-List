import "./scss/main.scss";

const addTaskButton = document.getElementById('addTaskBtn');
const addTaskForm = document.getElementById('newTaskForm');

const toggleTaskForm = (toggle) => {
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
    toggleTaskForm(true);
});

const saveTaskBtn = document.getElementById('submitNewTask');
const cancelNewTask = document.getElementById('cancelNewTask');

saveTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //save user data to a new task class from import

    toggleTaskForm(false);
});

cancelNewTask.addEventListener('click', toggleTaskForm(false));


