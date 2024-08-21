<template>
    <div class="app-container">
        <div class="filter-container">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="基础信息" name="first">
                    <DetailsView ref="DetailsView"  v-if="activeName == 'first'"/>
                </el-tab-pane>
                <el-tab-pane label="设备管理" name="first2">
                    <Device ref="Device" v-if="activeName == 'first2'"/>
                </el-tab-pane>
                <el-tab-pane label="规则管理" name="second">
                    <Rule ref="Rule" v-if="activeName == 'second'"/>
                </el-tab-pane>
                <el-tab-pane label="导出配置" name="third">
                    <Exprot ref="Exprot" v-if="activeName == 'third'"/>
                </el-tab-pane>
                <el-tab-pane label="缓存配置" name="fourth">
                    <Starage ref="Starage" v-if="activeName == 'fourth'"/>
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
    data() {
        return {
            activeName: 'first'
        }
    },
    components: {
        DetailsView,
        Device,
        Rule,
        Exprot,
        Starage
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>

<style lang="scss" scoped></style>