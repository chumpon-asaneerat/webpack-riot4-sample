import '@riotjs/hot-reload'
import {component} from 'riot'

import designer from './tags/designer.tag'

component(designer)(document.getElementById('designer'), { title: 'Hi there!' })
