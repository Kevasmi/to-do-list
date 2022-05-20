import { bindEvent } from "./bindEvents";
import { cacheDom } from "./cacheDom";
import { createProjectDOM, createTaskDOM } from "./createTask";
import { createCounter } from "./projectCounter";

function renderPage() {
    const cache = cacheDom();
    let tasks = [];
    
    if (localStorage.getItem('tasks') == undefined || localStorage.getItem('tasks').length == 0) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(task => {
            const taskDOM = createTaskDOM(task);
            cache.activeTasksContainer.appendChild(taskDOM);
        });
    };
    
    // if (localStorage.getItem('projectList') == undefined || localStorage.getItem('projectList').length == 0) {
    //     let projectList = [];
    //     localStorage.setItem('projectList', JSON.stringify(projectList));
    // };
    // } else {
        //     let projects = JSON.parse(localStorage.getItem('projectList'));
        //     projects.forEach(project => {
            //         const projectDOM = createProjectDOM(project);
            //         cache.projectWrapper.appendChild(projectDOM);
            //     });
            // };
    if (localStorage.getItem('projectCount') === null) {
        let projectCount = createCounter(tasks);
        console.log(projectCount)
        localStorage.setItem('projectCount', JSON.stringify(projectCount));
        
    };
    bindEvent();
};

export {
    renderPage
}