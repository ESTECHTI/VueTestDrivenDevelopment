<template>
 <div data-testid="activation-page">
   <div class="alert alert-danger mt-3" v-if="fail">Activation failure</div>
   <div class="alert alert-success mt-3" v-if="success">
     Account is activated
    </div>
   <span v-if="apiProgress" class="spinner-border" role="status"></span>
 </div>
</template>
 
<script>
import { activate } from '../api/apiCalls';

export default {
  name: '',
  components: {
    
  },
  props: {
 
  },
  data:() => {
    return {
      success: false,
      fail: false,
      apiProgress: false
    }
  },
  computed: {
 
  },
  methods: {
 
  },
  async mounted() {
    this.apiProgress = true;
    try {
      activate(this.$route.params.token)
      this.success = true
      this.apiProgress = false
    } catch (error) {
      this.fail = true
    }
      this.apiProgress = false
  },
 
}
</script>