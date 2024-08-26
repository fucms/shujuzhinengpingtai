<template>
  <div>
    <el-dialog :title="title" :visible.sync="visible" style="padding-bottom: 5vh" width="30%">
      <el-form ref="dataForm" :model="temp" label-position="left" label-width="auto" :rules="rules">
        <el-row>
          <el-col :span="24">
            <el-form-item label="设备组名称" prop="customerCode">
              <el-input v-model="temp.customerName1" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="设备组描述" prop="customerName">
              <el-input v-model="temp.customerName2" type="textarea" />
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
        customerName2: ''
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
