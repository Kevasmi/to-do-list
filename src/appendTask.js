import { cacheDom } from "./cacheDom";
import { createProjectDOM, createTask, createTaskDOM } from "./createTask";
import { closeModal } from "./modal";

function appendTask() {
    const cache = cacheDom();

    let tasks = JSON.parse(localStorage.getItem('tasks'));

    const title = cache.titleInput.value;
    const description = cache.descInput.value;
    const dueDate = cache.dateInput.value;
    const priority = cache.priorityInput.value;
    const project = cache.projectInput.value;


    const task = createTask(title, description, dueDate, priority, project);

    tasks = JSON.parse(localStorage.getItem('tasks'));

    cache.activeTasksContainer.appendChild(task);

    const projectName = createProjectDOM(project);
    
    cache.projectWrapper.appendChild(projectName);
    


    const newProjectList = document.querySelectorAll('.project-list');

    if (newProjectList != undefined && newProjectList.length != 0) {
        newProjectList.forEach(project => project.addEventListener('click', (e) => {
            const activeTasks = document.querySelectorAll('.task');
            for (const task of activeTasks) {
                task.remove();
            };
            console.log(tasks);
            let filteredTasks = tasks.filter(task => task.project === e.target.textContent)
            filteredTasks.forEach(task => {
                const taskDOM = createTaskDOM(task);
                cache.activeTasksContainer.appendChild(taskDOM);
            });
        }));
    }

    closeModal();
};

export {
    appendTask
}