<template>
  <nav class="nav flex-column">
    <router-link
      :to="{name: 'information'}"
      data-toggle="tooltip"
      data-placement="right"
      :title="information"
    >
      <font-awesome-icon icon="info"></font-awesome-icon>
    </router-link>
    <router-link
      :to="{name: 'statistics'}"
      data-toggle="tooltip"
      data-placement="right"
      :title="statistics"
    >
      <font-awesome-icon icon="chart-line"></font-awesome-icon>
    </router-link>
    <router-link
      :to="{name: 'wireless'}"
      data-toggle="tooltip"
      data-placement="right"
      :title="wirelessNetworks"
    >
      <font-awesome-icon icon="broadcast-tower"></font-awesome-icon>
    </router-link>
    <router-link
      :to="{name: 'network'}"
      data-toggle="tooltip"
      data-placement="right"
      :title="network"
    >
      <font-awesome-icon icon="network-wired"></font-awesome-icon>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "StatusTabs",
  computed: {
    information() {
      return this.$t("Information");
    },
    statistics() {
      return this.$t("Statistics");
    },
    wirelessNetworks() {
      return this.$t("Wireless networks");
    },
    network() {
      return this.$t("Network");
    }
  },
  mounted: function() {
    $('[data-toggle="tooltip"]').tooltip();
  }
};
</script>

<style lang="less">
.nav {
  flex: 0 0 60px;
  border-right: 1px solid #ddcff4;
  background-color: #f2f2f7; //#dfdff8;
  a {
    line-height: 3.75rem;
    height: 3.75rem;
    border-bottom: 1px solid #ddcff4;
    border-right: 1px solid #ddcff4;
    text-align: center;
    color: #7673f3;
  }
  a:hover {
    color: #6f42c1;
  }
  a.router-link-exact-active {
    //router-link-active
    color: #6f42c1;
    margin-right: -1px;
    margin-left: -1px;
    border-right: 1px solid #fff;
    border-left: 2px solid #6f42c1;
    background-color: #fff;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
}
</style>