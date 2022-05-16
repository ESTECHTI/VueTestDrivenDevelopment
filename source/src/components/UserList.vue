<template>
 <div class="card">
   <div class="card-header text-center">
     <h3>Users</h3>
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item list-group-item-action" v-for="user in page.content" :key="user">{{user.username}}</li>
   </ul>
 </div>
</template>
 
<script>
import { loadUsers } from "../api/apiCalls";
 
export default {
  name: '',
  components: {
 
  },
  props: {
 
  },
  data:() => {
    return {
      page: {
        content: [],
        page: 0,
        size: 0,
        totalPages: 0
      }
    }
  },
  computed: {
 
  },
  methods: {
 
  },

  async mounted() {
    const response = await loadUsers()
    this.page = response.data;
  }
 
}
</script>
 
<style lang="scss" scoped>
 
</style>