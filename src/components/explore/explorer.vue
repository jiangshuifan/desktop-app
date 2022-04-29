.<template>
  <vxe-modal
    class="explore-modal"
    height="80%"
    width="80%"
    :lock-view='false'
    :mask='false'
    :show-zoom="true"
    :resize='true'
    :dblclickZoom='false'
    @close="$emit('hidden')"
    v-model="showModal">
      <template #title>
        <el-tabs v-model="currentTab" @tab-click='handleSelectTab(currentTab)' type="card" editable  @edit="handleTabsEdit">
          <el-tab-pane
            :key="item.name"
            v-for="item in targetTabs"
            :label="item.title"
            :name="item.name"
            closable
          ></el-tab-pane>
        </el-tabs>
      </template>
      <template #default>
        <div id='appViewport' class="full-height"></div>
      </template>
  </vxe-modal>
</template>

<script>
export default {
  data(){
    return {
      showModal:false,
      currentTab:'',
      tabList:[],
      attachedTabs:[],
      tabIndex: 0
    }
  },
  computed:{
    targetTabs(){
      return [...this.tabList,...this.attachedTabs]
    }
  },
  props:{
    visible:{
      type:Boolean,
      require:true
    },
    tab:{
      type:Array,
      default(){
        return []
      }
    }
  },
  watch:{
    visible(value){
      this.showModal = value
    },
    tab(value){
      this.tabList=value
    }
  },
  methods:{
     activeTab(tabName){
       this.currentTab=tabName+''
       history.pushState(null,tabName,tabName)
     },
     handleSelectTab(tab){
       history.pushState(null,tab,tab)
     },
     async handleTabsEdit(targetName, action) {
        if (action === 'add') {
          this.activeTab(++this.tabIndex+'')
          this.attachedTabs.push({
            title: 'New Tab'+this.tabIndex,
            name: this.tabIndex+'',
          });
        }
        if (action === 'remove') {
          const tabIndex = this.tabList.findIndex(v=>{
            if(v.name===targetName){
              return true
            }
          })
          if(tabIndex!==-1){
            if(this.tabList.length>1||this.targetTabs.length>1){
              this.$emit('remove-tab',targetName)
              this.activeTab(this.targetTabs[tabIndex].name)
            }else{
              this.$emit('remove-tab',targetName)
              this.currentTab=''
              history.replaceState(null,null,'/')
            }
          }else{
            let attachIndex = this.attachedTabs.findIndex(tab=>{
               return tab.name===(targetName+'')
            })
            // console.log(attachIndex,this.attachedTabs.length-1)
            if(attachIndex===this.attachedTabs.length-1){
              this.attachedTabs.splice(attachIndex,1)
              let len = this.attachedTabs.length
              if(len>0){
                this.activeTab((this.attachedTabs[len-1]).name)
              }else{
                let tabListLen =this.tabList.length
                if(tabListLen>0){
                  this.activeTab(this.tabList[tabListLen-1].name)
                }else{
                   this.currentTab=''
                   history.replaceState(null,null,'/')
                }
              }
            }else{
              if(this.currentTab===targetName){
                this.attachedTabs.splice(attachIndex,1)
                 this.activeTab((this.attachedTabs[attachIndex]).name)
              }else{
                this.attachedTabs.splice(attachIndex,1)
              }
            } 
          }
        }
      }
  }
}
</script>

<style lang='scss' scoped>
  ::v-deep  .el-tabs{
        .el-tabs__header{
          margin: 0;
          border-bottom:none !important;
          display:flex;
          justify-content: flex-end;
          flex-direction:row-reverse;
          align-items: center;



          .el-tabs__new-tab{
            height: 25px;
            font-size: 20px;
            font-weight: bold;
            margin: 0 4px;
            border: none;
            color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .el-tabs__nav{
            border-radius: none;

            .el-tabs__item{
              height: 24px;
              line-height: 24px;  
              align-items: center;
              padding-left: 20px;
              padding-right: 20px;

              .el-icon-close{
                width: 14px;
              }
            }
          }

          .is-closable:hover{
            padding-left: 20px;
            padding-right: 20px;
          }

          .el-tabs__nav-wrap{
            .el-tabs__nav-prev,.el-tabs__nav-next{
              line-height: 26px;
            }
          }
        }

      }
  ::v-deep .vxe-modal--wrapper{
    .vxe-modal--box{
      border-radius: none;
    }
  }
</style>