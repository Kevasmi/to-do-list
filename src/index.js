import {createTask} from './createTask'
import {bindEvent} from './bindEvents'
import {cacheDom} from './cacheDom';

const cache = cacheDom();
bindEvent();
let task1 = createTask('Chores', 'Do the laundry', '05/23/2022', 'low');
let tasks = [];
tasks.push(task1);