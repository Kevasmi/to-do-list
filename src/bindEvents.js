import {cacheDom} from './cacheDom';
import { closeModal, openModal } from './modal';
import { appendTask } from './appendTask';
import { createTaskDOM } from "./createTask";
import { formatISO9075, isThisWeek, parse, parseISO } from 'date-fns';

function bindEvent() {
    const cache = cacheDom();

    cache.tasksBtn.addEventListener('click', () => {
        const activeTasks = document.querySelectorAll('.task');
        for (const task of activeTasks) {
            task.remove();
        }
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(task => {
            const taskDom = createTaskDOM(task);
            cache.activeTasksContainer.appendChild(taskDom);
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
            const taskDom = createTaskDOM(task);
            cache.activeTasksContainer.appendChild(taskDom);
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
            const taskDom = createTaskDOM(task);
            cache.activeTasksContainer.appendChild(taskDom);
        });

        const parsedTasks = tasks.map(task => parseISO(task.dueDate));
        let parsedString = parseISO(tasks[0].dueDate);
        let result = isThisWeek(parsedString);

        // let filteredTasks = parsedTasks.filter(task => isThisWeek(task.dueDate));
        console.log(filteredTasks);
        console.log(tasks);
    });

    cache.projectBtn.addEventListener('click', () => {
        cache.projectWrapper.classList.toggle('height');
        cache.dropDownArrow.classList.toggle('rotate');
        const activeTasks = document.querySelectorAll('.task');
        for (const task of activeTasks) {
            task.remove();
        }
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(task => {
            const taskDom = createTaskDOM(task);
            cache.activeTasksContainer.appendChild(taskDom);
            console.log(cache.activeTasksContainer)
        });
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