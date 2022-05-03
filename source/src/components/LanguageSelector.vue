<template>
  <div>
    <img 
      src="../assets/brasil.png" 
      title="Portuguese" 
      @click="$i18n.locale = 'br'" 
      width="50" 
      height="50" 
    />
    <img 
      src="../assets/estados-unidos.png" 
      title="English" 
      @click="$i18n.locale = 'en'" 
      width="50" 
      height="50" 
    />
  </div>
</template>
<style scoped>
  img {
   cursor: pointer;
  }
</style>