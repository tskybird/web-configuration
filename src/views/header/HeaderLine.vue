<template>
  <header>    
    <top-bar/>
    <!--only desktop--> 
    <menu-bar-desktop class="navbar-nav"></menu-bar-desktop>   
  </header>
</template>

<script>
import TopBar from './childrenComps/topbar/TopBar'
import MenuBarDesktop from './childrenComps/MenuBarDesktop'
import { LOGOUT, LAST_ROUTE } from '@/store/mutation-types'

export default {
  name: 'HeaderLine', 
  components: {
    TopBar,
    MenuBarDesktop 
  }
}
</script>

<style scoped>
header {
  margin-bottom: 20px;   
}
</style>
