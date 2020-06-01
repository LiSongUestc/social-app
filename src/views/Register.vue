<template>
  <div>
    <form @submit="onSubmit">
      <p>
        username
        <input type="text" v-model="username" />
      </p>
      <p>
        email
        <input type="text" v-model="email" />
      </p>
      <p>
        password
        <input type="password" v-model="password" />
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: null,
      email: null,
      password: null
    };
  },
  methods: {
    onSubmit() {
      let paramData = {
        credentials: {
          username: this.username,
          email: this.email,
          password: this.password
        },
        $router: this.$router
      };
      this.$store.dispatch('register', paramData);
    }
  }
};
</script>

<style>
</style>