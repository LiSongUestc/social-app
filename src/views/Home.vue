<template>
  <el-container>
    <el-header class='el-header'>
      <h1>conduit121</h1>
      <p>A place to share your knowledge.</p>
    </el-header>
    <el-main>
      <el-menu>
        <el-menu-item v-if="isAuthenticated">
          <router-link
            :to="{name: 'home-my-feed'}"
          >
          Your Feed
          </router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link
            :to="{name: 'homeGlobal'}"
          >
          Global Feed
          </router-link>
        </el-menu-item>
        <el-menu-item v-if="tag">
          <router-link
            :to="{name: 'home-tag'}"
          >
          {{tag}}
          </router-link>
        </el-menu-item>
      </el-menu>
      <router-view></router-view>
    </el-main>
    <el-aside>
      <p>Popular Tags</p>
      <Tag />
    </el-aside>
  </el-container>
</template>

<script>
// @ is an alias to /src
import Tag from '../components/Tag'
import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {
    Tag
  },
  computed:{
    ...mapGetters(['isAuthenticated','tags']),
    tag(){
      return this.$route.params.tag;
    }
  }
}
</script>
<style scoped>
  .el-header{
    margin-bottom: 2rem
  }
</style>
