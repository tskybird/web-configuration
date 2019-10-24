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
      let basetime = 0
      let date = [0]
      let dataTx = [] 
      let dataRx = [] 

      dataTx.push(this.chartData.tx)   // tx初始值
      dataRx.push(this.chartData.rx)   // rx初始值

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
            },
            data: date
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
              data: dataTx
            },
            {
              name: "Rx, Mbps",
              type: "line",
              smooth: true, 
              symbol: "none",
              data: dataRx, 
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

      function addData(shift) {    // 更新tx和rx的值
          basetime += 10          
          date.push(basetime)         
          dataTx.push(Math.random() * 1000 + dataTx[dataTx.length-1])          
          dataRx.push(Math.random() * 1000 + dataRx[dataRx.length-1])
      }      
       
      //let vm = this
      function interval(func, wait) {
            let interv = function () {
                func.call(null)
                setTimeout(interv, wait)
            }
            setTimeout(interv, wait)
      }

      interval(function() {    //每隔1s更新一次数据
          addData(true)
          chart.setOption({
              xAxis: {
                  data: date 
              },
              series: [
                  {
                    name: 'Tx, Mbps',
                    data: dataTx
                  },
                  {
                    name: 'Rx, Mbps',
                    data: dataRx
                  }
              ]
          })
      }, 1000)

      window.onresize = function() {     // 图表尺寸随浏览器窗口的伸缩而变化
        chart.resize();
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