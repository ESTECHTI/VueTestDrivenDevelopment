<template>
 <span 
  class="spinner-border" 
  :class="{'spinner-border-sm': size === 'small'}"
  role="status"
>
</span>
</template>
 
<script>
 
export default {
  name: '',
  components: {
 
  },
  props: {
    size: {
      type: String,
      default: "small"
    }
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