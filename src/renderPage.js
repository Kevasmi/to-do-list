import { bindEvent } from "./bindEvents";
import { cacheDom } from "./cacheDom";
import { createTaskDOM } from "./createTask";

function renderPage() {
    const cache = cacheDom();
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(task => {
        const taskDom = createTaskDOM(task);
        cache.activeTasksContainer.appendChild(taskDom);
        console.log(taskDom);
    });
    bindEvent();
    console.log(tasks);
};

export {
    renderPage
}