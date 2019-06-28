<template>
  <el-header class="sticky-top-u-c">
    <el-input
      size="medium"
      placeholder="search"
      suffix-icon="el-icon-search"
      v-model="input">
    </el-input>
  </el-header>  
</template>

<script>
export default {
  data(){
    return{
      input: ''
    }
  }
}
</script>

<style scoped>
  .sticky-top-u-c{  
    position: sticky !important;
    background: #5044ea;
    color: #ffffff;
    z-index: 100;
    display: flex;
    align-items: center;
    top: 0;
  }
</style>

