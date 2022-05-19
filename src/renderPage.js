import { bindEvent } from "./bindEvents";
import { cacheDom } from "./cacheDom";
import { createProjectDOM, createTaskDOM } from "./createTask";
import { projectCount } from "./projectCount";

function renderPage() {
    const cache = cacheDom();
    if (localStorage.getItem('tasks') === null) {
        let tasks = [];
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(task => {
            const taskDOM = createTaskDOM(task);
            cache.activeTasksContainer.appendChild(taskDOM);
        });
    };
    if (localStorage.getItem('projectList') === null) {
        let projectList = [];
        localStorage.setItem('projectList', JSON.stringify(projectList));
    } else {
        let projects = JSON.parse(localStorage.getItem('projectList'));
        projects.forEach(project => {
            const projectDOM = createProjectDOM(project);
            cache.projectWrapper.appendChild(projectDOM);
        });
    };
    bindEvent();
    projectCount();
};

export {
    renderPage
}