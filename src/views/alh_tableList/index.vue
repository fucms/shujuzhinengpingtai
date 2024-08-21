<template>
    <div>
        <PieChart />
        <RaddarChart />
    </div>
</template>

<script>
import PieChart from '../dashboard/admin/components/PieChart.vue'
import RaddarChart from '../dashboard/admin/components/RaddarChart.vue'
export default {
    components: {
        PieChart,
        RaddarChart
    }
}
</script>

<style lang="scss" scoped>
</style>