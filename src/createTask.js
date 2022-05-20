import { removeProjectDOM, removeTask } from "./removeTask";
import { createCounter, projectSubtractCounter} from "./projectCounter";

function createTask(title, description, dueDate, priority, project) {
    let taskData = localStorage.getItem('tasks');
    let tasks = taskData ? JSON.parse(taskData) : [];
    // let projectData = localStorage.getItem('projectList');
    // let projects = projectData ? JSON.parse(projectData) : [];
    let countData = localStorage.getItem('projectCount');
    let counts = countData ? JSON.parse(countData) : {};

    const task = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        project: project != null ? project : 'none'
    };

    tasks.push(task);

    // if (!projects.some(check)) {
    //     projects.push(task.project)
    // }
    
    counts = createCounter(tasks);
    
    const taskDom = createTaskDOM(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('projectCount',JSON.stringify(counts));

    return taskDom
};

function createTaskDOM(task) {
    const taskContainer = document.createElement('div');
    const taskTitle = document.createElement('h3');
    const taskDescription = document.createElement('p');
    const dateProjectCont = document.createElement('div');
    const taskDueDate = document.createElement('p');
    const taskProject = document.createElement('p');
    const taskCloseBtn = document.createElement('button');

    taskContainer.classList.add('task', 'container', `${task.priority}`.toLowerCase());
    taskCloseBtn.classList.add('close-button');
    dateProjectCont.setAttribute('id', 'date-project-container');
    taskDueDate.classList.add('date');
    taskProject.classList.add('project');

    taskTitle.textContent = task.title;
    taskDescription.textContent = task.description;
    taskDueDate.textContent = task.dueDate;
    taskProject.textContent = task.project;
    taskCloseBtn.innerHTML = '&times;'

    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(dateProjectCont);
    taskContainer.appendChild(taskCloseBtn);
    dateProjectCont.appendChild(taskDueDate);
    dateProjectCont.appendChild(taskProject);

    taskCloseBtn.addEventListener('click', (e) => {
        removeProjectDOM(e);
        // let counts = JSON.parse(localStorage.getItem('projectCount'));
        // console.log(counts)
        // const targetProject = e.target.parentNode.querySelector('.project').textContent;
        // const projectList = document.querySelectorAll('.project-list');
        removeTask(e);

    //     counts = projectSubtractCounter(targetProject, counts);

    //     localStorage.setItem('projectCount', JSON.stringify(counts));

    //     console.log(projectList)
    //     // console.log(targetProject);
    //     // console.log(projectCount);
    //     // console.log(projectList);
    //     // console.log(taskProjectList)

    //     if (counts[targetProject] <= 0) {
    //         delete counts[targetProject];
    //         projectList.forEach(project => {
    //             if (project.textContent == targetProject) {
    //                 project.remove();
    //             };
    //         });
    //     } 
    });
    return taskContainer 
};

function createProjectDOM(project) {
    const projectName = document.createElement('h3');
    const projectNameContainer = document.createElement('div');

    projectNameContainer.classList.add('project-list');
    
    projectName.textContent = project;

    projectNameContainer.appendChild(projectName);

    return projectNameContainer
};

export {
    createTask,
    createTaskDOM,
    createProjectDOM
}