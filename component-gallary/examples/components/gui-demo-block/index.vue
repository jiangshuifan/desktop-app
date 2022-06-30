<template>
    <div>
      <div><slot name="demo-tip"></slot></div>
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

<style>

</style>
