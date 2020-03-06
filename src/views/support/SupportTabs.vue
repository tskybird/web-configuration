<template>  
    <nav class="nav flex-column">                
        <router-link :to="{name:'troubleshoot'}" data-toggle="tooltip" data-placement="right" :title="troubleshooting">
            <font-awesome-icon icon="info"></font-awesome-icon> 
        </router-link>
        <router-link :to="{name:'syslog'}" data-toggle="tooltip" data-placement="right" :title="systemLog">
            <font-awesome-icon icon="info"></font-awesome-icon> 
        </router-link>
    </nav>
</template>

<script>
export default {
  name: 'StatusTabs',    
  computed: {
    troubleshooting () {
      return this.$t('Troubleshooting')
    },
    systemLog () {
      return this.$t('System log')
    }
  },
  mounted: function () {
    $('[data-toggle="tooltip"]').tooltip()
  }, 
}
</script>

<style scoped>

</style>