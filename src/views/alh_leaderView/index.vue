<template>
  <div class="leadership-dashboard">
    <div class="dashboard-list">
      <DashboardCard
        v-for="dashboard in dashboards"
        :key="dashboard.id"
        :title="dashboard.title"
        :chart-options="dashboard.chartOptions"
        @openDetail="viewDetail(dashboard)"
      />
    </div>
    <div v-if="selectedDashboard" class="dashboard-detail-container">
      <DashboardDetail
        :title="selectedDashboard.title"
        :chart-options="selectedDashboard.chartOptions"
      />
    </div>
  </div>
</template>

<script>
import DashboardCard from './components/DashboardCard.vue'
import DashboardDetail from './components/DashboardDetail.vue'

export default {
  components: {
    DashboardCard,
    DashboardDetail
  },
  data() {
    return {
      dashboards: [
        {
          id: 1,
          title: '财务',
          chartOptions: {
            tooltip: { trigger: 'axis' },
            legend: { data: ['收入', '支出', '利润率'] },
            xAxis: { type: 'category', data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'] },
            yAxis: [{ type: 'value' }, { type: 'value', axisLabel: { formatter: '{value}%' }}],
            series: [
              { name: '收入', type: 'line', data: [450, 480, 500, 520, 550, 580, 600, 630, 650, 700, 750, 800] },
              { name: '支出', type: 'line', data: [300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410] },
              { name: '利润率', type: 'line', yAxisIndex: 1, data: [15, 16, 18, 19, 20, 21, 23, 22, 24, 25, 26, 27] }
            ]
          }
        },
        {
          id: 2,
          title: '销售',
          chartOptions: {
            tooltip: { trigger: 'axis' },
            legend: { data: ['销售增长率', '每月销售额', '客户满意度'] },
            xAxis: { type: 'category', data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'] },
            yAxis: { type: 'value', axisLabel: { formatter: '{value}%' }},
            series: [
              { name: '销售增长率', type: 'bar', data: [2, 3, 4, 5, 6, 7, 8, 7, 8, 9, 10, 11] },
              { name: '每月销售额', type: 'bar', data: [500, 520, 540, 560, 580, 600, 620, 640, 660, 680, 700, 720] },
              { name: '客户满意度', type: 'bar', data: [85, 86, 87, 88, 89, 90, 91, 90, 91, 92, 93, 94] }
            ]
          }
        },
        {
          id: 3,
          title: '生产',
          chartOptions: {
            tooltip: { trigger: 'axis' },
            legend: { data: ['生产效率', '不良品率'] },
            xAxis: { type: 'category', data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'] },
            yAxis: { type: 'value', axisLabel: { formatter: '{value}%' }},
            series: [
              { name: '生产效率', type: 'line', data: [60, 67, 80, 82, 83, 87, 90, 92, 93, 93, 95, 95] },
              { name: '不良品率', type: 'line', data: [15, 10, 5.6, 4.3, 4, 3.8, 3.5, 3.3, 3, 2.8, 2.5, 2.3] }
            ]
          }
        }
        // 其他驾驶舱数据
      ],
      // 当前选择的图表数据
      selectedDashboard: null
    }
  },
  // 页面初始化时选择第一个驾驶舱
  mounted() {
    if (this.dashboards.length > 0) {
      this.selectedDashboard = this.dashboards[0]
    }
  },
  methods: {
    viewDetail(dashboard) {
      this.selectedDashboard = dashboard
    }
  }
}
</script>

  <style scoped>
  .leadership-dashboard {
    padding: 20px;
  }
  .dashboard-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .dashboard-detail-container {
    margin-top: 20px;
  }
  </style>
