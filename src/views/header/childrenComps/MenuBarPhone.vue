<template>
  <menu-bar class="menu-phone">
    <menu-bar-item v-for="menu in mainmenu" :key="menu.title" :title="menu.title" :path="menu.path">     
    </menu-bar-item>
  </menu-bar>
</template>

<script>
import MenuBar from 'components/common/menubar/MenuBar'
import MenuBarItem from 'components/common/menubar/MenuBarItem'

export default {
  name: 'NavBarPhone', 
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
.menu-phone .menu-item {
  width: 100%;
  padding: 8px 0;
  margin: 0;
  font-size: 1rem;
  text-align: left;
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.menu-phone .menu-item span {
  padding: 0;
}
.menu-phone .menu-item:not(.active):hover {
  color: rgba(255, 255, 255, 0.7);
}
.menu-phone .active {
  color: #fff;
}
</style>
