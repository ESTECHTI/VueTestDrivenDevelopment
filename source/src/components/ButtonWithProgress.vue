<template>
 <button class="btn btn-primary" 
    :disabled="disabled || apiProgress" 
    @click.prevent="onClick"
  >
    <Spinner v-if="apiProgress"/>
    <slot></slot>
  </button>
</template>
 
<script>
import Spinner from "./Spinner.vue";
 
export default {
  name: '',
  components: {
    Spinner
  },
  props: {
    apiProgress: Boolean,
    disabled: Boolean,
    onClick: Function
  },
  data:() => {
    return {
 
    }
  },
  computed: {
 
  },
  methods: {
 
  },
  mounted() {
 
 },
 
}
</script>
 
<style lang="scss" scoped>
 
</style>