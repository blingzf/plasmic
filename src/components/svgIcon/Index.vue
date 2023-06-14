<!--
 * @Description: svg图标组件
 * @Author: ZF
 * @Date: 2020-11-24 
 * @LastEditors: ZF
 * @LastEditTime: 2021-11-24
-->
<template>
  <svg aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'icon-svg',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.icon}`
    }
  }
}
</script>

<style>

</style>