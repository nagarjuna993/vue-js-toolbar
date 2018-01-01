import Vue from 'vue'
import Toolbar from './Toolbar.vue'

const plugin = {
  install(Vue, options) {
    Vue.component('Toolbar', Toolbar)
  }
}

export default plugin
