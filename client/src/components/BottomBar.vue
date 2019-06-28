<template>
<!-- [name]-u(nique)-c(lass) -->
  <el-footer class="footer-u-c">
    <router-link to="/index">
      <el-button icon="el-icon-search" circle></el-button>
    </router-link>
    <router-link to="/pub">
      <el-button icon="el-icon-search" circle></el-button>
    </router-link>
    <router-link to="/msg">
      <el-badge :value="msgCount" class="item">
        <el-button icon="el-icon-search" circle></el-button>
      </el-badge>
    </router-link>
    <router-link to="/me">
    <el-button icon="el-icon-search" circle></el-button>
    </router-link>
  </el-footer>
</template>

<script>
  // import Vue from 'vue';
  
  export default {
    props: ['hash'],
    data(){
      return{
        msgCount: 8
      }
    }
  }
</script>

<style scoped>
  .footer-u-c{
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    background: #ffffff;
    width: 100%;
    border-top: 1px solid #a5a5a5;
  }
  .el-button{
    border: 0 !important;
  }
</style>

