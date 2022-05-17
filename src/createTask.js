function createTask(title, description, dueDate, priority, project) {
    const task = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        project: project != null ? project : 'none'
    };
    return createTaskDOM(task);
};

function createTaskDOM(task) {
    const taskContainer = document.createElement('div');
    const taskTitle = document.createElement('h3');
    const taskDescription = document.createElement('p');
    const dateProjectCont = document.createElement('div');
    const taskDueDate = document.createElement('p');
    const taskProject = document.createElement('p');
    const taskCloseBtn = document.createElement('button');
    taskContainer.classList.add('task', 'container');
    taskCloseBtn.classList.add('close-button');
    dateProjectCont.setAttribute('id', 'date-project-container');
    taskDueDate.classList.add('date');
    taskProject.classList.add('project');
    taskTitle.textContent = task.title;
    taskDescription.textContent = task.description;
    taskDueDate.textContent = task.dueDate;
    taskProject.textContent = task.project;
    taskCloseBtn.innerHTML = '&times;'
    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(dateProjectCont);
    taskContainer.appendChild(taskCloseBtn);
    dateProjectCont.appendChild(taskDueDate);
    dateProjectCont.appendChild(taskProject);
    taskCloseBtn.addEventListener('click', (e) => {
        e.target.parentNode.remove();
    });
    return taskContainer
};

export {
    createTask
}