import {cacheDom} from './cacheDom';
import { closeModal, openModal } from './modal';
import { appendTask } from './appendTask';
import { createTaskDOM, createProjectDOM } from "./createTask";
import { formatISO9075, isThisWeek, parseISO } from 'date-fns';

function bindEvent() {
    const cache = cacheDom();

    let tasks = JSON.parse(localStorage.getItem('tasks'));


    cache.tasksBtn.addEventListener('click', () => {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
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
        let tasks = JSON.parse(localStorage.getItem('tasks'));
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
        let tasks = JSON.parse(localStorage.getItem('tasks'));

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

        let projects = JSON.parse(localStorage.getItem('projectCount'));
        
        const projectList = document.querySelectorAll('.project-list');
        // console.log(projectList)
        if (projectList.length === 0) {

            for (const project in projects) {
                const projectDOM = createProjectDOM(project);
                cache.projectWrapper.appendChild(projectDOM)
            }
        } else {
            const projectList = document.querySelectorAll('.project-list');
            projectList.forEach(project => project.remove());
        }
        const newProjectList = document.querySelectorAll('.project-list');
        if (newProjectList !== undefined) {
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
        }
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
}

export {
    bindEvent
}