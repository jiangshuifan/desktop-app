import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import {registerMicroApps,start,setDefaultMountApp} from 'qiankun'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import directiveList from './directive/index'
import apps from './micro-app'

directiveList.forEach(directive=>{
  Vue.directive(directive.name,{
    ...directive.config
  })
})

Vue.use(VXETable)
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app');

registerMicroApps(apps,{
  beforeLoad: (app) => console.log('before load', app.name),
  beforeMount: [(app) => console.log('before mount', app.name)],
  afterMount :()=>{},
  beforeUnmount:()=>{},
  afterUnmount:[()=>{}]//可以是生命周期函数，也可以是生命周期数组
})

start()