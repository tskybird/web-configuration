<template>
    <div >
        <h2>
            {{$t('Information')}}
            <refresh-spinner :spin="isWaiting" @click.native="refreshStats()"></refresh-spinner>            
        </h2>  
          
        <div class="row">
            <div id="device-mode-info" class="col-lg-6">
                <dl class="dl-horizontal">
                    <dt>{{$t('Product name')}}:</dt>
                    <dd>{{general.productName}}</dd>
                    <dt class="visible-xs">{{$t('Firmware version')}}:</dt>
                    <dd class="visible-xs">
                        <div id="firmware-status" class="pull-left">
                           <span>{{general.firmwareVersion}}</span>
                           <span ><a href="" data-toggle="modal" data-target="#fwupgrade">({{$t('Update')}})</a></span>
                           <fw-upgrade id="fwupgrade"></fw-upgrade>
                          <!--  <div class="modal" id="fwupgrade" tabindex="-1">                               
                                <div class="modal-dialog">
                                  <div class="modal-content">
                                      <div class="modal-header">
                                       Firmware update
                                      </div>
                                      <div class="modal-body"></div>
                                      <div class="modal-footer"></div>
                                   </div>
                                </div>
                          
                           </div> -->
                        </div>
                    </dd>
                    <dt>{{$t('Device serial No.')}}:</dt><dd>{{general.serialNo}}</dd>
                    <dt>{{$t('Network mode')}}:</dt><dd>Router IPv4</dd>
                    <dt>{{$t('Wireless mode')}}:</dt><dd>{{radios.operationMode}}</dd>
                </dl>
            </div>

            <div id="device-info" class="col-lg-6">
                <dl class="dl-horizontal">
                    <dt>{{$t('Operating country')}}:</dt>
                    <dd>
                        <span >LT</span>
                        <!--<span class="text-muted" >Device № 13</span>-->
                    </dd>
                    <dt>{{$t('Friendly device name')}}:</dt><dd class="text-wrap" >{{general.deviceName}}</dd>
                    <dt>{{$t('Device location')}}:</dt><dd class="text-wrap" >{{general.deviceLocation}}</dd>
                    <dt>{{$t('Latitude/Longitude')}}:</dt><dd>{{general.coordinates}}</dd>
                </dl>
            </div>            
        </div> 
        <div class="legend">{{$t('Radio')}}</div>
    </div>
</template>

<script>
import device from '@/device'
import RefreshSpinner from '@/components/widgets/RefreshSpinner'
import FwUpgrade from '@/components/widgets/FwUpgrade'

function refreshStats () {
    //this.isWaiting = true
    device.statistics.load('general,wireless,network').then(
            function(response){  //console.info('response:'+response.data)
                next(
                    vm=>{
                        vm.general = response.data.general                        
                        vm.wireless = response.data.wireless
                        vm.network = response.data.network
                        vm.isWaiting = false  
                    }
                )
            }
    )
}

export default {
    name: 'Information',
    components: {
        RefreshSpinner,
        FwUpgrade
    },
    data () {
        return {
            general: {},
            wireless: {}, 
            radios: {},
            network: {},
            radio:'',
            vaps: '',
            peers: '',           
            isWaiting: false
        }
    },
    methods: {
        refreshStats() {
            this.isWaiting = true
            let vm = this
            device.statistics.load('general,wireless,network').then(
                function (response) {
                   vm.general = response.data.general
                   vm.general.coordinates = vm.general.latitude + '/' + vm.general.longitude
                   vm.general.firmwareVersion = vm.general.firmwareVersion.active
                   
                   vm.wireless = response.data.wireless
                   vm.radios = response.data.wireless.radios                   
                   vm.network = response.data.network  
                   vm.isWaiting = false
                }  
            )
        },
        
    },
    beforeRouteEnter (to, from, next) {               
        device.statistics.load('general,wireless,network').then(
            function(response){
                next(
                    vm=>{
                        vm.general = response.data.general
                        vm.general.coordinates = vm.general.latitude + '/' + vm.general.longitude
                        vm.general.firmwareVersion = vm.general.firmwareVersion.active
                        
                        vm.wireless = response.data.wireless
                        vm.radios = response.data.wireless.radios                        
                        vm.network = response.data.network  
                    }
                )
            }
        )        
        
    },
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

<style lang="less" scoped>

dd {         
    margin-bottom: 0;
}
.legend {
    font-size: 1.2rem;
    color: #eee;
}
@media (max-width: 479px) {
    dt {
        width: auto;
    }
    dd {
        margin-left: 0;
    }
}
@media (max-width:767px) and (min-width: 480px){
    dt{
       clear: left;
       float: left;      
       width: 160px;
       text-align: right;
    }
    dd {
        display: block;
        margin-left: 165px;
    }
}

@media (min-width: 768px) {   
   
      dt{
        clear: left;
        float: left;
        width: 170px;
        overflow: hidden;
        text-align: right;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      dd {
        //margin-bottom: 0;
        margin-left: 180px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    
}


</style>