import { bindEvent } from "./bindEvents";
import { cacheDom } from "./cacheDom";
import { createTaskDOM } from "./createTask";

function renderPage() {
    const cache = cacheDom();
    if (localStorage.getItem("tasks") === null) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(task => {
            const taskDom = createTaskDOM(task);
            cache.activeTasksContainer.appendChild(taskDom);
        });
    };
    bindEvent();
};

export {
    renderPage
}