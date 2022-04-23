.<template>
  <div  ref="desktopBack" class="full-height d-flex" style="background-color:black">
    <div class="app-background">
       <img src="@/assets/images/desktopImage/bg.jpg" class=" full-width" alt="">
    </div>
    <div class="app-map flex-column jc-sa" >
      <div v-for='item in rowsNum' :key="item" :class="['d-flex','flex-ai-c','jc-sa','app-row-'+item]" :style="{height:appHeight+'px'}">
        <div v-for="num in columnsNum" v-drag-box :class="['full-height','app-column-'+num]" @dragend="handleDragEnd" @dragenter="handleDragEnter(item,num)" :key="num" :style="{width:appWidth+'px'}">
          <AppLink @drag="handleDragApp(pageConfig[item*columnsNum+num],item,num)" @open="handleOpenApp(pageConfig[item*columnsNum+num].appIndex)" v-if="pageConfig[item*columnsNum+num]" :text='pageConfig[item*columnsNum+num].appName' :icon='pageConfig[item*columnsNum+num].appIcon' ></AppLink>
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
      appWidth:60,//单个app格子宽度
      appHeight:80,//单个app格子高度
      rowsNum:0,//页面格子行数
      columnsNum:0,//页面格子列数
      appList:[//app列表
        {name:'app1',index:'/app1',icon:'APP.png',row:1,column:2},
        {name:'app2',index:'/app2',icon:'APP2.png',row:3,column:1},
        {name:'app3',index:'/app3',icon:'APP.png',row:4,column:2},
      ],
      targetRowIndex:0,
      targetColumnIndex:0,
      hasAppDrag :false
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
      const columnsNum =parseInt(width/(this.appWidth+16))
      console.log(rowsNum,columnsNum)
      this.rowsNum=rowsNum
      this.columnsNum=columnsNum
    }, 
    //双击打开应用，后面会想做成弹框
    handleOpenApp(route){
      history.pushState(null,route,route)
    },
    //获取当前拖动的APP
    handleDragApp(info,row,column){
      this.draggingApp=  this.appList.find(v=>{return v.name==info.appName})
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
      // if((this.targetRowIndex!==row||this.targetColumnIndex!==column)&&this.pageConfig[this.targetRowIndex*this.columnsNum+this.targetRowIndex]){
      //   console.log(this.pageConfig[this.targetRowIndex*this.columnsNum+this.targetRowIndex])
      //   console.log( this.targetRowIndex,row)
      //   console.log( this.targetColumnIndex,column)
      // }
    },
    //拖放结束
    handleDragEnd(){
      //目标容器无内容
      if(this.hasAppDrag){
        this.draggingApp.row = this.targetRowIndex
        this.draggingApp.column =this.targetColumnIndex
      }
      this.hasAppDrag = false
    }
    //多个选中
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