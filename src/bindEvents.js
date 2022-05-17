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

    cache.submitBtn.addEventListener('click', () => {
        appendTask();
    });

    cache.taskCloseBtn.addEventListener('click', (e) => {
        e.target.parentNode.remove();
    });
};

export {
    bindEvent
}