<template>
    <div class="content">               
        <router-view></router-view>        
    </div>
</template>

<script>
export default {
    name: 'Content'  
}
</script>

<style scoped>   
.content {
  font-size: 0.9rem;
  padding: 0 10px;
  flex: 1 1 auto;
}
</style>