
import grid from './src/main.vue'

grid.install=function(Vue){
  Vue.component(grid.name,grid)
}

export default grid
