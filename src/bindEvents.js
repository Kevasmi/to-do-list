import {cacheDom} from './cacheDom';
import { closeModal, openModal } from './modal';
import { appendTask } from './appendTask';

function bindEvent() {
    const cache = cacheDom();

    cache.projectBtn.addEventListener('click', () => {
        cache.projectWrapper.classList.toggle('height');
        cache.dropDownArrow.classList.toggle('rotate');
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
        console.log(localStorage.getItem('tasks'));
    });

    cache.taskCloseBtn.addEventListener('click', (e) => {
        // const z = JSON.parse(localStorage.getItem('tasks'));
        // const taskList = Array.from(document.querySelectorAll('.task'));
        // const taskIndex = taskList.indexOf(e.target.parentNode);
        // z.slice(taskIndex, 1);
        // localStorage.setItem('tasks', JSON.stringify(z));
        // e.target.parentNode.remove();
    });
};

export {
    bindEvent
}