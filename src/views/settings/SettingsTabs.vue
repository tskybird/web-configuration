<template>  
    <nav class="nav flex-column">
        <router-link :to="{name:'wirelessconfig'}"  data-toggle="tooltip" data-placement="right" :title="wirelessConfig">
           <font-awesome-icon icon="info"></font-awesome-icon>
        </router-link>
        <router-link :to="{name:'networkconfig'}"  data-toggle="tooltip" data-placement="right" :title="networkConfig">
           <font-awesome-icon icon="info"></font-awesome-icon>
        </router-link>
        <router-link :to="{name:'traffic'}"  data-toggle="tooltip" data-placement="right" :title="trafficManagement">
            <font-awesome-icon icon="info"></font-awesome-icon>
        </router-link>
        <router-link :to="{name:'services'}"  data-toggle="tooltip" data-placement="right" :title="servicesConfig">
            <font-awesome-icon icon="info"></font-awesome-icon>
        </router-link>
        <router-link :to="{name:'system'}"  data-toggle="tooltip" data-placement="right" :title="systemConfig">
            <font-awesome-icon icon="info"></font-awesome-icon>
        </router-link>        
    </nav>
</template>

<script>
export default {
    name: 'SettingsTabs',
    mounted: function () {
       $('[data-toggle="tooltip"]').tooltip()
    },
    computed: {
        wirelessConfig () {
            return this.$t('Wireless configuration')
        },
        networkConfig () {
            return this.$t('Network configuration')
        },
        trafficManagement () {
            return this.$t('Traffic management')
        },
        servicesConfig () {
            return this.$t('Services configuration')
        },
        systemConfig () {
            return this.$t('System configuration')
        },
    }
}
</script>

<style scoped>
</style>