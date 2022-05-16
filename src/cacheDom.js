function cacheDom() {
    const tasksBtn = document.querySelector('.tasks');
    const todayBtn = document.querySelector('.today');
    const weekBtn = document.querySelector('.week');
    const projectWrapper = document.querySelector('.project-menu');
    const projectBtn = document.querySelector('.projects');
    const dropDownArrow= document.querySelector('.drop-down');
    const newTaskBtn = document.querySelector('.new-task-button');
    const modalContainer = document.querySelector('.modal-container');
    const modalCloseBtn = document.querySelector('.close-btn');
    const titleInput = document.querySelector('#title');
    const descInput = document.querySelector('#description');
    const dateInput = document.querySelector('#due-date');
    const priorityInput = document.querySelector('#priority');
    const submitBtn = document.querySelector('#submit-btn');
    return {tasksBtn, todayBtn, weekBtn, projectWrapper, projectBtn, dropDownArrow, newTaskBtn, modalContainer, modalCloseBtn, titleInput, descInput, dateInput, priorityInput, submitBtn}
};

export {
    cacheDom
}