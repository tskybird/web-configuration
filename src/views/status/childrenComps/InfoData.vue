<template>
  <div>
    <dt>{{$t(title)}}:</dt>
    <dd>
      {{content}}
      <slot></slot>
    </dd> 
  </div> 
</template>

<script>
export default {
  name: 'InfoData',
  props: {
    title: {
      type: String, 
      default: ''
    },
    content: {
      type: String, 
      default: ''
    }
  }  
}
</script>

<style scoped>
dd {
  margin-bottom: 0;
}
@media (max-width: 479px) {
  dt {
    width: auto;
  }
  dd {
    margin-left: 0;
  }
}
@media (max-width: 767px) and (min-width: 480px) {
  dt {
    clear: left;
    float: left;
    width: 160px;
    text-align: right;
  }
  dd {
    display: block;
    margin-left: 165px;
  }
}

@media (min-width: 768px) {
  dt {
    clear: left;
    float: left;
    width: 170px;
    overflow: hidden;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  dd {    
    margin-left: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>