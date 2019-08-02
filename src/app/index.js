import '@riotjs/hot-reload'
import {component, register, mount} from 'riot'

import app from './tags/app.tag'

//component(app)(document.getElementById('app'), { title: 'Hi there!' })
//console.log('register app tag');
let r = register('app', app)
//console.log('register result:', r);
mount('app', { title: 'Hi there!' })
