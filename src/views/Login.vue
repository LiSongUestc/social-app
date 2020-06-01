<template>
  <form @submit.prevent="onSubmit(email,password)">
    
      <input type="text" v-model="email"/>
    

    
      <input type="password" v-model="password"/>
    

    
      <button type="submit">Create</button>
    
  </form>
</template>
<script>
// import { mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    onSubmit(email, password) {
      let paramData = {
        credentials: {
          email,
          password
        },
        $router: this.$router
      }
      this.$store.dispatch("login", paramData);
    }
  }
};
</script>
