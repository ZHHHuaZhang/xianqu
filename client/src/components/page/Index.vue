<template>
  <el-main>
    <img-queue/>
    <div class="category" style="margin-top:15px;">
      <el-row :gutter="20" justify="space-between" type="flex">
        <el-col :span="5"><el-button type="primary" icon="el-icon-search">搜索</el-button></el-col>
        <el-col :span="5"><el-button type="primary" icon="el-icon-search">搜索</el-button></el-col>
        <el-col :span="5"><el-button type="primary" icon="el-icon-search">搜索</el-button></el-col>
        <el-col :span="5"><el-button type="primary" icon="el-icon-search">搜索</el-button></el-col>
      </el-row>
        <el-row :gutter="20" justify="space-between" type="flex">
        <el-col :span="5"><el-button type="primary" icon="el-icon-search">搜索</el-button></el-col>
        <el-col :span="5"><el-button type="primary" icon="el-icon-search">搜索</el-button></el-col>
        <el-col :span="5"><el-button type="primary" icon="el-icon-search">搜索</el-button></el-col>
        <el-col :span="5"><el-button type="primary" icon="el-icon-search">搜索</el-button></el-col>
      </el-row>
    </div>
    
    <div class="infinite-list-wrapper" style="margin-top:30px;">
      <ul
        style="padding:0"
        class="list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled">
        <li v-for="i in list" class="list-item" style="list-style:none">
          <router-link :to="i.url">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="i.img"
                  fit="contain">
                </el-image>
              </el-col>
              <el-col :span="16">
                <div>
                  <h1>{{i.url}}</h1>
                  <p>123456</p>
                </div>
              </el-col>
            </el-row>
          </router-link>
        </li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </el-main>
</template>

<style scoped>
  .el-row {
    margin-bottom: 15px;
  }
  .category .el-col {
    border-radius: 4px;
    height: 10vw;
    padding: 0 !important;
  }
  .el-col button{
    padding: 16%;
  }
</style>

<script>
  import ImgQueue from '../ImgQueue';
  let ajax = [];

  export default {
    components: {
      'img-queue': ImgQueue
    },
    data () {
      return {
        list: [{
          url: '/index'
        },
        {
          url: '/pub'
        }],
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.list.length >= 10
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.list.push({url: '/me'});
          this.loading = false
        }, 2000)
      }
    }
  }
</script>


