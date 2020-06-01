<template>
  <nav>
    <div>
      <router-link :to="{name:'homeGlobal'}">conduit</router-link>
      <ul v-if="!isAuthenticated">
        <li>
          <router-link :to="{name:'homeGlobal'}">Home</router-link>
        </li>
        <li>
          <router-link :to="{name:'login'}">Login</router-link>
        </li>
        <li>
          <router-link :to="{name:'register'}">Register</router-link>
        </li>
      </ul>
      <ul v-else>
        <li>
          <router-link :to="{name:'homeGlobal'}">Home</router-link>
        </li>
        <li>
          <router-link :to="{name:'article-edit'}">New Article</router-link>
        </li>
        <li>
          <router-link :to="{name:'settings'}">Settings</router-link>
        </li>
        <li>
          <router-link 
            :to="{
              name:'profile',
              params:{username:currentUser.username}
            }"
          >
          {{currentUser.username}}
          </router-link>
        </li>
        <li>
            <el-button type="danger" round @click="logout">Logout</el-button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Header',
    computed: {
      ...mapGetters(["currentUser","isAuthenticated"])
    },
    methods:{
      logout(){
        this.$store.dispatch('logout');
      }
    }
}
</script>

<style>

</style>