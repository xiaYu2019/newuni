import Vue from 'vue'
import App from './App'
import uView from "./uview-ui"
import head from "./encapsulation/head/head.vue"

Vue.config.productionTip = false

Vue.component('pageHead',head)
App.mpType = 'app'
Vue.use(uView);

const app = new Vue({
    ...App
})
app.$mount()
