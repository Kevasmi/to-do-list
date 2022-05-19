function projectCount() {
    let counts = {};
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(task => counts[task.project] = (counts[task.project] || 0) + 1 );
    return counts;
};

export {
    projectCount
}