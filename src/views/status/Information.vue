<template>
  <div>
    <h2 class="tab-title">
      {{$t('Information')}}
      <refresh-spinner :spin="isWaiting" @click.native="refreshStats()"></refresh-spinner>
    </h2> 
    
    <div class="row">
      <info-list id="device-mode-info">
        <info-data title="Product name" :content="general.productName"/>
        <info-data title="Firmware version" :content="general.firmwareVersion">
          <span>
            <a href data-toggle="modal" data-target="#fwupgrade">({{$t('Update')}})</a>                      
          </span>
          <fw-upgrade id="fwupgrade"></fw-upgrade>
        </info-data>
        <info-data title="Device serial No." :content="general.serialNo"/>
        <info-data title="Network mode" :content="'Router IPv4'"/>
        <info-data title="Wireless mode" :content="radios.operationMode"/>
      </info-list>
   
      <info-list id="device-info">
        <info-data title="Operating country" :content="general.deviceName"/>
        <info-data title="Friendly device name" :content="'LT'"/>
        <info-data title="Device location" :content="general.deviceLocation"/>
        <info-data title="Latitude/Longitude" :content="general.coordinates"/>
      </info-list>   
    </div>

    <div class="legend">{{$t('Radio')}}</div>

  </div>
</template>

<script>
import device from "network/requestdevice"
import RefreshSpinner from "views/widgets/RefreshSpinner"
import FwUpgrade from "views/widgets/FwUpgrade"

import InfoList from './childrenComps/InfoList'
import InfoData from './childrenComps/InfoData'

export default {
  name: 'Information',
  components: {
    RefreshSpinner,
    FwUpgrade,
    InfoList,
    InfoData
  },
  data() {
    return {
      general: {},
      wireless: {},
      radios: {},
      network: {},
      radio: "",
      vaps: "",
      peers: "",
      isWaiting: false     
    }
  },
  methods: {
    refreshStats() {
      this.isWaiting = true
      let vm = this
      device.statistics
      .load("general,wireless,network")
      .then(function(response) {
        vm.general = response.data.general
        vm.general.coordinates =
        vm.general.latitude + "/" + vm.general.longitude
        vm.general.firmwareVersion = vm.general.firmwareVersion.active

        vm.wireless = response.data.wireless
        vm.radios = response.data.wireless.radios
        vm.network = response.data.network
        vm.isWaiting = false
      })
      .catch(
        err =>{
          vm.isWaiting = false
          console.log(err)
        }
      )
    }  
  },
  beforeRouteEnter(to, from, next) {
    device.statistics
    .load("general,wireless,network")
    .then(function(response) {
      next(vm => {
        vm.general = response.data.general
        vm.general.coordinates =
        vm.general.latitude + "/" + vm.general.longitude
        vm.general.firmwareVersion = vm.general.firmwareVersion.active

        vm.wireless = response.data.wireless
        vm.radios = response.data.wireless.radios
        vm.network = response.data.network
      })
    })
    .catch(
      err =>{
        vm.isWaiting = false
        console.log(err)
      }
    )
  }
  // 路由改变前，组件就已经渲染完了
  /*beforeRouteUpdate (to, from,next) {    
        //this.general = null  
        this.isWaiting = true              
        device.statistics.load('general,wireless,network').then(
            function(response){
                this.general = response.data.general
                this.wireless = response.data.wireless
                this.network = response.data.network  
                this.isWaiting = false  
            }
        )
    }*/
}
</script>

<style scoped>

.legend {
  font-size: 1.2rem;
  /* color: #eee; */
}
</style>