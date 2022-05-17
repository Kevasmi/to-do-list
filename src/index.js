import {bindEvent} from './bindEvents';
import {makeTaskArray} from './makeGlobalArray';
import { cacheDom } from './cacheDom';
import { createTask } from './createTask';

const cache = cacheDom();
const tasks = makeTaskArray();
bindEvent();
console.log(tasks);
const z = JSON.parse(localStorage.getItem('tasks'));
console.log(z[0].title);
