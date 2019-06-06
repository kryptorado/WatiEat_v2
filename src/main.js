import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
    iconfont: 'fa'

}).$mount('#app')
