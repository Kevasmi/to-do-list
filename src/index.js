import {createProject} from './createProject'
import {createTask} from './createTask'

let task1 = createTask('Chores', 'Do the laundry', '05/23/2022', 'low');
let tasks = [];
tasks.push(task1);


console.log(tasks);
console.log(tasks[0].title);
console.log(tasks[0].description);
console.log(tasks[0].dueDate);
console.log(tasks[0].priority);