<template>
  <div id="app">
    <el-container>
      <el-aside>
        <Menu />
      </el-aside>
      <el-container>
        <el-header>
          <el-divider direction="vertical"></el-divider>
          <span>你好：admin</span>
        </el-header>
        <el-main>
          <router-view/>

        </el-main>
      </el-container>
  </el-container>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    Menu,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-header {
  color: #333;
  line-height: 60px;
  text-align: right;
}
a {
  text-decoration: none;
}

</style>
