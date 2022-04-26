.<template>
  <div  ref="desktopBack" class="full-height d-flex" >
    <div @mousedown="handleChangeCanvasState" class="app-map flex-column jc-sa">
      <div v-for='item in rowsNum' :key="item" :class="['d-flex','flex-ai-c','jc-sa','app-row-'+item]" :style="{ height:appHeight+'px'}">
        <div 
          v-for="num in columnsNum" 
          v-drag-box 
          :class="['full-height','app-column-'+num]" 
          @dragend="handleDragEnd" @dragenter="handleDragEnter(item,num)" 
          :key="num" 
          :style="{width:appWidth+'px'}"
        >
            <AppLink 
              @clickdown ='showCanvas=false'
              @move='showCanvas=false'
              @drag="handleDragApp(pageConfig[item*columnsNum+num],item,num)" 
              @click="handleActiveApp(pageConfig[item*columnsNum+num].appName)" 
              :class="{
                'app-active':activedApps.indexOf(pageConfig[item*columnsNum+num].appName)!==-1,
                'app-with-border':hasBorderApp===pageConfig[item*columnsNum+num].appName}" 
              @open="handleOpenApp(pageConfig[item*columnsNum+num].appIndex)" 
              v-if="pageConfig[item*columnsNum+num]" 
              :text='pageConfig[item*columnsNum+num].appName' 
              :icon='pageConfig[item*columnsNum+num].appIcon' 
            >
            </AppLink>
        </div>
      </div>
    </div>
      <DImage 
        class="app-background"
        canvas-id='desktop-back'  
        :height='canvasHeight' 
        :width='canvasWidth' 
        :src="require('@/assets/images/desktopImage/bg.jpg')"
         />
     <DRect :class="{'destop-canvas':true,'show-foremost':!showCanvas}" 
      draw-type='cover' 
      :height='canvasHeight' 
      :width='canvasWidth' 
      canvas-id='desktop-backimage'
      line-color='rgba(0,0,255,0.8)'
      bg-color='rgba(0,0,255,0.08)'
      :mouse-up-clear='true'
      @draw-end='handleSelectAPPs'
      @not-draw='showCanvas=false'
      :origin ='rectOrigin'
      :use-origin='true'
       />
  </div>
  
</template>

<script>
import AppLink from '@/components/app-link/app-link'
import DRect from "@/components/canvas/rect"
import DImage from "@/components/canvas/image"

export default {
  name:'home',
  components:{
   AppLink,DRect,DImage
  },
  data(){
    return {
      appWidth:70,//单个app格子宽度
      appHeight:90,//单个app格子高度
      rowsNum:0,//页面格子行数
      columnsNum:0,//页面格子列数
      appList:[//app列表
        {name:'app1',index:'/app1',icon:'APP.png',row:1,column:2},
        {name:'app2',index:'/app2',icon:'APP2.png',row:4,column:7},
        {name:'app3',index:'/app3',icon:'APP.png',row:5,column:9},
      ],
      targetRowIndex:0,
      targetColumnIndex:0,
      hasAppDrag :false,
      showCanvas:false,
      activedApps:[],
      hasBorderApp:'',//选中项加border
      canvasHeight:0,
      canvasWidth:0,
      rectOrigin:{}
    }
  },
  computed:{
    pageConfig(){
      let appMap=new Array(this.rowsNum*this.columnsNum)
      this.appList.forEach(app=>{
        let point = app.row*this.columnsNum+app.column
        appMap[point]={
          appName:app.name,
          appIcon:app.icon,
          appIndex:app.index,
        }
      })
      return appMap
    }
  },
  methods:{
    //获取视窗宽高
    getWindowSize(){
     let height = this.$refs.desktopBack.clientHeight
     let width = this.$refs.desktopBack.clientWidth
     return {
       height,
       width
     }
    },
    //初始化页面格子数.没有监听页面resize，目前默认窗口不变
    initPageInfo(){
      const { height, width }=this.getWindowSize()
      const rowsNum = parseInt(height / (this.appHeight+16))
      const columnsNum =parseInt(width/(this.appWidth+20))
      this.rowsNum=rowsNum
      this.columnsNum=columnsNum
    }, 
    handleActiveApp(app){
      this.activedApps=[app]
      this.hasBorderApp=app
    },
    // //点击空处
    // handleWindowClick(){
    //   this.activedApps=[]
    //   this.hasBorderApp=''
    // },
    // //右击空处
    // hanldeWindowRightClick(){
    //   this.activedApps=[]
    //   this.hasBorderApp=''
    // },
    //双击打开应用，后面会想做成弹框
    handleOpenApp(route){
      history.pushState(null,route,route)
    },
    //获取当前拖动的APP
    handleDragApp(info,row,column){
      this.draggingApp =  this.appList.find(v=>{return v.name==info.appName})
      this.hasAppDrag=true
      this.targetRowIndex = row
      this.targetColumnIndex = column
    },
    //暂存刚刚拖放经过的容器位置
    handleDragEnter(row,column){
      if((this.targetRowIndex!==row||this.targetColumnIndex!==column)&&this.pageConfig[row*this.columnsNum+column]){
        console.log( this.targetRowIndex,row)
        console.log( this.targetColumnIndex,column)
        console.log('目标格子有内容，不能放入')
      }else if((this.targetRowIndex!==row||this.targetColumnIndex!==column)&&!this.pageConfig[row*this.columnsNum+column]){
        //目标无内容
        this.targetRowIndex=row
        this.targetColumnIndex = column
      }
    },
    //拖放结束
    handleDragEnd(){
      //目标容器无内容
      if(this.hasAppDrag){
        this.draggingApp.row = this.targetRowIndex
        this.draggingApp.column =this.targetColumnIndex
      }
      this.hasAppDrag = false
    },
    //多个选中
    handleSelectAPPs(point){
      if(point){
        let minColumn = Math.floor(point[0].x/((this.appWidth+20)))
        let minRow = Math.floor(point[0].y/(this.appHeight+20))
        let maxColumn = Math.ceil(point[1].x/((this.appWidth+20)))
        let maxRow = Math.ceil(point[1].y/(this.appHeight+20))

        for(let row = minRow;row<maxRow;row++){
          for(let column =minColumn;column<maxColumn;column++){
             if(this.pageConfig[row*this.columnsNum+column]){
               this.activedApps.push(this.pageConfig[row*this.columnsNum+column].appName)
             }
          }
        }
      }
      this.showCanvas=false
    },
    handleChangeCanvasState(e){
      const { clientX, clientY } = e
      this.rectOrigin= {
        x:clientX,
        y:clientY
      }
      this.showCanvas=true
      this.activedApps=[]
      this.hasBorderApp=''
    }
  },
  created(){
   this.canvasWidth=window.document.body.clientWidth
   this.canvasHeight= window.document.body.clientHeight
  },
  mounted(){
     this.initPageInfo()
     window.onclick=this.handleWindowClick
     window.oncontextmenu=this.hanldeWindowRightClick
  },
  beforeDestroy(){
    window.onclick=null
  }
}
</script>

<style lang='scss' scoped>
.app-background {
  position:absolute;
  top:50%;
  transform: translate(0,-50%);
  user-select: none;
  z-index: -88;
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
.app-active{
  background-color: rgba($color: #fff, $alpha: 0.12);
  box-shadow: 0 0 2px white;
  color: cyan;
}
.app-with-border{
  border:0.2px solid rgba($color: #fff, $alpha: 0.6);
}
.destop-canvas{
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
}

</style>