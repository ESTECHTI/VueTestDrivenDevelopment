<template>
  <div>
    <img src="../assets/profile.png" alt="profle" width="30" class="rounded-circle sm"/>
   {{user.username}}
  </div>
</template>
 
<script>
 
export default {
  name: '',
  components: {
 
  },
  props: {
    user: Object
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