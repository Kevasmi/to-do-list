import {cacheDom} from './cacheDom';
import { closeModal, openModal } from './modal';
import { appendTask } from './appendTask';
import { createTaskDOM } from "./createTask";
import { formatISO9075, isThisWeek, parseISO } from 'date-fns';

function bindEvent() {
    const cache = cacheDom();

    cache.tasksBtn.addEventListener('click', () => {
        const activeTasks = document.querySelectorAll('.task');
        for (const task of activeTasks) {
            task.remove();
        }
        let tasks = JSON.parse(localStorage.getItem('tasks'));
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
        let tasks = JSON.parse(localStorage.getItem('tasks'));
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
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(task => task.dueDateISO = parseISO(task.dueDate));
        let filteredTasks =  tasks.filter(task => isThisWeek(task.dueDateISO));
        filteredTasks.forEach(task => {
            const taskDOM = createTaskDOM(task);
            cache.activeTasksContainer.appendChild(taskDOM);
        });
    });

    cache.projectBtn.addEventListener('click', () => {
        cache.projectWrapper.classList.toggle('height');
        cache.dropDownArrow.classList.toggle('rotate');
        const projectList = document.querySelectorAll('.project-list');
        projectList.forEach(project => cache.projectWrapper.appendChild(project));
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