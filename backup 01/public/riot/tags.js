let app = require('./public/riot/app.riot').default;
let {component} = require('riot');


//import App from './public/riot/app.riot'
//import Todo from './public/riot/todo.riot'
//import {component} from 'riot'

component(app)(document.querySelector('app'), {
  message: 'Hello there'
})