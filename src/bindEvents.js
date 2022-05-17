import {cacheDom} from './cacheDom';
import { closeModal, openModal } from './modal';
import {createTask} from './createTask';
import { appendTask } from './appendTask';

function bindEvent() {
    const cache = cacheDom();

    cache.projectBtn.addEventListener('click', () => {
        cache.projectWrapper.classList.toggle('height');
        cache.dropDownArrow.classList.toggle('rotate');
    });

    cache.newTaskBtn.addEventListener('click', () => {
        // cache.modalContainer.classList.add('show');
        openModal();
    });
    
    cache.modalCloseBtn.addEventListener('click', () => {
        // cache.modalContainer.classList.remove('show');
        closeModal();
    });

    cache.submitBtn.addEventListener('click', () => {
        appendTask();
    });

};

export {
    bindEvent
}