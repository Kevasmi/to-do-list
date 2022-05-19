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
        console.log(projectList)
        let count = 0;
        if (projectList.length == 0) {
            projects.forEach(project => {
                count++
                const projectDOM = createProjectDOM(project);
                cache.projectWrapper.appendChild(projectDOM);
                console.log(project);
                // console.log(tasks[count].project);
                // project.addEventListener('click', project => {
                //     if (project === tasks[count].project) {
                //         const taskDOM = createTaskDOM(task[count]);
                //         cache.activeTasksContainer.appendChild(taskDOM);
                //     };
                // });
            });
        };
        projectList.forEach(project => project.remove());
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