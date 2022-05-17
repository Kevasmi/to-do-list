import { cacheDom } from "./cacheDom";
import { createTask } from "./createTask";
import { closeModal } from "./modal";

function appendTask() {
    const cache = cacheDom();
    const title = cache.titleInput.value;
    const description = cache.descInput.value;
    const dueDate = cache.dateInput.value;
    const priority = cache.priorityInput.value;
    const task = createTask(title, description, dueDate, priority);
    console.log(task);
    cache.activeTasksContainer.appendChild(task);
    // cache.modalContainer.classList.remove('show');
    closeModal();
}

export {
    appendTask
}