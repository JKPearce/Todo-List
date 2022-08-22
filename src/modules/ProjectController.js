import Project from "./Project";

export default class ProjectController{
    constructor(){
        this.projects = [];
        this.projects.push(new Project("Home"));
        this.projects.push(new Project("Today"));
        this.projects.push(new Project("This Week"));
    }

    getProjects(){
        return this.projects;
    }

    setProject(projects){
        this.projects = projects
    }

    addProject(newProject){
        this.projects.push(new Project(newProject));
    }

    getCurrentProject(){
        const selectedProject = document.querySelector('.selected');
        const projectId = parseInt(selectedProject.dataset.projectId);
        return this.projects[projectId];
    }

    setCurrentProject(e){
        document.querySelectorAll('.selected').forEach(button=>{
            button.classList.remove('selected');
        });
        e.target.classList.add('selected');
    }
}