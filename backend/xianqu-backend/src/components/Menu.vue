<template>
            <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">

          <router-link to="/">
            <el-menu-item index="1">
              <i class="el-icon-s-home"></i>
              <span slot="title">营销数据</span>
            </el-menu-item>
          </router-link>

          <router-link to="/foo">
            <el-menu-item index="2">
              <i class="el-icon-view"></i>
              <span slot="title">闲置审核</span>
            </el-menu-item>
          </router-link>

          <el-menu-item index="3">
            <i class="el-icon-service"></i>
            <span slot="title">客户反馈</span>
          </el-menu-item>

          <el-menu-item index="4">
            <i class="el-icon-warning"></i>
            <span slot="title">举报信息</span>
          </el-menu-item>

          <el-menu-item index="5">
            <i class="el-icon-user"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>

          <el-menu-item index="6">
            <i class="el-icon-s-custom"></i>
            <span slot="title">员工管理</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-document-checked"></i>
            <span slot="title">注册审核</span>
          </el-menu-item>
        </el-menu>
</template>

<script>
export default {
    name:'Menu',
    props: {

  }
}
</script>
