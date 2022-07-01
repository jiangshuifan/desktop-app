<template>
    <div>
      <div class="component-demo-tip"><slot name="demo-tip"></slot></div>
      <div>
        <slot name="demo-code"></slot>
      </div>
      <div><slot name="demo-operate"></slot></div>
    </div>
</template>

<script>
export default {
  name:'GuiDemoBlock'
}
</script>

<style lang='scss' scoped>
  .component-demo-tip{
    border:1px solid #ebebeb;
    padding:20px 10px;
    font-size: 14px;
    font-weight: bold;
    color:#5e6d82;
  }
</style>
