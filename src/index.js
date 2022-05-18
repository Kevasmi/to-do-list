import {bindEvent} from './bindEvents';

bindEvent();
console.log(tasks);
const z = JSON.parse(localStorage.getItem('tasks'));
console.log(z[0].title);
