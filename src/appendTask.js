import { cacheDom } from "./cacheDom";
import { createProjectDOM, createTask } from "./createTask";
import { closeModal } from "./modal";

function appendTask() {
    const cache = cacheDom();
    const title = cache.titleInput.value;
    const description = cache.descInput.value;
    const dueDate = cache.dateInput.value;
    const priority = cache.priorityInput.value;
    const project = cache.projectInput.value;
    const task = createTask(title, description, dueDate, priority, project);
    cache.activeTasksContainer.appendChild(task);
    const projectName = createProjectDOM(project);
    const projectList = Array.from(cache.projectList);
    if (projectList.length == 0) {
        cache.projectWrapper.appendChild(projectName);
    } else {
        const check = (project) => {
            return project.textContent == projectName.textContent
        }
        if (!projectList.some(check)) {
            cache.projectWrapper.appendChild(projectName);
        }
    }
    closeModal();
};

export {
    appendTask
}