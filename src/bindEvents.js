import {cacheDom} from './cacheDom'
import { closeModal, openModal } from './modal';

function bindEvent() {
    const cache = cacheDom();

    cache.projectBtn.addEventListener('click', () => {
        cache.projectWrapper.classList.toggle('height');
        cache.dropDownArrow.classList.toggle('rotate');
    });

    cache.newTaskBtn.addEventListener('click', () => {
        // openModal();
        cache.modalContainer.classList.add('show');
    });
    
    cache.modalCloseBtn.addEventListener('click', () => {
        // closeModal();
    cache.modalContainer.classList.remove('show');
    });

    cache.submitBtn.addEventListener('click', () => {
        // event.preventDefault();
        // const title = cache.titleInput.value;
        // const description = cache.descInput.value;
        // const dueDate = cache.dateInput.value;
        // const priority = cache.priorityInput.value;
        // const task = createTask(title, description, dueDate, priority);
        // console.log(task);
        // cache.activeTasksContainer.appendChild(task);
    });

};

export {
    bindEvent
}