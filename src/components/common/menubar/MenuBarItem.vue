<template>
  <div class="menu-item" @click="itemClick" :class="{active:isActived}">
    <slot name="item-icon"></slot>
    <span>{{$t(title)}}</span>
  </div>
</template>

<script>
export default {
  name: "MenuBarItem",
  props: {
    title: {
      type: String,
      required: true
    },
    path: String
  },
  computed: {
    isActived() {
      return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  methods: {
    itemClick() {      
      this.$router.push({
        path: this.path
      });
    }
  }
};
</script>

<style scoped>
.menu-item {
  width: 100px; 
  margin: 0 10px;
  font-size: 1.1rem;
  text-align: center;
  color: #7673f3;
}
.menu-item span {
  padding-left: 5px;
}
.menu-item:not(.active):hover {
  color: #6f42c1;
}
.active {
  color: #e25a53;
}
</style>