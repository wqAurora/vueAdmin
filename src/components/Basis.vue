
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
   <div class="scren">
   <div class="screen">
    <el-form ref="form" :model="form" label-width="80px">
     <el-form-item label="show">
      <el-select v-model="form.region" placeholder="请选择" style="width:100px;">
       <el-option label="1" value="1-1"></el-option>
       <el-option label="5" value="1-2"></el-option>
       <el-option label="10" value="1-3"></el-option>
       <el-option label="15" value="1-4"></el-option>
       <el-option label="20" value="1-5"></el-option>
      </el-select>
     </el-form-item>
    </el-form>
   </div>
   <div class="screen-right">
    <el-input v-model="input" placeholder="请输入内容" class="seachs"></el-input>
    <el-button type="primary" class="">
     search
    </el-button>
   </div>
  </div>
  <el-table :data="tableData" style="width: 100%">
   <el-table-column type="index" label="id" width="180" index="1"></el-table-column>
   <el-table-column prop="name" label="Name" width="180">
   </el-table-column>
   <el-table-column prop="email" label="email" width="180">
   </el-table-column>
   <el-table-column prop="ip"  class="site" label="ip" width="500">
   </el-table-column>

       <el-table-column
      prop="tag"
      label="标签"
      width="100"
      :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '家' ? 'primary' : 'success'"
          close-transition>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
    <div style="margin-top: 20px">
    <el-button @click="toggleSelection(id[1])">选中第一行</el-button>
  </div>
   <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
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
          name: '王小虎',
          email: 'g.rgiuory@kctbut.mw',
          ip: '22.126.12.189',
          tag: '家'
        },
        {
          name: '王小虎',
          email: 'g.rgiuory@kctbut.mw',
          ip: '22.126.12.189',
          tag: '公司'
        },
        {
          name: '王小虎',
          email: 'g.rgiuory@kctbut.mw',
          ip: '22.126.12.189',
          tag: '家'
        },
        {
          name: '王小虎',
          email: 'g.rgiuory@kctbut.mw',
          ip: '22.126.12.189',
          tag: '公司'
        },
        {
          name: '王小虎',
          email: 'g.rgiuory@kctbut.mw',
          ip: '22.126.12.189',
          tag: '家'
        },
        {
          name: '王小虎',
          email: 'g.rgiuory@kctbut.mw',
          ip: '22.126.12.189',
          tag: '公司'
        },
        {
          name: '王小虎',
          email: 'g.rgiuory@kctbut.mw',
          ip: '22.126.12.189',
          tag: '家'
        },
        {
          name: '王小虎',
          email: 'g.rgiuory@kctbut.mw',
          ip: '22.126.12.189',
          tag: '公司'
        },
        {
          name: '王小虎',
          email: 'g.rgiuory@kctbut.mw',
          ip: '22.126.12.189',
          tag: '家'
        },
        {
          name: '王小虎',
          email: 'g.rgiuory@kctbut.mw',
          ip: '68.28.4.232',
          tag: '公司'
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    formatter(row, column) {
      return row.ip
    },
    filterTag(value, row) {
      return row.tag === value
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    }
  }
}
</script>
