.<template>
  <div  ref="desktopBack" class="full-height d-flex" style="background-color:black">
    <div class="app-background">
       <img src="@/assets/images/desktopImage/bg.jpg" class=" full-width" alt="">
    </div>
    <div class="app-map flex-column jc-sa" >
      <div v-for='item in rowsNum' :key="item" class="d-flex flex-ai-c jc-sa" :style="{height:appHeight+'px'}">
        <div v-for="num in columnsNum" class="full-height cursor-pointer" @click="handleOpenApp(item,num)" :key="num" :style="{width:appWidth+'px','background-color':'white'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'home',
  data(){
    return {
      appWidth:60,
      appHeight:80,
      rowsNum:0,
      columnsNum:0,
      appList:[
        {name:'app1',index:'/app1',row:1,column:2},
        {name:'app2',index:'/app2',row:3,column:1},
        {name:'app3',index:'/app3',row:4,column:2},
      ]
    }
  },
  methods:{
    getWindowSize(){
     let height = this.$refs.desktopBack.clientHeight
     let width = this.$refs.desktopBack.clientWidth
     console.log(height,
       width)
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
    }, 
    windowResize(){
      window.onresize=()=>{

      }
    },
    handleOpenApp(row,column){
      console.log(row,column)
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
</style>