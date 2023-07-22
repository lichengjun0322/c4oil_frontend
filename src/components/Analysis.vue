<template>
	<div>
		<el-row type="flex" justify="start">
			<strong style="font-size: 25px;">网络流量分析</strong>
		</el-row>
		<el-row style="margin-top: 25px;">
			<el-col :span="11" style="margin-left: 50px;">
				<el-card>
				    <el-row type="flex" justify="start">
                    			<strong style="font-size: 18px;">业务/恶意流量占比</strong>
                    </el-row>
				    <div id="main1" style="width: 100%;height: 400px;"></div>
				</el-card>
			</el-col>
			<el-col :span="11" style="margin-left: 50px;">

                 <el-card>
                 <el-row type="flex" justify="start">
                      <strong style="font-size: 18px;">各类主要流量进入量</strong>
                  </el-row>
				<div id="main2" style="width: 100%;height: 400px;"></div></el-card>
			</el-col>
		</el-row>
		<el-row style="margin-top: 30px;">
			<el-col :span="11" style="margin-left: 50px;">
				<el-card>
				<el-row type="flex" justify="start">
                    <strong style="font-size: 18px;">各类业务流量进入量</strong>
                </el-row>
				<div id="main3" style="width: 100%;height: 400px;"></div></el-card>
			</el-col>
			<el-col :span="11" style="margin-left: 50px;">
				<el-card>
				<el-row type="flex" justify="start">
                    <strong style="font-size: 18px;">各类恶意流量进入量</strong>
                </el-row>
				<div id="main4" style="width: 100%;height: 400px;"></div></el-card>
			</el-col>
		</el-row>
	</div>

</template>

<script>
	import * as echarts from 'echarts'
	export default{
		data(){
			return{

			}
		},
		mounted(){
			this.initCharts();
		},
		methods:{
			initCharts(){
				let chartDom1 = document.getElementById("main1")
				let myChart1 = echarts.init(chartDom1);
				let option1 = {

					  tooltip: {
                                  trigger: 'item',
                                  formatter: "{a} <br/>{b}: {c} ({d}%)"
                              },
                              color:['#bbe2e8','#FFD83D'],
                              legend: {
                                  orient: 'horizontal',
                                  x: 'left',
                                  data: ['业务流量',  '恶意流量']
                              },
                              series: [{
                                  name: '访问来源',
                                  type: 'pie',
                                  radius: ['30%', '70%'],
                                  avoidLabelOverlap: false,
                                  label: {
                                      normal: {
                                          show: false,
                                          position: 'center'
                                      },
                                      emphasis: {
                                          show: true,
                                          textStyle: {
                                              fontSize: '20',
                                              fontWeight: 'bold'
                                          }
                                      }
                                  },
                                  labelLine: {
                                      normal: {
                                          show: false
                                      }
                                  },
                                  data: [{
                                      value: 5,
                                      name: '业务流量'
                                      },
                                      {
                                          value: 1,
                                          name: '恶意流量'
                                      }
                                  ]
                              }]
				};
				let chartDom2 = document.getElementById("main2")
				let myChart2 = echarts.init(chartDom2);
				let option2 = {

					color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00','#80F0FFFF','#00FFB7FF','#37B9FFFF','#FF0048FF','#FFE600FF'],

                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross',
                                    label: {
                                        backgroundColor: '#6a7985'
                                    }
                                }
                            },
                            legend: {
                                data: ['BitTorrent', 'Facetime', 'FTP','Gmail','MySQL', 'Outlook', 'Skype','SMB', 'Weibo', 'WorldOfWarcraft']
                            },
                            toolbox: {
                                feature: {
                                    saveAsImage: {}
                                }
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    boundaryGap: false,
                                    data:  []
                                }
                            ],
                            yAxis: [
                                {
                                    type: 'value'
                                }
                            ],
                            series: [
                                {
                                    name: 'BitTorrent',
                                    type: 'line',
                                    stack: 'Total',
                                    areaStyle: {},
                                    emphasis: {
                                        focus: 'series'
                                    },

                                    data: [89,98,105,102,105,108,100],
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(128, 255, 165)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(1, 191, 236)'
                                        }
                                    ])
                                },
                                {
                                    name: 'Facetime',
                                    type: 'line',
                                    stack: 'Total',
                                    areaStyle: {},
                                    emphasis: {
                                        focus: 'series'
                                    },
                                    data: [89,92,94,93,94,91,95],
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(0, 221, 255)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(77, 119, 255)'
                                        }
                                    ])
                                },
                                {
                                    name: 'FTP',
                                    type: 'line',
                                    stack: 'Total',
                                    areaStyle: {},
                                    emphasis: {
                                        focus: 'series'
                                    },
                                    data: [65,68,72,75,71,72,70],
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(55, 162, 255)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(116, 21, 219)'
                                        }
                                    ])
                                },
                                {
                                    name: 'Gmail',
                                    type: 'line',
                                    stack: 'Total',
                                    areaStyle: {},
                                    emphasis: {
                                        focus: 'series'
                                    },
                                    data: [64,65,66,65,64,67,62],
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(255, 0, 135)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(135, 0, 157)'
                                        }
                                    ])
                                },
                                {
                                    name: 'MySQL',
                                    type: 'line',
                                    stack: 'Total',
                                    label: {
                                        show: true,
                                        position: 'top'
                                    },
                                    areaStyle: {},
                                    emphasis: {
                                        focus: 'series'
                                    },
                                    data: [39,40,42,43,45,47,46],
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(255, 191, 0)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(224, 62, 76)'
                                        }
                                    ])
                                },

                                {
                                    name: 'Outlook',
                                    type: 'line',
                                    stack: 'Total',
                                    areaStyle: {},
                                    emphasis: {
                                        focus: 'series'
                                    },
                                    data: [75,72,76,75,74,70,72],
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(128,240,255)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(17,1,236)'
                                        }
                                    ])

                                },
                                {
                                    name: 'Skype',
                                    type: 'line',
                                    stack: 'Total',
                                    areaStyle: {},
                                    emphasis: {
                                        focus: 'series'
                                    },
                                    data: [12,17,18,16,14,12,17],
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(0,255,183)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(145,77,255)'
                                        }
                                    ])
                                },
                                {
                                    name: 'SMB',
                                    type: 'line',
                                    stack: 'Total',
                                    areaStyle: {},
                                    emphasis: {
                                        focus: 'series'
                                    },
                                    data: [55,56,57,52,53,54,55],
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(55,185,255)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(176,21,219)'
                                        }
                                    ])
                                },
                                {
                                    name: 'Weibo',
                                    type: 'line',
                                    stack: 'Total',
                                    areaStyle: {},
                                    emphasis: {
                                        focus: 'series'
                                    },
                                    data: [34,36,37,35,38,39,32],
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(255,0,72)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(73,0,157)'
                                        }
                                    ])
                                },
                                {
                                    name: 'WorldOfWarcraft',
                                    type: 'line',
                                    stack: 'Total',
                                    label: {
                                        show: true,
                                        position: 'top'
                                    },
                                    areaStyle: {},
                                    emphasis: {
                                        focus: 'series'
                                    },
                                    data: [20,25,26,23,24,22,27],
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(255,230,0)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(224,62,127)'
                                        }
                                    ])
                                }


                            ]
				};
				let chartDom3 = document.getElementById("main3")
				let myChart3 = echarts.init(chartDom3);
				let option3 = {
					color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00','#80F0FFFF','#00FFB7FF','#37B9FFFF','#FF0048FF','#FFE600FF'],
                            title: {
                                // text: 'Gradient Stacked Area Chart'
                            },
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross',
                                    label: {
                                        backgroundColor: '#6a7985'
                                    }
                                }
                            },
                            legend: {
                                data: ['Cridex', 'Geodo', 'Htbot', 'Miuref', 'Neris','Nsis-ay','Shifu','Tinba','Virut','Zeus']
                            },
                            toolbox: {
                                feature: {
                                    saveAsImage: {}
                                }
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    boundaryGap: false,
                                    data: []
                                }
                            ],
                            yAxis: [
                                {
                                    type: 'value'

                                }
                            ],
                            series: [
                                {
                                    name: 'Cridex',
                                    type: 'line',
                                    stack: 'Total',
                                    smooth: true,
                                    lineStyle: {
                                        width: 0
                                    },
                                    showSymbol: false,
                                    areaStyle: {
                                        opacity: 0.8,
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: 'rgb(128, 255, 165)'
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgb(1, 191, 236)'
                                            }
                                        ])
                                    },
                                    emphasis: {
                                        focus: 'series'
                                    },
                                    data: [1,1,1,1,1,1,1]
                                },
                                {
                                    name: 'Geodo',
                                    type: 'line',
                                    stack: 'Total',
                                    smooth: true,
                                    lineStyle: {
                                        width: 0
                                    },
                                    showSymbol: false,
                                    areaStyle: {
                                        opacity: 0.8,
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: 'rgb(0, 221, 255)'
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgb(77, 119, 255)'
                                            }
                                        ])
                                    },
                                    emphasis: {
                                        focus: 'series'
                                    },
                                    data: [20,30,40,80,150,100,60]
                                },
                                {
                                    name: 'Htbot',
                                    type: 'line',
                                    stack: 'Total',
                                    smooth: true,
                                    lineStyle: {
                                        width: 0
                                    },
                                    showSymbol: false,
                                    areaStyle: {
                                        opacity: 0.8,
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: 'rgb(55, 162, 255)'
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgb(116, 21, 219)'
                                            }
                                        ])
                                    },
                                    emphasis: {
                                        focus: 'series'
                                    },
                                    data: [12,12,12,12,12,12,12]
                                },
                                {
                                    name: 'Miuref',
                                    type: 'line',
                                    stack: 'Total',
                                    smooth: true,
                                    lineStyle: {
                                        width: 0
                                    },
                                    showSymbol: false,
                                    areaStyle: {
                                        opacity: 0.8,
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: 'rgb(255, 0, 135)'
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgb(135, 0, 157)'
                                            }
                                        ])
                                    },
                                    emphasis: {
                                        focus: 'series'
                                    },
                                    data: [20,20,20,20,20,20,20]
                                },
                                {
                                    name: 'Neris',
                                    type: 'line',
                                    stack: 'Total',
                                    smooth: true,
                                    lineStyle: {
                                        width: 0
                                    },
                                    showSymbol: false,
                                    label: {
                                        show: true,
                                        position: 'top'
                                    },
                                    areaStyle: {
                                        opacity: 0.8,
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: 'rgb(255, 191, 0)'
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgb(224, 62, 76)'
                                            }
                                        ])
                                    },
                                    emphasis: {
                                        focus: 'series'
                                    },
                                    data: [18,19,20,25,37,6,8]
                                },


                                {
                                    name: 'Nsis-ay',
                                    type: 'line',
                                    stack: 'Total',
                                    smooth: true,
                                    lineStyle: {
                                        width: 0
                                    },
                                    showSymbol: false,
                                    areaStyle: {
                                        opacity: 0.8,
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: 'rgb(128,240,255)'
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgb(17,1,236)'
                                            }
                                        ])
                                    },
                                    emphasis: {
                                        focus: 'series'
                                    },
                                    data: [10,12,13,14,20,45,56]
                                },
                                {
                                    name: 'Shifu',
                                    type: 'line',
                                    stack: 'Total',
                                    smooth: true,
                                    lineStyle: {
                                        width: 0
                                    },
                                    showSymbol: false,
                                    areaStyle: {
                                        opacity: 0.8,
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: 'rgb(0,255,183)'
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgb(145,77,255)'
                                            }
                                        ])
                                    },
                                    emphasis: {
                                        focus: 'series'
                                    },
                                    data: [10,12,13,14,67,98,100]
                                },
                                {
                                    name: 'Tinba',
                                    type: 'line',
                                    stack: 'Total',
                                    smooth: true,
                                    lineStyle: {
                                        width: 0
                                    },
                                    showSymbol: false,
                                    areaStyle: {
                                        opacity: 0.8,
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: 'rgb(55,185,255)'
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgb(176,21,219)'
                                            }
                                        ])
                                    },
                                    emphasis: {
                                        focus: 'series'
                                    },
                                    data: [1,1,1,1,1,1,1]
                                },
                                {
                                    name: 'Virut',
                                    type: 'line',
                                    stack: 'Total',
                                    smooth: true,
                                    lineStyle: {
                                        width: 0
                                    },
                                    showSymbol: false,
                                    areaStyle: {
                                        opacity: 0.8,
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: 'rgb(255,0,72)'
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgb(73,0,157)'
                                            }
                                        ])
                                    },
                                    emphasis: {
                                        focus: 'series'
                                    },
                                    data: [1,1,1,1,1,1,1]

                                },
                                {
                                    name: 'Zeus',
                                    type: 'line',
                                    stack: 'Total',
                                    smooth: true,
                                    lineStyle: {
                                        width: 0
                                    },
                                    showSymbol: false,
                                    label: {
                                        show: true,
                                        position: 'top'
                                    },
                                    areaStyle: {
                                        opacity: 0.8,
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: 'rgb(255,230,0)'
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgb(224,62,127)'
                                            }
                                        ])
                                    },
                                    emphasis: {
                                        focus: 'series'
                                    },
                                    data: [20,30,50,70,120,123,65]
                                }


                            ]
				};
				let chartDom4 = document.getElementById("main4")
				let myChart4 = echarts.init(chartDom4);
				let option4 = {
					dataset: {
                                source: [
                                    ['score','amount', 'product'],
                                    ['0',707, 'BitTorrent'],
                                    ['5',648, 'Facetime'],
                                    ['10',493, 'FTP'],
                                    ['15', 453, 'Gmail'],
                                    ['20',302, 'MySQL'],

                                    ['75',91, 'Cridex'],
                                    ['80',648, 'Geodo'],
                                    ['85',84, 'Htbot'],
                                    ['90', 140, 'Miuref'],
                                    ['95',133, 'Neris'],

                                ]
                            },
                            grid: { containLabel: true },
                            xAxis: { name: 'amount' },
                            yAxis: { type: 'category' },
                            visualMap: {
                                orient: 'horizontal',
                                left: 'center',
                                min: 0,
                                max: 100,
                                text: ['恶意流量', '业务流量'],
                                // Map the score column to color
                                dimension: 0,
                                inRange: {
                                    color: ['#65B581', '#FFCE34', '#FD665F']
                                }
                            },
                            series: [
                                {
                                    type: 'bar',
                                    encode: {
                                        // Map the "amount" column to X axis.
                                        x: 'amount',
                                        // Map the "product" column to Y axis
                                        y: 'product'
                                    }
                                }
                            ]
				};
				myChart1.setOption(option1);
				window.addEventListener("resize",()=>{
					myChart1.resize()
				})
				myChart2.setOption(option2);
				window.addEventListener("resize",()=>{
					myChart2.resize()
				})
				myChart3.setOption(option3);
				window.addEventListener("resize",()=>{
					myChart3.resize()
				})
				myChart4.setOption(option4);
				window.addEventListener("resize",()=>{
					myChart4.resize()
				})


			}






		}


	}



</script>

<style>
</style>
