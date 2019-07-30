import app from './../src/app.riot'

import {component} from 'riot'

component(app)(document.querySelector('#root'), {
  message: 'Hello there'
})