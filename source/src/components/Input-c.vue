<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <input :id="id" class="form-control" type="text" @input="onChange"/>
    <span>{{ help }}</span>
  </div>
</template>
 
<script>
 
export default {
  emits: ["custom-input"],
  components: {
 
  },
  props: {
    label: String,
    id: String,
    help: String
  },
  data:() => {
    return {
 
    }
  },
  computed: {
 
  },
  methods: {
    onChange(event) {
      this.$emit("custom-input", event.target.value);
    }
  }
 
}
</script>
 
<style lang="scss" scoped>
 
</style>