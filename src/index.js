import '@babel/polyfill'; // мижливо не потрібно
import './index.html';
import './index.scss';

import { calc } from './modules/calc';

console.log(calc(6 ,7))
console.log(calc(4 ,7))
