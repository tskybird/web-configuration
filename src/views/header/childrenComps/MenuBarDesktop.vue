<template>
  <menu-bar class="menu-desktop">
    <menu-bar-item v-for="menu in mainmenu" :key="menu.title" :title="menu.title" :path="menu.path">
      <template v-slot:item-icon>
        <font-awesome-icon :icon="menu.icon"></font-awesome-icon>
      </template> 
    </menu-bar-item>
  </menu-bar>
</template>

<script>
import MenuBar from 'components/common/menubar/MenuBar'
import MenuBarItem from 'components/common/menubar/MenuBarItem'

export default {
  name: 'NavBarDesktop', 
  components: {
    MenuBar,
    MenuBarItem
  },
  computed: {
    mainmenu() {
      return this.$store.state.mainmenu    
    }
  }
}
</script>

<style scoped>  
.menu-desktop {
  display: flex;
  flex-direction: row;
  justify-content: center;  
  margin-top: 20px;
}  

@media (max-width: 575px) {
  .menu-desktop {
    display: none;
  }
} 
</style>
