<template>
  <el-container direction="vertical">
    <app-header/>
    <!-- <transition name="bounce" v-on:enter="enter"> -->
      <router-view/>
    <!-- </transition> -->
    <bottom-bar :hash="post.hash"/>
  </el-container>
</template>

<script>
import Vue from 'vue';
import Header from './components/Header';
import ElementUI from 'element-ui';
import BottomBar from './components/BottomBar';
import IndexPage from './components/page/Index';
import Pub from './components/page/Pub';
import ME from './components/page/ME';
import MSG from './components/page/MSG';
import VueRouter from 'vue-router';
import '../node_modules/element-ui/lib/theme-chalk/index.css';
Vue.use(VueRouter);
Vue.use(ElementUI);



const routes = [
  {path: '/', redirect: '/index'},
  { path: '/index', component: IndexPage },
  { path: '/pub', component: Pub },
  { path: '/me', component: ME },
  { path: '/msg', component: MSG },
]

const router = new VueRouter({
  routes, //routes:routes
  scrollBehavior (to, from, savedPosition) {
    return {x:0, y:0}
  }
})


export default {
  router,
  components: {
    'bottom-bar': BottomBar,
    'app-header': Header
  },
  data () {
      return {
        post: {
          hash: window.location.hash
        }
      }
  },
  methods: {
    enter(){
      
    }
  }
}
</script>


// not scoped, must open in all the corresponding components of <router-view/>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    from {
      left: -100%;
    }
    to {
      left: 0%;
    }
  }
</style>

