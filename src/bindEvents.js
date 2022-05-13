function bindEvent() {
    const button = document.querySelector('.button');
    const modalContainer = document.querySelector('.modal-container');
    const modalCloseBtn = document.querySelector('.close-btn');
    button.addEventListener('click', () => {
        console.log('hello');
    })
    
    button.addEventListener('click', () => {
        modalContainer.classList.add('show');
    })
    
    modalCloseBtn.addEventListener('click', () => {
        modalContainer.classList.remove('show');
    })
};

export {
    bindEvent
}