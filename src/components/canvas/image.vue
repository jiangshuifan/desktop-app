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
    
    new Promise((resolve,reject)=>{
      img.onload=(e)=>{
        let imageInfo
        const picWidth = e.path[0].naturalWidth//图片原始宽
        const picHeight= e.path[0].naturalHeight//图片原始高
        
        const supportHeight = (picHeight/picWidth)*this.width
        const supportWidth= (picWidth/picHeight)*this.height
        
        if(supportHeight<this.height){
          //要满足宽铺满，高度需要为supporHeight
          ctx.drawImage(img, 0,(this.height-supportHeight)/2,this.width, supportHeight)
          imageInfo = ctx.getImageData( 0,(this.height-supportHeight)/2,this.width, supportHeight)
        }else if (supportWidth<this.width){
          //要满足高度铺满，宽度为supportWidth
          ctx.drawImage(img, (this.width-supportWidth)/2,0,supportWidth, this.height)
          imageInfo = ctx.getImageData((this.width-supportWidth)/2,0,supportWidth, this.height)
        }else {
          ctx.drawImage(img, 0,0,this.width, this.height)
          imageInfo = ctx.getImageData(0,0,this.width, this.height)
        }
        resolve(imageInfo)
      }
    }).then((imageInfo)=>{
      let r = 0
      let g = 0
      let b = 0
      let imageData = imageInfo.data
      for (let i=0;i<imageData.length;i+=4){
        r+=imageData[i]
        g+=imageData[i+1]
        b+=imageData[i+2]
      }
      let avg_a = r/(imageInfo.height*imageInfo.width)
      let avg_g = g/(imageInfo.height*imageInfo.width)
      let avg_b = b/(imageInfo.height*imageInfo.width)
      this.$emit('render-end',{
        r:avg_a,g:avg_g,b:avg_b
      })
    })
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