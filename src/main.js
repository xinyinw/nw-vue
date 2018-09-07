// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUi from 'muse-ui'
import MuseUimMessage from 'muse-ui-message'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui-message/dist/muse-ui-message.css'
import theme from 'muse-ui/lib/theme'
import 'material-design-icons/iconfont/material-icons.css'
import Toast from 'muse-ui-toast'

Vue.config.productionTip = false
Vue.use(Toast)
Vue.use(MuseUi)
Vue.use(MuseUimMessage)
theme.use('dark')
// for auto update
import {checkUpdate} from '@/utils/update.js'

checkUpdate()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
