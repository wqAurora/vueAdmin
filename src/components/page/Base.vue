
<template>
<div>
    <el-breadcrumb separator="/">
     <el-breadcrumb-item>
      <span class="el-breadcrumb__item__inner"> <i class="el-icon-menu"></i>表格 </span>
     </el-breadcrumb-item>
     <el-breadcrumb-item>
      基础表格
    </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="seach">
     <el-button type="primary" icon="el-icon-delete">
      批量删除
</el-button>
     <el-select v-model="value8" filterable="" placeholder="筛选省份">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
</el-option>
     </el-select>
     <el-select multiple="" filterable="" remote="" reserve-keyword="" placeholder="请输入关键词">
      <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value">
      </el-option><el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value"></el-option>
</el-select>
     <el-button type="primary" icon="el-icon-search">
      搜索
     </el-button>
    </div>
    <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}" @selection-change="handleSelectionChange">
     <el-table-column type="selection" width="55"></el-table-column>
     <el-table-column prop="date" label="日期" sortable="" width="180">
      <template slot-scope="scope">
       {{ scope.row.date }}
      </template>
     </el-table-column>
     <el-table-column prop="name" label="姓名" width="120"></el-table-column>
     <el-table-column prop="province" label="省份" width="120"></el-table-column>
     <el-table-column prop="city" label="市区" width="120"></el-table-column>
     <el-table-column prop="address" label="地址" show-overflow-tooltip=""></el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
        <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
    <div>
     <el-pagination background="" layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
   </div>
  </template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '广东省'
        },
        {
          value: '选项2',
          label: '湖南省'
        }
      ],
      value8: '',
      options4: [],
      restaurants: [],
      state4: '',
      timeout: null,
      tableData3: [
        {
          date: '2016-05-03',
          name: '李国梁',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      multipleSelection: []
    }
  },
  methods: {
    formatter(row, column) {
      return row.address
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    loadAll() {
      return []
    },

    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
      }
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
      row.splice(index, 1)
    },
    handleSelect(item) {
      console.log(item)
    }
  },
  mounted() {
    this.restaurants = this.loadAll()
  }
}
</script>
