<template>
  <div>
    <el-dialog :title="title" :visible.sync="visible" style="padding-bottom: 5vh" width="60%">
      <el-form ref="dataForm" :model="temp" label-position="left" label-width="auto" :rules="rules">
        <el-row>
          <el-col :span="12">
            <el-form-item label="告警项名称" prop="customerCode">
              <el-input v-model="temp.customerName1" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="监控项名称" prop="customerName">
              <el-input v-model="temp.customerName2" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="操作符" prop="customerName">
              <el-input v-model="temp.customerName3" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="阈值" prop="customerName">
              <el-input v-model="temp.customerName4" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="告警级别" prop="customerName">
              <el-input v-model="temp.customerName5" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="配置状态" prop="customerName">
              <el-input v-model="temp.customerName6" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="submitForm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      title: '新增',
      visible: false,
      temp: {
        customerName1: '',
        customerName2: '',
        customerName3: '',
        customerName4: '',
        customerName5: '',
        customerName6: ''
      },
      rules: {}
    }
  },
  methods: {
    show(val) {
      this.visible = true
    },
    submitForm() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.visible = false
          this.$emit('submit', this.temp)
          this.temp = {}
          this.$message({
            type: 'success',
            message: '操作成功'
          })
        }
      })
    }
  }
}
</script>
