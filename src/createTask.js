function createTask(title, description, dueDate, priority) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
    };
}

export {
    createTask
}