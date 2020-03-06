<template>    
    <nav class="nav flex-column">       
        <router-link :to="{name:'survey'}" data-toggle="tooltip" data-placement="right" :title="siteSurvey">
            <font-awesome-icon icon="info"></font-awesome-icon>  
        </router-link>
        <router-link :to="{name:'alignment'}" data-toggle="tooltip" data-placement="right" :title="antennaAlignment">
            <font-awesome-icon icon="info"></font-awesome-icon>  
        </router-link>
        <router-link :to="{name:'linktest'}" data-toggle="tooltip" data-placement="right" :title="linkTest">
            <font-awesome-icon icon="info"></font-awesome-icon>  
        </router-link>
        <router-link :to="{name:'analyzer'}" data-toggle="tooltip" data-placement="right" :title="spectrumAnalyzer">
            <font-awesome-icon icon="info"></font-awesome-icon>  
        </router-link>
        <router-link :to="{name:'pingtrace'}" data-toggle="tooltip" data-placement="right" :title="pingTrace">
            <font-awesome-icon icon="info"></font-awesome-icon>  
        </router-link>       
    </nav>    
</template>

<script>
export default {
  name: 'ToolsTabs',   
  computed: {
    siteSurvey () {
      return this.$t('Site survey')
    },
    antennaAlignment() {
      return this.$t('Antenna alignment')
    },
    linkTest () {
      return this.$t('Link test')
    },
    spectrumAnalyzer () {
      return this.$t('Spectrum analyzer')
    },
    pingTrace () {
      return this.$t('Ping & trace')
    }
  },
  mounted: function () {
    $('[data-toggle="tooltip"]').tooltip()
  },
}
</script>

<style scoped>

</style>