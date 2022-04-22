<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/deskPage.vue'
export default {
  name: 'App',
  components: {
    Home
  },
  data(){
    return {
      appWidth:20,
      appHeight:30
    }
  },
  methods:{
    getWindowSIze(){}
  }
}
</script>

<style>
@import './assets/style/common.css';
#app{
  height: 100vh;
}
</style>
