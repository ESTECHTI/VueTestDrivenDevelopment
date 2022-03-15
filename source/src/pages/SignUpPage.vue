<template>
  <div>
    <h1>Sign Up</h1>
    <label for="username">Username</label>
    <input id="username" type="text" placeholder="username"/>

    <label for="email">E-mail</label>
    <input id="email" type="email" placeholder="e-mail"/>

    <label for="password">Password</label>
    <input id="password" type="password" placeholder="password"/>

    <label for="password-repeat">Password Repeat</label>
    <input id="password-repeat" type="password" placeholder="password"/>

    <button disabled>Sign Up</button>
  </div>
</template>
 
<script>
 
export default {
  name: 'SignUpPage',
  components: {
 
  },
  props: {
 
  },
  data:() => {
    return {
 
    }
  },
  computed: {
 
  },
  methods: {
 
  }
 
}
</script>
 
<style lang="scss" scoped>
 
</style>