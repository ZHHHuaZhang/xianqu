<template>
  <el-main>
  <el-row justify="center" type="flex">
    <el-col :span="24" style="width:auto !important;">
    <el-image
        style="width: 100px; height: 100px"
        :src="url"
        :fit="contain">
    </el-image>
    </el-col>
  </el-row>
  <div class="link-item">
    <router-link :to="i.icon" v-for="i in list">
    <el-row justify="start" type="flex" align="center">
      <el-col :span="24">
        <i class="el-icon-delete"></i><h1>{{i.title}}</h1>
      </el-col>
    </el-row>
    </router-link>
  </div>
  </el-main>
</template>

<style scoped>
  .link-item{
    margin-top: 5%; 
  }
  .link-item h1{
    display: inline;
    margin-left: 5%;
  }
  .link-item i{
    padding: 10px;
    border: 2px solid #a1a1a1;
    border-radius: 6px;
  }
  .link-item .el-col{
    margin-top: 5%;
  }
</style>

<script>
export default {
  data(){
    return{
      list:[
        {
          icon: 'user',
          title: '我的收藏'
        },
        {
          icon: 'user',
          title: '我的收藏'
        },
        {
          icon: 'user',
          title: '我的收藏'
        },
        {
          icon: 'user',
          title: '我的收藏'
        },
        {
          icon: 'user',
          title: '我的收藏'
        }
      ]
    }
  }
}
</script>

