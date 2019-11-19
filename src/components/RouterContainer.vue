<template>
  <div id="app-router">    
    <nav-bar></nav-bar>
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
import NavBar from './NavBar.vue'

export default {
  name: 'RouterContainer',
  components: {
    NavBar
  }
}
</script>

<style lang="less">
body.modal-open {
  overflow: visible;
}
#app-router {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;;
  background-color: #f4f5f7;//#eeedf4;
  header {
    margin-bottom: 20px;   
  }
  .container {  
    flex: 1 1 auto;
    .view-wrap {
      display: flex;
      border: 1px solid #ddcff4;
      box-shadow: 0 0 3px rgba(155, 142, 165, 0.4);
      border-radius: 5px; 
      background: #FCFCFD;   
      .content {
        padding: 0 10px;
        flex: 1 1 auto;
        h2 {
          font-size: 1.3rem;
          height: 60px;
          line-height: 60px;
          border-bottom: 1px solid #dcd0f5;
          color: #6f42c1;
        }
      }
    }  
  }
  footer {
    margin-top: 20px;    
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #666;
  }
}

@media screen and (max-width: 576px) {
  .container {
    height: 100%;
  }
}
</style>
