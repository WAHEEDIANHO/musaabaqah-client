// import Vue from "vue";
import {createRouter, createWebHistory} from 'vue-router'

// Vue.use(VueRouter)

// import Participants from './components/participant'
import Moderators from './components/views/moderators'
import Participants from './components/views/participant'
import Home from './components/views/HomePage'

const routes = [
    {path: '/participant', component: Participants},
    {path: '/moderator', component:  Moderators },
    {path: '/', component: Home}
]

const router = createRouter({routes, history: createWebHistory()})

export default router