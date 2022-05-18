function cacheDom() {
    const tasksBtn = document.querySelector('.tasks');
    const todayBtn = document.querySelector('.today');
    const weekBtn = document.querySelector('.week');
    const projectWrapper = document.querySelector('.project-menu');
    const projectBtn = document.querySelector('.projects');
    const dropDownArrow = document.querySelector('.drop-down');
    const tasksContainer = document.querySelector('.tasks-container');
    const activeTasksContainer = document.querySelector('.active-tasks');
    const newTaskBtn = document.querySelector('.new-task');
    const modalContainer = document.querySelector('.modal-container');
    const modalCloseBtn = document.querySelector('.close-btn');
    const form = document.querySelector('form');
    const titleInput = document.querySelector('#title');
    const descInput = document.querySelector('#description');
    const dateInput = document.querySelector('#due-date');
    const priorityInput = document.querySelector('#priority');
    const projectInput = document.querySelector('#project');
    const submitBtn = document.querySelector('#submit-btn');
    const taskCloseBtn = document.querySelector('.close-button');
    return {tasksBtn, todayBtn, weekBtn, projectWrapper, projectBtn, dropDownArrow, tasksContainer, activeTasksContainer, newTaskBtn, modalContainer, modalCloseBtn, form, titleInput, descInput, dateInput, priorityInput, projectInput, submitBtn, taskCloseBtn}
};

export {
    cacheDom
}