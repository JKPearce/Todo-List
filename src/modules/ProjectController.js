import Project from "./Project";

export default class ProjectController{
    constructor(){
        this.projects = [];
        this.projects.push(new Project("Default"));
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
}