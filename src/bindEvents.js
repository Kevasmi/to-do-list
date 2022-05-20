import {cacheDom} from './cacheDom';
import { closeModal, openModal } from './modal';
import { appendTask } from './appendTask';
import { createTaskDOM, createProjectDOM } from "./createTask";
import { formatISO9075, isThisWeek, parseISO } from 'date-fns';

function bindEvent() {
    const cache = cacheDom();
    let projects = JSON.parse(localStorage.getItem('projectList'));
    let tasks = JSON.parse(localStorage.getItem('tasks'));

    cache.tasksBtn.addEventListener('click', () => {
        const activeTasks = document.querySelectorAll('.task');
        for (const task of activeTasks) {
            task.remove();
        }
        tasks.forEach(task => {
            const taskDOM = createTaskDOM(task);
            cache.activeTasksContainer.appendChild(taskDOM);
        });

    });

    cache.todayBtn.addEventListener('click', () => {
        const activeTasks = document.querySelectorAll('.task');
        for (const task of activeTasks) {
            task.remove();
        }
        const filteredTasks = tasks.filter(task => task.dueDate == formatISO9075(new Date(), { representation: 'date' }));
        filteredTasks.forEach(task => {
            const taskDOM = createTaskDOM(task);
            cache.activeTasksContainer.appendChild(taskDOM);
        });

    });

    cache.weekBtn.addEventListener('click', () => {
        const activeTasks = document.querySelectorAll('.task');
        for (const task of activeTasks) {
            task.remove();
        }
        tasks.forEach(task => task.dueDateISO = parseISO(task.dueDate));
        let filteredTasks =  tasks.filter(task => isThisWeek(task.dueDateISO));
        filteredTasks.forEach(task => {
            const taskDOM = createTaskDOM(task);
            cache.activeTasksContainer.appendChild(taskDOM);
        });
    });

    cache.projectBtn.addEventListener('click', () => {
        cache.dropDownArrow.classList.toggle('rotate');
        const projectList = document.querySelectorAll('.project-list');
        let count = 0;
        if (projectList.length == 0) {
            let filteredProjects = projects.filter(a => a);
            filteredProjects.forEach(project => {
                count++
                const projectDOM = createProjectDOM(project);
                cache.projectWrapper.appendChild(projectDOM);
                console.log(projectList[count]);
                    });
            const newProjectList = document.querySelectorAll('.project-list');
            console.log(newProjectList)
        } else {
            projectList.forEach(project => project.remove());
        };
        const newProjectList = document.querySelectorAll('.project-list');
        if (typeof newProjectList !== undefined) {
            console.log(newProjectList)
            newProjectList.forEach(project => project.addEventListener('click', (e) => {
                const activeTasks = document.querySelectorAll('.task');
                for (const task of activeTasks) {
                    task.remove();
                };
                let filteredTasks = tasks.filter(task => task.project === e.target.textContent)
                filteredTasks.forEach(task => {
                    const taskDOM = createTaskDOM(task);
                    cache.activeTasksContainer.appendChild(taskDOM);
                });
            }));
        };
    });

    cache.newTaskBtn.addEventListener('click', () => {
        openModal();
    });
    
    cache.modalCloseBtn.addEventListener('click', () => {
        closeModal();
    });

    cache.form.addEventListener('submit', (e) => {
        e.preventDefault();
        appendTask();
    });
};

export {
    bindEvent
}