
import drag from './src/main.vue'

drag.install=function(Vue){
  Vue.component(drag.name,drag)
}

export default drag
