.<template>
  <div class="full-height">
    <div class="full-height header-main" v-if="type==='header-main'">
      <div class="overflow-auto"><slot name="header"></slot></div>
      <div class="overflow-auto"><slot name="main"></slot></div>
    </div>
    <div class="full-height header-main-footer" v-if="type==='header-main-footer'">
      <div class="overflow-auto"><slot name="header"></slot></div>
      <div class="overflow-auto"><slot name="main"></slot></div>
      <div class="overflow-auto"><slot name="footer"></slot></div>
    </div>
    <div class="full-height main-footer" v-if="type==='main-footer'">
      <div class="overflow-auto"><slot name="main"></slot></div>
      <div class="overflow-auto"><slot name="footer"></slot></div>
    </div>
    <div class="full-height aside-main" :style="{display: 'grid', 'grid-template-columns': `${parseInt(asideWidth)}px 1fr`}" v-if="type==='aside-main'">
      <div class="overflow-auto"><slot name="aside"></slot></div>
      <div class="overflow-auto"><slot name="main"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'SuGrid',
  props:{
    type:{
      type:String,
    },
    asideWidth:{
      type:[String,Number],
      default(){
        return 200
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .header-main{
    display: grid;
    grid-template-rows: 80px 1fr;
  }
  .header-main-footer{
    display: grid;
    grid-template-rows: 80px 1fr 80px;
  }
  .main-footer{
    display: grid;
    grid-template-rows: 1fr 80px;
  }
</style>
