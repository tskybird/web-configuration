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
                  vm.chartData.tx = response.data.tx                 
                  vm.chartData.rx = response.data.rx                  
                  vm.flag = true                                        
                }
            ) 
        })
    },
    mounted () {
        this.fresh(this.fetchData)
    },
    methods: {
        fetchData() {
            let vm = this
            device.capabilities().then(function(response) {   
                vm.chartData.tx = response.data.tx                 
                vm.chartData.rx = response.data.rx                  
                vm.flag = true                
            }) 
        },

        fresh (fetchData) {            
            function interval(func, wait) {
                let interv = function () {
                    func.call(null)
                    setTimeout(interv, wait)
                }
                setTimeout(interv, wait)
            }

            interval(
                function() {    //每隔1s更新一次数据
                    fetchData()           
                }, 
            5000)
        }
    }
}
</script>

<style>
</style>