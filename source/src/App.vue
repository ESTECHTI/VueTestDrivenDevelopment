<template>
<div>
  <div class="shadow-sm bg-light mb-3">
    <nav class="navbar navbar-expand navbar-light container">
      <div class="container-fluid p-0">
        <router-link class="navbar-brand" to="/" title="Home">
          <img src="./assets/home.png" width="40" height="40" alt="Home">
          Home
        </router-link>
        <ul class="navbar-nav ml-auto">
          <router-link class="nav-link" to="/signup">{{ $t('signUp') }}</router-link>
          <router-link class="nav-link" to="/login">Login</router-link>
        </ul>
      </div>
    </nav>
  </div>
  <div class="container">
    <router-view />
    <LanguageSelector />
  </div>
</div>
    
</template>

<script>
import LanguageSelector from './components/LanguageSelector.vue'

export default {
  name: 'App',
  components: {
    LanguageSelector
  },
  data() {
    return {
      path: window.location.pathname
    }
  },
  methods: {
    onClickLink(event) {
      this.path = event.currentTarget.attributes.href.value;
      window.history.pushState({}, "", this.path);
    }
  }
}
</script>

<style scoped>

</style>
