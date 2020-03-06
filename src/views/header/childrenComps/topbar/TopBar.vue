<template>  
  <div class="topbar"> 
    <button class="menubar-toggler" type="button" @click="menubarPhoneToggle">
      <span class="menubar-toggler-icon"></span>
    </button>  
    <div class="topbar-brand">Logo</div> 
    <button-group/>
    <!--only phone-->    
    <menu-bar-phone class="menubar-collapse menu-phone" v-show="isShow"></menu-bar-phone>
  </div>  
</template>

<script>
import ButtonGroup from './ButtonGroup'
import MenuBarPhone from '../MenuBarPhone'
import { LOGOUT, LAST_ROUTE } from '@/store/mutation-types'

export default {
  name: 'TopBar', 
  data() {
    return {
      isShow: false
    }
  },
  components: { 
    ButtonGroup,   
    MenuBarPhone
  },
  mounted: function () {
     $('[data-toggle="tooltip"]').tooltip()
  }, 
  methods: {
    menubarPhoneToggle() {
      this.isShow = !this.isShow
    }
  }  
}
</script>

<style scoped> 
.topbar {
  position: relative;   
  display: flex;  
  flex-wrap: wrap;   
  align-items: center; 
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color:#4829B2;
  box-shadow: 0 1px 3px rgba(122,108,133,.6);  
 
}
.topbar-brand {  
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  color: #FFF;
}
.menubar-toggler {
  color: rgba(255, 255, 255, 0.5);  
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  /* border: 1px solid transparent;
  border-color: rgba(255, 255, 255, 0.1); */
  border-radius: 0.25rem;
   
}
.menubar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  /* background: no-repeat center center; */
  background-size: 100% 100%;
  font-size: 1.25rem;
  line-height: 1;
  /* color: rgba(255, 255, 255, 0.5); */
}
.menubar-collapse { 
  flex-basis: 100%;  
  flex-grow: 1; 
  align-items: center;
}
/* .navbar-dark {
  background-color:#4829B2;
  box-shadow: 0 1px 3px rgba(122,108,133,.6);
} */
/* .navbar .btn{  
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
} */
/* .navbar .dropdown-menu {
  right: 0;
  left: auto!important;
  min-width: 6rem;
} */
.bs-tooltip-bottom .tooltip-inner, .bs-tooltip-right .tooltip-inner {
  background-color: #50B92D;
}
.bs-tooltip-bottom .arrow::before {  
  border-bottom-color: #50B92D!important;  
}
.bs-tooltip-right .arrow::before {  
  border-right-color: #50B92D!important;  
}

@media (min-width: 576px) {
  .navbar-expand-sm {
    justify-content: space-between!important;
  }
  .menu-phone {
    display: none !important;    
  }
  .menubar-toggler {
    display: none;
  }
}

</style>
