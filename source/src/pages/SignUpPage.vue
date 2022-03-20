<template>
  <form>
    <h1>Sign Up</h1>
    <label for="username">Username</label>
    <input id="username" type="text" placeholder="username" v-model="username"/>

    <label for="email">E-mail</label>
    <input id="email" type="email" placeholder="e-mail" v-model="email"/>

    <label for="password">Password</label>
    <input id="password" type="password" placeholder="password" v-model="password"/>

    <label for="password-repeat">Password Repeat</label>
    <input id="password-repeat" type="password" placeholder="password" v-model="passwordRepeat"/>

    <button :disabled="isDisabled" @click.prevent="submit">Sign Up</button>

    {{username}}
  </form>
</template>
 
<script>
import axios from "axios";
 
export default {
  name: 'SignUpPage',
  components: {
 
  },
  props: {
 
  },
  data:() => {
    return {
      username: '',
      email: '',
      password: '',
      passwordRepeat: '',
    }
  },
  computed: {
    isDisabled() {
      return (this.password && this.passwordRepeat)? this.password != this.passwordRepeat : true
    }
  },
  methods: {
    submit() {
      axios.post("/api/1.0/users", {
        username: this.username,
        email: this.email,
        password: this.password,
      });
    }
  }
}
</script>
 
<style lang="scss" scoped>
 
</style>