<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <input 
      :id="id" 
      class="form-control"
      :class="{'is-invalid': help}" 
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type" 
    />
    <span v-if="help" class="invalid-feedback">{{ help }}</span>
  </div>
</template>
 
<script>
 
export default {
  emits: ["update:modelValue"],
  components: {
 
  },
  props: {
    label: String,
    id: String,
    help: String,
    modelValue: String,
    type: String,
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