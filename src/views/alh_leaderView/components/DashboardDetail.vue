<template>
  <div class="dashboard-detail">
    <h2>{{ title }}</h2>
    <div ref="chart" class="chart" />
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  props: {
    title: String,
    chartData: Object,
    chartOptions: Object
  },
  watch: {
    title: {
      handler() {
        this.destroyChart()
        this.initChart()
      },
      deep: true
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      const chart = echarts.init(this.$refs.chart)
      const options = this.chartOptions || {
        xAxis: { type: 'category', data: this.chartData.xData },
        yAxis: { type: 'value' },
        series: [{ data: this.chartData.seriesData, type: 'line' }]
      }
      chart.setOption(options)
    },
    destroyChart() {
      const chart = echarts.getInstanceByDom(this.$refs.chart) // 获取图表dom实例
      if (chart) {
        chart.dispose() // 销毁图表实例
      }
    }
  }
}
</script>

<style scoped>
.dashboard-detail {
  padding: 20px;
}
.chart {
  width: 100%;
  height: 400px;
}
</style>
