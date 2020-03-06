<template>
  <nav class="nav flex-column">
    <router-link :to="{name: 'information'}" data-toggle="tooltip" data-placement="right" :title="information">
      <font-awesome-icon icon="info"></font-awesome-icon>
    </router-link>
    <router-link :to="{name: 'statistics'}" data-toggle="tooltip" data-placement="right" :title="statistics">
      <font-awesome-icon icon="chart-line"></font-awesome-icon>
    </router-link>
    <router-link :to="{name: 'wireless'}" data-toggle="tooltip" data-placement="right" :title="wirelessNetworks">
      <font-awesome-icon icon="broadcast-tower"></font-awesome-icon>
    </router-link>
    <router-link :to="{name: 'network'}" data-toggle="tooltip" data-placement="right" :title="network">
      <font-awesome-icon icon="network-wired"></font-awesome-icon>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "StatusTabs",
  computed: {
    information() {
      return this.$t("Information")
    },
    statistics() {
      return this.$t("Statistics")
    },
    wirelessNetworks() {
      return this.$t("Wireless networks")
    },
    network() {
      return this.$t("Network")
    }
  },
  mounted: function() {
    $('[data-toggle="tooltip"]').tooltip()
  }
}
</script>

<style scoped>  
</style>