 <template>
  <el-main>
    
    <router-link v-for="i in list" class="list-item" style="list-style:none" :to="i.url" >
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
      
  </el-main>
</template>

<style scoped>
  
</style>

<script>
export default {
  data () {
    return {
      list: [{
        url: '/index'
      },
      {
        url: '/pub'
      }],
    }
  }
}
</script>


