<template>
  <div class="dashboard-card" @click="openDetail">
    <div ref="chart" class="chart" style="width: 280px;height: 200px;" />
    <div><b>{{ title }}</b></div>
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
    openDetail() {
      this.$emit('openDetail')
    }
  }
}
</script>

<style scoped>
.dashboard-card {
  border: 1px solid #ddd;
  padding: 16px;
  margin: 5px;
  text-align: center;
}
.chart {
  width: 100%;
  height: 200px;
}
</style>
