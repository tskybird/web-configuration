<template>
  <div class="input-group">
    <div class="input-group-prepend">
      <div class="input-group-text">  
        <slot name="prepend"></slot>
      </div>  
    </div>

    <slot name="form-control"></slot>       
  </div> 
</template>

<script>
export default {
  name: 'FormGroup'  
}
</script>

<style scoped>

</style>> 


