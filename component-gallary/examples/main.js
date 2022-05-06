import Vue from 'vue'
import VueRouter from 'vue-router'
//vxe
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

//elementUi
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import routes from './router'

Vue.use(VXETable)
Vue.use(ElementUI);

Vue.config.productionTip = false

let instance = null
console.log(routes)
function render(props = {}){
  const { container, routerBase } = props
  const router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    mode: 'history',
    routes:routes
  })

  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

//动态加载publicPath
if(window.__POWERED_BY_QIANKUN_){
  //eslint-disable-next-line
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
export async function bootstrap(props){

}
export async function mount(props){
  render(props);
}
export async function unmount(props){
  instance.$destroy()
}
