let microApps

if(!localStorage.getItem('deskTopApp-position')){
  microApps =    [
    {
      name:'组件库',
      entry:process.env.VUE_APP_LIBRARY,
      activeRule:'/component',
      props:{
        routerBase:'/component',
        icon:'APP.png',
        row:5,column:9,
      }
    },
    {
      name:'照片',
      entry:process.env.VUE_APP_PHOTO,
      activeRule:'/photo',
      props:{
        routerBase:'/photo',
        icon:'APP2.png',
        row:9,column:9,
      }
    }
  ]
  localStorage.setItem('deskTopApp-position',JSON.stringify(microApps))
}
microApps = JSON.parse(localStorage.getItem('deskTopApp-position'))

const apps = microApps.map(app=>{
  return {
    ...app,
    container:'#appViewport',
  }
})

export default apps
