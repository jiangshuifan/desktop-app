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
    src:{
      type:String,
      required:true
    }
  },
  computed:{
    changeSite(){
      return this.origin
    }
  },
  methods:{
   
  },
  mounted(){
    const container = document.getElementById(this.canvasId)
    const ctx = container.getContext('2d')
    const img = new Image()
    img.src=this.src
    img.onload=(e)=>{
      const picWidth = e.path[0].naturalWidth
      const picHeight= e.path[0].naturalHeight
      
      const supportHeight = (picHeight/picWidth)*this.width
      const supportWidth= (picWidth/picHeight)*this.height
      console.log(picWidth,picHeight)
      console.log(this.width,this.height)
      console.log(supportWidth,supportHeight)
      // if(supportWidth>this.width){
      //   ctx.drawImage(img, 0,0, this.width, supportHeight)
      // }else {

      // }
       ctx.drawImage(img, 0,(this.height-supportHeight)/2,this.width, supportHeight)
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