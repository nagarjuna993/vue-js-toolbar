import Vue from 'vue'
import App from './App.vue'
import Toolbar from 'vue-js-toolbar'
import ToggleButton from 'vue-js-toggle-button'

Vue.use(ToggleButton)
Vue.use(Toolbar)

new Vue({
  el: '#app',
  render: h => h(App)
})
