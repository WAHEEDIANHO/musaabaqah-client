// import Vue from "vue";
import {createRouter, createWebHistory} from 'vue-router'

// Vue.use(VueRouter)

// import Participants from './components/participant'
import Moderators from './components/views/moderators'
import Participants from './components/views/participant'
import Home from './components/views/HomePage'
import RegisterPage from "@/components/views/RegisterPage.vue";
import CompetitionPage from "@/components/views/CompetitionPage.vue";

const routes = [
    {path: '/participant', component: Participants},
    {path: '/moderator', component:  Moderators },
    {path: '/master-moderator', component:  Moderators },
    {path: '/register', component:  RegisterPage },
    {path: '/competition', component:  CompetitionPage },
    {path: '/', component: Home}
]

const router = createRouter({routes, history: createWebHistory()})

export default router