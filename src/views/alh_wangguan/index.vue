<template>
  <div class="app-container">
    <div class="filter-container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基础信息" name="first">
          <DetailsView v-if="activeName == 'first'" ref="DetailsView" />
        </el-tab-pane>
        <el-tab-pane label="设备管理" name="first2">
          <Device v-if="activeName == 'first2'" ref="Device" />
        </el-tab-pane>
        <el-tab-pane label="规则管理" name="second">
          <Rule v-if="activeName == 'second'" ref="Rule" />
        </el-tab-pane>
        <el-tab-pane label="导出配置" name="third">
          <Exprot v-if="activeName == 'third'" ref="Exprot" />
        </el-tab-pane>
        <el-tab-pane label="缓存配置" name="fourth">
          <Starage v-if="activeName == 'fourth'" ref="Starage" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import DetailsView from './details/index.vue'
import Device from './device/index.vue'
import Rule from './rulesview/index.vue'
import Exprot from './exprot/index.vue'
import Starage from './storage/index.vue'
export default {
  components: {
    DetailsView,
    Device,
    Rule,
    Exprot,
    Starage
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped></style>
