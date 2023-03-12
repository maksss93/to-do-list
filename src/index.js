import '@babel/polyfill'; // можливо не потрібно
import './index.html';
import './index.scss';


import { calc } from './modules/calc';
import AddTemplate from './modules/AddTemplate';

const testOptions = {
    templateClass: 'newTest_template',
    templateType: 'test_list',
}

const testTemplate = new AddTemplate(testOptions)

console.log(calc(6 ,7))
console.log(calc(4 ,7))
