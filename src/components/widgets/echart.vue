<template>
  <div id="main"></div> 
</template>

<script>
import * as echarts from "echarts/lib/echarts"
import "echarts/lib/chart/line"
import "echarts/lib/component/title"
import "echarts/lib/component/legend"
import device from "@/device"

export default {
  name: "Echart",
  props: ['ifname','chartData'],  
  data () {
    return {
        date: [0],
        dataTx: [],
        dataRx: [],
    }
  },
  computed: {  
    title() {
       return "Wireless (" + this.ifname + ") traffic (last 5 min.)";
    }
  }, 
  mounted () {      
    this.drawChart()    // 绘制图表
  },
  methods: {   
    drawChart() {  
      this.dataTx.push(this.chartData.tx)   // tx初始值
      this.dataRx.push(this.chartData.rx)   // rx初始值

      let chart = echarts.init(document.getElementById("main"))
      chart.setOption({
        baseOption: {
          title: { text: this.title },
          tooltip: {},
          legend: {
            top: 70,
            right: "10%",
            orient: "vertical",
            itemWidth: 10,      // width of legend icon
            itemHeight: 10,     // height of legend icon
            icon: "rect",
            data: ["Tx, Mbps", "Rx, Mbps"]
          },
          xAxis: {
            type: 'category',
            min: 0,
            max: 59,            
            axisLine: {
              lineStyle: {
                color: "#888"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            }            
          },
          yAxis: {
            min: 0,
            max: 125000,
            interval: 25000,
            axisLine: {
              lineStyle: {
                color: "#888"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: "#333"
              }
            }
          },
          series: [
            {
              name: "Tx, Mbps",
              type: "line",
              smooth: true, 
              symbol: "none",
              data: this.dataTx
            },
            {
              name: "Rx, Mbps",
              type: "line",
              smooth: true, 
              symbol: "none",
              data: this.dataRx, 
              itemStyle: {
                color: "#fd7e14"
              }
            }
          ]
        },
        media: [
          {
            query: {
              maxWidth: 576
            },
            option: {
              grid: {
                left: 60
              }
            }
          }
        ]
      })  
      window.onresize = function() {     // 图表尺寸随浏览器窗口的伸缩而变化
        chart.resize();
      }
    }
  },
  watch: {
      chartData: {
          deep: true,
          handler (newval, oldval) {            
            this.dataTx.push(newval.tx)
            this.dataRx.push(newval.rx)
            let chart = echarts.init(document.getElementById("main"))
            chart.setOption({             
              series: [
                  {
                    name: 'Tx, Mbps',
                    data: this.dataTx
                  },
                  {
                    name: 'Rx, Mbps',
                    data: this.dataRx
                  }
              ]
            })  
          }
      }
  }
}
</script>

<style lang='less' scoped>
#main {
  width: 100%;
  height: 400px;
}
</style>