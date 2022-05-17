function createTask(title, description, dueDate, priority, project) {
    const task = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        project: project != null ? project : undefined
    };
    createTaskDOM(task);
    return task
};

function createTaskDOM(task) {
};

export {
    createTask
}