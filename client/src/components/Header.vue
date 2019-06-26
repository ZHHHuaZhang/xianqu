<template>
  <v-toolbar dark color="primary" class="sticky-top-u-c">
    <v-text-field placeholder="search" class="input-u-c" box></v-text-field>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>  
  </v-toolbar>  
</template>

<script>
export default {
  data(){
    return{
      inputAplha: 0.3
    }
  }
}
</script>

<style scoped>
  .sticky-top-u-c{  
    position: sticky !important;
    background: #5044ea;
    color: #ffffff;
    height: 14vw;
    z-index: 1000;
  }
  .container-text-u-c{
    padding: 16px;
    font-size: 1rem;
  }
  .search-container-u-c{
    background: #ffffff;
    opacity: 0.5;
    width: 65%;
    display: flex;
    height: 80%;
  }
  .input-u-c{
    width: 80%;
    /* height: 60%; */
    font-size: 6vw;
  }
</style>

