.<template>
  <div  ref="desktopBack" class="full-height d-flex" style="background-color:black">
    <div class="app-background">
       <img src="@/assets/images/desktopImage/bg.jpg" class=" full-width" alt="">
    </div>
    <div class="app-map flex-column jc-sa" >
      <div v-for='item in rowsNum' :key="item" :class="['d-flex','flex-ai-c','jc-sa','app-row-'+item]" :style="{height:appHeight+'px'}">
        <div v-for="num in columnsNum" :class="['full-height','app-column-'+num]"  @click="handleGetCurrentPosition(item,num)" :key="num" :style="{width:appWidth+'px'}">
          <AppLink  @open="handleOpenApp(pageConfig[item*columnsNum+num].appIndex)" v-if="pageConfig[item*columnsNum+num]" :text='pageConfig[item*columnsNum+num].appName' :icon='pageConfig[item*columnsNum+num].appIcon' ></AppLink>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import AppLink from '@/components/app-link/app-link'

export default {
  name:'home',
  components:{
   AppLink
  },
  data(){
    return {
      appWidth:60,
      appHeight:80,
      rowsNum:0,
      columnsNum:0,
      appList:[
        {name:'app1',index:'/app1',icon:'APP.png',row:1,column:2},
        {name:'app2',index:'/app2',icon:'APP2.png',row:3,column:1},
        {name:'app3',index:'/app3',icon:'APP.png',row:4,column:2},
      ],
      pageConfig:[]
    }
  },
  methods:{
    getWindowSize(){
     let height = this.$refs.desktopBack.clientHeight
     let width = this.$refs.desktopBack.clientWidth
     return {
       height,
       width
     }
    },
    initPageInfo(){
      const { height, width }=this.getWindowSize()
      const rowsNum = parseInt(height / (this.appHeight+16))
      const columnsNum =parseInt(width/(this.appWidth+16))
      console.log(rowsNum,columnsNum)
      this.rowsNum=rowsNum
      this.columnsNum=columnsNum
      this.appIconRender()
    }, 
    appIconRender(){
      let appMap=new Array(this.rowsNum*this.columnsNum)
      this.appList.forEach(app=>{
        let point = app.row*this.columnsNum+app.column
        appMap[point]={
          appName:app.name,
          appIcon:app.icon,
          appIndex:app.index
        }
      })
      this.pageConfig = appMap
    },
    handleOpenApp(route){
      history.pushState(null,route,route)
    },
    handleGetCurrentPosition (row,column){
      console.log(row,column)
    },
    handleStartDrag(e){
      console.log(e)
    }
  },
  created(){
   
  },
  mounted(){
     this.initPageInfo()
  },
  beforeDestroy(){
    window.onresize=null
  }
}
</script>

<style lang='scss' scoped>
.app-background {
  position:absolute;
  top:50%;
  transform: translate(0,-50%);
  user-select: none;
  // z-index: -1;
}
.app-map{
  padding: 10px;
  height: 100%;
  width: 100%;
  z-index: 999;
}
.has-app{
  box-sizing: border-box;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
}
.has-app:hover{
  box-shadow: 0 0 2px #aaa;
  border: 1px solid #aaa;
  background-color: rgba(255,255,255,0.16);
}
</style>