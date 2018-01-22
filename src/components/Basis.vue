
<template>
<div>
  <!-- header -->
   <el-breadcrumb separator="/">
     <el-breadcrumb-item>
      <span class="el-breadcrumb__item__inner"> <i class="el-icon-menu"></i>表格 </span>
     </el-breadcrumb-item>
     <el-breadcrumb-item v-link-active>
       <a v-link="'/main'">基础表格</a>
    </el-breadcrumb-item>
    </el-breadcrumb>

    <!-- main -->
    <div class="scren">
    <div class="screen">
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="show">
    <el-select v-model="form.region" placeholder="请选择">
      <el-option label=1 value="1-1"></el-option>
      <el-option label=5 value="1-2"></el-option>
      <el-option label=10 value="1-3"></el-option>
      <el-option label=15 value="1-4"></el-option>
      <el-option label=20 value="1-5"></el-option>
    </el-select>
  </el-form-item>
</el-form>
</div>
<div class="screen-right">
<el-input v-model="input" placeholder="请输入内容"  class="seachs"></el-input>
<el-button type="primary" class="">search</el-button>
</div>
</div>

 <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      type="index"
      label="id"
      :index="indexMethod">
    </el-table-column>
    <el-table-column
      prop="date"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="email"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="ip">
    </el-table-column>
  </el-table>
</div>
  </template>

<script>
export default {
  data() {
    return {
      input: '',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '公司'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '公司'
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
