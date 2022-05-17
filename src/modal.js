import { cacheDom } from "./cacheDom";

const cache = cacheDom();

function openModal() {
    cache.modalContainer.classList.add('show');
    document.body.style.pointerEvents = 'none';
};

function closeModal() {
    cache.modalContainer.classList.remove('show');
    document.body.style.pointerEvents = 'auto';
    cache.titleInput.value = '';
    cache.descInput.value = '';
    cache.dateInput.value = '';
    cache.priorityInput.value = '--Please choose an option--';
    cache.projectInput.value = '';
};

export {
    openModal,
    closeModal
}