<template>
<!-- [name]-u(nique)-c(lass) -->
    <footer class="nav-u-c">
      <v-btn class="btn-u-c" color="#5044ea" to="/index">
        <v-icon color="#ffffff">iso</v-icon>
        <span style="color:#ffffff; padding-left:5px">闲趣</span>
      </v-btn>
      <v-btn fab large class="btn-u-c" color="#ff1c60" to="/pub">
        <v-icon color="#ffffff">add</v-icon>
      </v-btn>
      <div class="btn-me-u-c">
        <v-btn small fab class="btn-u-c" color="#f1162a" to="/msg">
          <span style="color:#ffffff">{{msgCount}}</span>
        </v-btn>
        <v-btn small fab class="btn-u-c" color="#5044ea" to="/me">
          <v-icon color="#ffffff">person</v-icon>
        </v-btn>
      </div>
      <!-- <div class="btn-u-c">
      <div class="btn-u-c">
      <div class="btn-u-c"> -->
    </footer>
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
  .nav-u-c{
    background: #ff1c60;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7.5% !important;
    position: fixed;
    width: 100%;
  }
  .nav-u-c .btn-u-c,
  .btn-me-u-c{
    position: relative !important;
    transform: translate(0,-50%);
    
    border-radius: 4px !important;
    height: 80%;
    width: 30%;
    margin: 0;
  }
  .nav-u-c>.btn-u-c:first-child{
    
    height: 90%;
    right: 5%;
  }
  .nav-u-c>.btn-u-c:nth-child(2){
    border-radius: 50% !important;
    width: 16vw;
    height: 16vw;
    transform: translate(0%, 0%);
    top: -50%;
  }
  .btn-me-u-c{
    display: flex;
    justify-content: space-around;
    left: 4%;
  }
  .btn-me-u-c>.btn-u-c{
    border-radius: 4px !important;
    transform: translate(0%,0%);
    margin: 0%;
    width: 9vw;
    height: 9vw;
  }
</style>

