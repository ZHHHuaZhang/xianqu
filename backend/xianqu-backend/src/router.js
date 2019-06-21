
import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import Digital from './components/Digital.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/foo', name: 'foo', component: HelloWorld },
        {path:'/',name:'digital',component:Digital},
    ]
})