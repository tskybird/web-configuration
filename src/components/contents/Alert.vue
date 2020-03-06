<template>
  <div class="alert-danger alert" v-show="alertInfo">
    {{$t(prepend)}}: {{$t(alertInfo)}}
  </div>  
</template>

<script>
export default {
  name: 'Alert' ,
  props: { 
    prepend: {
      type: String,
      default: ''
    } ,  
    alertInfo: {
      type: String,
      default: ''
    }       
  } 
}
</script>