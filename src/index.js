import {createProject} from './createProject'
import {createTask} from './createTask'
import {bindEvent} from './bindEvents'


bindEvent();
let task1 = createTask('Chores', 'Do the laundry', '05/23/2022', 'low');
let tasks = [];
tasks.push(task1);
