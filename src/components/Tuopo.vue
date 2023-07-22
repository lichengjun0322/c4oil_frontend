<template>
	<div>


		<el-card style="margin-top: 20px;">
			<el-row type="flex" justify="start">
				<strong style="font-size: 25px;">网络拓朴</strong>
			</el-row>
			<div id="main1" style="width: 100%;height: 750px;"></div>
		</el-card>

	</div>
</template>

<script>
	import * as echarts from 'echarts'
	export default {
	  name:"Tuopo",
	  data(){
		  return{

		  }
	  },
	  mounted(){
	  	this.initCharts();
	  },
	  methods: {
		  initCharts(){
		  	let chartDom1 = document.getElementById("main1")
		  	let myChart1 = echarts.init(chartDom1);
		  	let option1 = {
			  title: {
				text: ''
			  },
			  tooltip: {},
			  animationDurationUpdate: 1500,
			  animationEasingUpdate: 'quinticInOut',
			  series: [
				{
				  type: 'graph',
				  layout: 'none',
				  symbolSize: 100,

				  roam: true,
				  label: {
					show: true
				  },
				  edgeSymbol: ['none', 'none'],
				  edgeSymbolSize: [4, 10],
				  edgeLabel: {
					fontSize: 20
				  },
				  data: [
					{
					  name: 'openflow:1',
					  x: 300,
					  y: 200,
					  symbol:'image://'+require('../assets/switch.png'),
					},
					{
					  name: 'openflow:2',
					  x: 200,
					  y: 200,
					  symbol:'image://'+require('../assets/switch.png'),
					},
					{
					  name: 'openflow:3',
					  x: 400,
					  y: 100,
					  symbol:'image://'+require('../assets/switch.png'),
					},
					{
					  name: 'openflow:4',
					  x: 400,
					  y: 300,
					  symbol:'image://'+require('../assets/switch1.png'),
					},
					{
					  name: 'openflow:5',
					  x: 100,
					  y: 300,
					  symbol:'image://'+require('../assets/switch.png'),
					},
					{
					  name: 'openflow:6',
					  x:100,
					  y: 100,
					  symbol:'image://'+require('../assets/switch.png'),
					},
					{
					  name: 'h1',
					  x:500,
					  y: 0,
					  symbol:'image://'+require('../assets/pc.png'),
					},
					{
					  name: 'h2',
					  x:500,
					  y: 400,
					  symbol:'image://'+require('../assets/pc.png'),
					},
					{
					  name: 'h3',
					  x:0,
					  y: 400,
					  symbol:'image://'+require('../assets/pc.png'),
					},
					{
					  name: 'h4',
					  x:0,
					  y: 0,
					  symbol:'image://'+require('../assets/pc.png'),
					}

				  ],
				  // links: [],
				  links: [

					{
					  source: 'openflow:1',
					  target: 'openflow:3',
					},
					{
					  source: 'openflow:1',
					  target: 'openflow:2'
					},
					{
					  source: 'openflow:2',
					  target: 'openflow:1'
					},
					{
					  source: 'openflow:1',
					  target: 'openflow:4'
					},
					{
					  source: 'openflow:2',
					  target: 'openflow:6'
					},
					{
					  source: 'openflow:3',
					  target: 'openflow:1'
					},
					{
					  source: 'openflow:2',
					  target: 'openflow:5'
					},
					{
					  source: 'openflow:4',
					  target: 'openflow:1'
					},
					{
					  source: 'openflow:5',
					  target: 'openflow:2'
					},
					{
					  source: 'openflow:6',
					  target: 'openflow:2'
					},
					{
					  source: 'h1',
					  target: 'openflow:3'
					},
					{
					  source: 'openflow:3',
					  target: 'h1'
					},
					{
					  source: 'openflow:4',
					  target: 'h2',
					  lineStyle:{
                                  color:'#ff0000'
                                }
					},
					{
					  source: 'h2',
					  target: 'openflow:4',
					  lineStyle:{
                                                        color:'#ff0000'
                                                      }
					},
					{
					  source: 'h3',
					  target: 'openflow:5'
					},
					{
					  source: 'openflow:5',
					  target: 'h3'
					},
					{
					  source: 'openflow:6',
					  target: 'h4'
					},
					{
					  source: 'h4',
					  target: 'openflow:6'
					}
				  ],
				  lineStyle: {
					opacity: 0.9,
					width: 2,
					curveness: 0
				  }
				}
			  ]
			};
			myChart1.setOption(option1);
			window.addEventListener("resize",()=>{
				myChart1.resize()
			})



		  }

	  }
	}
</script>

<style>
</style>
