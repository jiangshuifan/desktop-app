.<template>
  <div @dragstart="$emit('drag')"  @dblclick="handleDblClickApp" v-draggable  class="app-item">
    <!-- <div :style="{'background-image':'url('+require(icon)+')'}"></div> -->
    <img  style="width:100%;padding:4px;-webkit-user-drag:none" :src="require('../../../static/images/app-icon/'+icon)" alt="" srcset="">
    <div :style="{color:'white','font-size':fontSize+'px','text-align':'center','padding':'3px'}">{{text}}</div>
  </div>
</template>

<script>

export default {
  components:{
 
  },
  data(){
    return {}
  },
  methods:{
    handleDblClickApp(){
     this.$emit('open')
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
    }
  }
}
</script>

<style lang='scss' scoped>
.app-item{
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
  .app-item:hover{
    background-color: rgba($color: #fff, $alpha: 0.12);
      box-shadow: 0 0 2px white;
  }

</style>