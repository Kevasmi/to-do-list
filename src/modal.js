function openModal() {
    cache.modalContainer.classList.add('show');
};

function closeModal() {
    cache.modalContainer.classList.remove('show');
};

export {
    openModal,
    closeModal
}