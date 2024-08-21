<template>
    <div class="app-container">
        <div class="filter-container">
            <BarChart ref="BarChart" />
            <completionRate />
        </div>
    </div>
</template>

<script>
import BarChart from '../dashboard/admin/components/BarChart.vue'
import completionRate from '../dashboard/admin/components/completionRate.vue'
export default {
    data() {
        return {}
    },
    components: {
        BarChart,
        completionRate
    }
}
</script>

<style lang="scss" scoped></style>