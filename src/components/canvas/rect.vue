.<template>
  <canvas :id='canvasId' :height="parseInt(height)" :width="parseInt(width)"></canvas>
</template>

<script>
export default {
  data(){
    return{
      isDraw:false,
      startX:0,
      startY:0,
      paintInfo:null,
      drawTypeList:['cover','attach']
    }
  },
  props:{
    canvasId:{
      type:String,
      required:true
    },
    width:{
      type:[String,Number],
    },
    height:{
      type:[String,Number],
    },
    drawType:{
      type:String,
      default(){
        return 'attach'
      }
    },
    lineColor:{
      type:String,
      default(){
        return '#fff'
      }
    },
    bgColor:{
      type:String,
      default(){
        return 'transparent'
      }
    },
    mouseUpClear:{
      type:Boolean,
      default(){
        return false
      }
    },
    origin:{
      type:Object,
      default(){
        return {
          x :0,
          y: 0
        }
      }
    },
    useOrigin:{
      type:Boolean,
      default(){
        return  false
      }
    }
  },
  computed:{
    changeSite(){
      return this.origin
    }
  },
  methods:{
    //得到绘制的长方形左上点后右下点
    handleCountPointSite(a,b,c,d){
        let site 
        if (c > a && d > b) {
          site = [{x:a,y:b},{x:c,y:d}]
        } else if (c > a && d < b) {
          site = [{x:a,y:d},{x:c,y:b}]
        } else if (c < a && d > b) {
          site = [{x:c,y:b},{x:a,y:d}]
        } else if (c < a && d < b) {
          site = [{x:c,y:d},{x:a,y:b}]
        }
        return site
    },
  },
  mounted(){
    const container = document.getElementById(this.canvasId)
    const ctx = container.getContext('2d')
    if(!this.useOrigin){
      //如果不使用外边传入初始点，鼠标按下后设置初始点
      container.onmousedown = (e) => {
        this.isDraw = true
        const { offsetX, offsetY } = e
        this.startX = offsetX
        this.startY = offsetY
        ctx.moveTo(offsetX, offsetY)
      }
    }
    //移动绘制
    container.onmousemove = (e) => {
      if (this.isDraw) {
        ctx.clearRect(0, 0, this.width, this.height)
        if(this.drawTypeList.indexOf(this.drawType)==-1||this.drawType==='attach'){
          //如果是覆盖的，直接清空，如果为attach或设置的无效值，在原来绘制内容附加
          if (this.paintInfo) ctx.putImageData(this.paintInfo, 0, 0)
        }
        const { offsetX, offsetY } = e
        ctx.beginPath()
        ctx.strokeStyle=this.lineColor
        ctx.fillStyle=this.bgColor
        if (offsetX > this.startX && offsetY > this.startY) {
          ctx.rect(this.startX, this.startY, offsetX - this.startX, offsetY - this.startY)
        } else if (offsetX > this.startX && offsetY < this.startY) {
          ctx.rect(this.startX, offsetY, offsetX - this.startX, this.startY - offsetY)
        } else if (offsetX < this.startX && offsetY > this.startY) {
          ctx.rect(offsetX, this.startY, this.startX - offsetX, offsetY - this.startY)
        } else if (offsetX < this.startX && offsetY < this.startY) {
          ctx.rect(offsetX, offsetY, this.startX - offsetX, this.startY - offsetY)
        }
        ctx.stroke()
        ctx.fill()
        ctx.closePath()
      }else{
        this.$emit('not-draw')
      }
    },
    //鼠标抬起或离开记录之前的值
    container.onmouseup = (e) => {
      const { offsetX, offsetY } = e
      this.paintInfo = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height)
      if(this.isDraw){
        this.$emit('draw-end',this.handleCountPointSite(this.startX,this.startY,offsetX,offsetY))
      }
      if(this.mouseUpClear){
        ctx.clearRect(0, 0, this.width, this.height)
      }
      this.isDraw = false
    }
    container.onmouseleave = (e) => {
      const { offsetX, offsetY } = e
      this.paintInfo = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height)
      if(this.isDraw){
        this.$emit('draw-end',this.handleCountPointSite(this.startX,this.startY,offsetX,offsetY))
      }
      if(this.mouseUpClear){
        ctx.clearRect(0, 0, this.width, this.height)
      }
      this.isDraw = false
    }
  },
  watch:{
    changeSite(val){
      if(this.useOrigin){
        this.startX=val.x
        this.startY=val.y
        this.isDraw=true
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  
</style>