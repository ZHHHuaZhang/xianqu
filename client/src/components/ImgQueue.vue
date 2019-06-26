<template>
  <v-card flat tile class="imgQueue-3-u-c">
    <v-img v-for="img in ajax" :class="img.cssClass"
      :src="img.url" :key="img.url"
      aspect-ratio="1"
      class="grey lighten-2"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    >
      <template v-slot:placeholder>
        <v-layout
          fill-height
          align-center
          justify-center
          ma-0
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-layout>
      </template>
    </v-img>
    <button @click="next">bbbb</button>
  </v-card>
            
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
  .imgQueue-3-u-c{
    position: absolute !important;
    top:8vh;
    z-index:50;
    width:100%;
    height: 70vw;
    overflow: hidden;
    background: transparent;
  }
  .bg-opacity-img-u-c{
    background: aliceblue;
  }
  .center-to-main{
    transform: translateY(-50%);
    /* top: 30vw; */
  }
  .imgQueue-3-u-c>*{
    top:50%;
    transform: translateY(-50%);
    border: 5px solid #ffffff;
  }
  .imgQueue-3-u-c>.child-1,
  .imgQueue-3-u-c>.child-3{
    /* flex: 1; */
    position: absolute;
    width: 48vw;
    height: 30vw;
    top:50%;
    opacity: 0.8;
    transition: all 1s ease-out;
  }
  .imgQueue-3-u-c>.child-1{
    left:-30vw;
  }
  .imgQueue-3-u-c>.child-3{
    left:80vw;
  }
  .imgQueue-3-u-c>.child-2{
    z-index:100;
    position: absolute;
    width: 80vw;
    height: 50vw;
    flex: 3;
    left: 10vw;
    opacity: 1;
    /* transform: translateX(-50%); */
    
    transition: all .75s ease-out;
  }
</style>
