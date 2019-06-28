<template>
  <div class="block">
  <el-carousel trigger="click" height="150px">
    <el-carousel-item v-for="item in 4" :key="item">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        ajax:[
          {
            cssClass: 'child-1',
            url: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg'
          },
          {
            cssClass: 'child-2',
            url: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            cssClass: 'child-3',
            url: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
          }
        ]
      }
    },

    methods: {
      next () {
        if(this.$data.ajax[2].cssClass !== 'child-2'){
          this.$data.ajax[2].cssClass = 'child-2';
          this.$data.ajax[1].cssClass = 'child-3';
        }else{
          this.$data.ajax[2].cssClass = 'child-1';
          this.$data.ajax[0].cssClass = 'child-2';
        }
      
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      }
    }
  }
</script>

<style scoped>
  .el-carousel__item{
    box-shadow:  0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
