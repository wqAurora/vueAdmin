<template>
  <div id="app">
    <el-container>
  <el-header style="height: 70px;background: #242f42;padding:0px;">
<el-row type="flex" class="row-bg" justify="space-between">
  <el-col :span="9"><div class="grid-content bg-purple">后台管理系统</div></el-col>
  <el-col :span="9"><div class="grid-content bg-purple bg-purple-light">admin</div></el-col>
</el-row>
  </el-header>
  <el-container>
    <el-aside style="width:250px;background:#2e363f;">  
      <el-row class="tac">
  <el-col>
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
        <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">自述</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>表格</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">基础表格</el-menu-item>
          <el-menu-item index="1-2">vue表格组件</el-menu-item>
        </el-menu-item-group>

      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>表单</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">基本表单</el-menu-item>
          <el-menu-item index="1-2">编辑器</el-menu-item>
          <el-menu-item index="1-3">markdown</el-menu-item>
          <el-menu-item index="1-4">文件上传</el-menu-item>
        </el-menu-item-group>

      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">图表</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">拖拽</span>
      </el-menu-item>
    </el-menu>
  </el-col>

</el-row>
    </el-aside>
    <el-main><router-view/></el-main>
  </el-container>
</el-container>
    
  </div>
</template>







<script>
export default {
  name: "App"
};
</script>


