function createTask(title, description, dueDate, priority, project) {
    let data = localStorage.getItem('tasks');
    let tasks = data ? JSON.parse(data) : [];
    const task = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        project: project != null ? project : 'none'
    };
    tasks.push(task);
    const taskDom = createTaskDOM(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(tasks);
    return taskDom
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
        const z = Array.from(JSON.parse(localStorage.getItem('tasks')));
        const taskList = Array.from(document.querySelectorAll('.task'));
        const taskIndex = taskList.indexOf(e.target.parentNode);
        console.log(z.splice(0, 1));
        console.log(z);
        localStorage.setItem('tasks', JSON.stringify(z));
        e.target.parentNode.remove();
    });
    return taskContainer
};

export {
    createTask,
    createTaskDOM
}