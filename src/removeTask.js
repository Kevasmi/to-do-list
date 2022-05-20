import { projectSubtractCounter } from './projectCounter';

function removeTask(e) {
    const t = Array.from(JSON.parse(localStorage.getItem('tasks')));
    const taskList = Array.from(document.querySelectorAll('.task'));
    const taskIndex = taskList.indexOf(e.target.parentNode);
    t.splice(taskIndex, 1);
    localStorage.setItem('tasks', JSON.stringify(t));
    e.target.parentNode.remove();
}

function removeProjectDOM(e) {
    let counts = JSON.parse(localStorage.getItem('projectCount'));
    const targetProject = e.target.parentNode.querySelector('.project').textContent;
    const projectList = document.querySelectorAll('.project-list');
    counts = projectSubtractCounter(targetProject, counts);

    localStorage.setItem('projectCount', JSON.stringify(counts));
    
    if (counts[targetProject] <= 0) {
        delete counts[targetProject];
        localStorage.setItem('projectCount', JSON.stringify(counts));
        console.log(counts)
        projectList.forEach(project => {
            if (project.textContent == targetProject) {
                project.remove();
            }
        });
    }
    
}

export {
    removeTask,
    removeProjectDOM
}