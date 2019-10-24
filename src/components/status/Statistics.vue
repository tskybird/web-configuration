<template>
    <div>
        <h2>{{$t('Statistics')}}</h2>   
        <echart v-if="flag" ifname="LAN0" :chart-data="chartData"></echart>
    </div>
</template>

<script>
import Echart from '@/components/widgets/echart'
import device from '@/device.js'
export default {
    name: 'Statistics',
    data() {
        return{
            flag: false,            
            chartData: {
               tx: 0,
               rx: 0,
            }        
        }
    },   
    components: {
        Echart
    },    
    beforeRouteEnter (to, from, next) { 
        device.capabilities().then(function(response) {
            next(
                vm => {                  
                  vm.chartData.tx = response.data.lan0.Tx                 
                  vm.chartData.rx = response.data.lan0.Rx                  
                  vm.flag = true                     
                }
            ) 
        })    
    }
}
</script>

<style>
</style>