<template>
<div>
<!-- header -->
   <el-breadcrumb separator="/">
     <el-breadcrumb-item>
      <span class="el-breadcrumb__item__inner"> <i class="el-icon-menu"></i>表格 </span>
     </el-breadcrumb-item>
     <el-breadcrumb-item>基础表格</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- main -->
<el-form ref="form" :model="form" label-width="80px" class="surface">
  <el-form-item label="表单名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="选择器">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="步步高" value="shanghai"></el-option>
      <el-option label="小天才" value="beijing"></el-option>
      <el-option label="imoo" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="日期时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="选择开关">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="多选框">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="步步高" name="type"></el-checkbox>
      <el-checkbox label="小天才" name="type"></el-checkbox>
      <el-checkbox label="imoo" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="单选框">
    <el-radio-group v-model="form.resource">
      <el-radio label="步步高"></el-radio>
      <el-radio label="小天才"></el-radio>
      <el-radio label="imoo"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="文本框">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item >
    <el-popover
  ref="popover1"
  placement="top"
  width="200"
  height="40"
  trigger="click"
  content="提交成功">
</el-popover>
<el-button type="primary" @click="onSubmit" v-popover:popover1>提交</el-button>
<el-button>取消</el-button>

  </el-form-item>
</el-form>

</div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
