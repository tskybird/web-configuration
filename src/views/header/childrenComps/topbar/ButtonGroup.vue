<template>
  <div class="btn-group">
    <button class="btn btn-light" @click="logout">{{$t('Logout')}}</button>
    <div class="btn-group">    
      <button type="button" class="btn btn-warning dropdown-toggle" @click="dropdownToggle"></button>
      <div class="dropdown-menu-1" ref="dropdownMenu" v-show="isShow">
        <a class="dropdown-item" href="#" @click="save">{{$t('Save')}}</a>
        <a class="dropdown-item" href="#" @click="cancel">{{$t('Cancel')}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { LOGOUT, LAST_ROUTE } from "@/store/mutation-types";
export default {
  name: "ButtonGroup",
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    logout(state) {
      this.$store.commit(LOGOUT);
      this.$store.commit(LAST_ROUTE, this.$route.path);
      this.$router.push("/login");
    },
    dropdownToggle() {
      this.isShow = !this.isShow;
    },
    save() {
      console.log("save");
    },
    cancel() {
      console.log("cancel");
    }
  }
};
</script>

<style scoped>
.dropdown-menu-1 {
  position: absolute;
  top: 100%;  
  left: auto;
  right: 0;
  z-index: 1000; 
  float: left;
  min-width: 6rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem; 
}
.dropdown-toggle {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
  
}

</style>