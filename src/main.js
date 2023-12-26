import { createApp } from 'vue'
import App from './App.vue'
// import 'materialize-css/dist/css/materialize.min.css'
// import 'material-design-icons/iconfont/material-icons.css'

// import './assets/css/all.min.css'
// import './assets/css/flaticon.css'
// import './assets/css/animate.min.css'
// import './assets/css/bootstrap.min.css'
// import './assets/css/jquery.fancybox.min.css'
// import './assets/css/jquery.bootstrap-touchspin.min.css'
// import './assets/css/perfect-scrollbar.css'
// import './assets/css/slick.css'
// import './assets/css/style.css'
// import './assets/css/responsive.css'
// import './assets/css/color.css'

// import $ from './assets/js/jquery';
// window.$ = $;
// import './assets/js/popper.min.js';
// import './assets/js/bootstrap.min.js';
// import './assets/js/wow.min.js';
// import './assets/js/counterup.min.js';
// import './assets/js/jquery.fancybox.min.js';
// import './assets/js/jquery.bootstrap-touchspin.min.js';
// import './assets/js/perfect-scrollbar.min.js';
// import './assets/js/slick.min.js';
// import './assets/js/musicplayer-min.js';
// import './assets/js/custom-scripts.js'


import router from './router'
import store from './store'

const app = createApp(App)

// Use the app instance to install the router and store
app.use(router)
app.use(store)

// Mount the app to the '#app' element
app.mount('#app')

