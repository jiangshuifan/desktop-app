.<template>
  <div @dragstart="$emit('drag')" @mousemove.stop="$emit('move')"  @mousedown.stop="$emit('clickdown')" :style="appStyle"  @click.stop="handleClickApp"  @dblclick="handleDblClickApp" v-draggable  :class="{'app-item':true}">
    <!-- <div :style="{'background-image':'url('+require(icon)+')'}"></div> -->
    <img  style="width:100%;padding:4px;-webkit-user-drag:none" :src="require('../../../static/images/app-icon/'+icon)" alt="" srcset="">
    <div :style="{color:'white','font-size':fontSize+'px','text-align':'center','padding':'3px','text-shadow':'0 0 4px #000'}">{{text}}</div>
  </div>
</template>

<script>

export default {
  components:{
 
  },
  data(){
    return {
      appStyle:{
        '--appBackColor':this.appBackColor,
      }
    }
  },
  methods:{
    handleDblClickApp(){
     this.$emit('open')
    },
    handleClickApp(e){
     this.$emit('click')
    }
  },
  props:{
    icon:{
      type:String,
      default(){
        return ''
      }
    },
    text:{
      type:String,
      default(){
        return ''
      }
    },
    fontSize:{
      type:Number,
      default(){
        return 12
      }
    },
    appBackColor:{
      type:String,
      default(){
        return '#fff'
      }
    }
  },
}
</script>

<style lang='scss' scoped>
.app-item{
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 0.2px solid transparent;
}
.app-item:hover{
  background-color: rgba($color: #fff, $alpha: 0.12);
  backdrop-filter:blur(8px);
  box-shadow: 0 0 2px var(--appBackColor);
}

</style>