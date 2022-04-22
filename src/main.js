import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import store from './store'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import directiveList from './directive/index'

console.log(directiveList)
directiveList.forEach(directive=>{
  Vue.directive(directive.name,{
    ...directive.config
  })
})

Vue.use(VXETable)
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
