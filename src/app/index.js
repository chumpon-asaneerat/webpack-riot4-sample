import '@riotjs/hot-reload'
import {component} from 'riot'

import app from './tags/app.tag'

component(app)(document.getElementById('app'), { title: 'Hi there!' })
