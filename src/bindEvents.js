import {cacheDom} from './cacheDom'

function bindEvent() {
    const cache = cacheDom();

    cache.projectBtn.addEventListener('click', () => {
        cache.projectWrapper.classList.toggle('height');
        cache.dropDownArrow.classList.toggle('rotate');
    });

    cache.newTaskBtn.addEventListener('click', () => {
        cache.modalContainer.classList.add('show');
    });
    
    cache.modalCloseBtn.addEventListener('click', () => {
        cache.modalContainer.classList.remove('show');
    });

    cache.submitBtn.addEventListener('click', () => {
        console.log(cache.titleInput.value);
    });

};

export {
    bindEvent
}