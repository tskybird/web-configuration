<template>
  <div class="router-view">    
    <header-line/>
    <div class="container">
      <div class="view-wrap">
        <router-view name="tabs"></router-view>        
        <router-view name="content"></router-view>        
      </div>
    </div>    
    <footer>&copy;2019</footer>  
  </div>
</template>

<script>
import HeaderLine from './header/HeaderLine'

export default {
  name: 'RouterContainer',
  components: {
    HeaderLine
  }
}
</script>

<style scoped>
.container {
  flex: 1 1 auto; 
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
} 
.router-view {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;;
   background-color: #f4f5f7;  /*#eeedf4; */
}
.view-wrap {  
  height: 100%; 
  display: flex;
  border: 1px solid #ddcff4;
  box-shadow: 0 0 3px rgba(155, 142, 165, 0.4);
  border-radius: 5px; 
  background: #FCFCFD;  
}
footer {
  margin-top: 10px;    
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #666;
}

/* @media screen and (max-width: 576px) {
  .container {
    height: 100%;
  }
} */

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
} 
</style>
