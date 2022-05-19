function createTask(title, description, dueDate, priority, project) {
    let taskData = localStorage.getItem('tasks');
    let tasks = taskData ? JSON.parse(taskData) : [];
    let projectData = localStorage.getItem('projectList');
    let projects = projectData ? JSON.parse(projectData) : [];
    const task = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        project: project != null ? project : 'none'
    };
    const check = (project) => {
        return project == task.project
    }
    tasks.push(task);
    if (!projects.some(check)) {
        projects.push(task.project)
    }
    const taskDom = createTaskDOM(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('projectList', JSON.stringify(projects));
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
    taskContainer.classList.add('task', 'container', `${task.priority}`.toLowerCase());
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
        const t = Array.from(JSON.parse(localStorage.getItem('tasks')));
        const taskList = Array.from(document.querySelectorAll('.task'));
        const taskIndex = taskList.indexOf(e.target.parentNode);
        t.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(t));
        e.target.parentNode.remove();
    });
    return taskContainer 
};

function createProjectDOM(project) {
    const projectName = document.createElement('h3');
    const projectNameContainer = document.createElement('div');
    projectNameContainer.classList.add('project-list');
    projectName.textContent = project;
    projectNameContainer.appendChild(projectName);
    return projectNameContainer
};

export {
    createTask,
    createTaskDOM,
    createProjectDOM
}