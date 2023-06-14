<!--
 * @Description: 全屏按钮
 * @Author: ZF
 * @Date: 2020-06-10 
 * @LastEditors: ZF
 * @LastEditTime: 2021-06-21
-->

<template>
  <div id="screenfull">
		<el-tooltip class="item" effect="dark" :content="isFullscreen?'退出全屏':'进入全屏'" placement="left">
			<div
				v-if="isFullscreen"
				@click="click"
			>
				<i class="el-icon-full-screen" title="退出全屏" style="font-size: 18px;font-weight: bold;cursor: pointer;"></i>
			</div>
			<div
			  @click="click"
			  v-else
			>
			<i class="el-icon-full-screen" title="进入全屏" style="font-size: 18px;font-weight: bold;cursor: pointer;"></i>
			</div>
		</el-tooltip>
  </div>
</template>

<script lang="ts">
import screenfull from 'screenfull'
import { defineComponent, onBeforeUnmount, onMounted, reactive, toRefs } from 'vue'
import { ElMessage } from 'element-plus'

const sf = screenfull
export default defineComponent({
  setup() {
    const state = reactive({
      isFullscreen: false,
      click: () => {
        if (!sf.isEnabled) {
          ElMessage({
            message: 'you browser can not work',
            type: 'warning'
          })
          return false
        }
        sf.toggle()
      }
    })
    const change = () => {
      if (sf.isEnabled) {
        state.isFullscreen = sf.isFullscreen
      }
    }
    onMounted(() => {
      if (sf.isEnabled) {
        sf.on('change', change)
      }
    })

    onBeforeUnmount(() => {
      if (sf.isEnabled) {
        sf.off('change', change)
      }
    })

    return {
      ...toRefs(state)
    }
  }
})

</script>
