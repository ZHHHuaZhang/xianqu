<template>
  
  <main class="index-u-c" ref="indexPage">
    <app-header/>
    <img-queue/>
    <div class="bg-up-u-c"></div>
    <div class="bg-down-u-c"></div>
    <div v-for="item in ajax" class="goods-u-c">{{item}}</div>
  </main>
  
</template>

<style scoped>
  .index-u-c{
    font-size: 14px !important;
    background: transparent;
    /* height: 100%; */
    width: 100%;
    /* position: absolute !important; */
    /* overflow: auto; */
  }
  [class*="-u-c"]:not(.index-u-c){
    position: absolute;
  }
  .bg-up-u-c{
    background-color: #5044ea;
    top: 0vh;
    height: 85vw;
    width: 100vw;
  }
  .bg-down-u-c{
    background-color: #fcfcfc;
    bottom: 0%;
    border-radius: 10px 10px 0px 0px;
    height: 1200px;
  }
  .goods-u-c{
    background: purple;
    height: 200px;
    margin-top: 200px;
  }

</style>

<script>
  import BottomBar from '../BottomBar';
  import Header from '../Header';
  import ImgQueue from '../ImgQueue';
  let ajax = [];

  export default {
    components: {
      // 'bottom-bar': BottomBar,
      'app-header': Header,
      'img-queue': ImgQueue
      // 'grid-category': Header
    },
    data(){
      return{
        ajax
      }
    }
  }
</script>


