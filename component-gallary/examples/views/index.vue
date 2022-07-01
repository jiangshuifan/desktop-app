.<template>
  <div class='g-ui'>
     <SuiGrid class="g-ui-container" type="header-main">
       <template #header>
         <div  class="full-height" style="height:100%;padding:0 20px;display:flex;align-items:center;justify-content:space-between;">
           <h2>g-UI组件库</h2>
           <div>目录</div>
         </div>
       </template>
       <template #main>
         <SuiGrid type="aside-main" asideWidth='260' >
           <template #aside>
             <div class="full-height" >
               组件列表
             </div>
           </template>
           <template #main>
            <div class="full-height overflow-auto" >
             <TEST></TEST>
            </div>
           </template>
         </SuiGrid>
       </template>
     </SuiGrid>
  </div>
</template>

<script>
import SuiGrid from '../../packages/grid/src/main.vue'
import TEST from '../../build/md-loader/test.vue'
export default {
  components:{
    SuiGrid,
    TEST
  }
}
</script>

<style lang='scss' scoped>
  .g-ui{
    height: 100vh;
    overflow: auto;
  }
  .g-ui-container{
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
