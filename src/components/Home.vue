<template>
	<div>
		<el-row type="flex" justify="start">
			<strong style="font-size: 25px;">网络实时状态</strong>
		</el-row>
		<el-row style="margin-top: 25px;">
			<el-col :span="9">
            				<el-row>
            					<el-col :span="4">
            						<el-card style="width: 300px;">
            							<el-row type="flex" justify="start">
            								<el-image
            									style="margin-top: -8px;margin-right: 5px;"
            								      :src="require('../assets/用户.png')"
            								></el-image>
            								<strong style="font-size: 20px;">登录人数</strong></el-row>
            							<el-row type="flex" justify="start" style="margin-top: 25px;">
            								<strong style="font-size: 30px;">1</strong>
            							</el-row>
            							<el-row type="flex" justify="start" style="margin-top: 25px;">
            								<span style="color: green;margin-top: 3px;">100%</span><span>&nbsp;&nbsp;监测情况</span>
            							</el-row>
            						</el-card>
            					</el-col>
            					<el-col :span="4" style="margin-left: 250px;">
            						<el-card style="width: 300px;">
            							<el-row type="flex" justify="start"><strong style="font-size: 20px;">
            							<el-image
            								style="margin-top: -5px;margin-right: 5px;"
            							      :src="require('../assets/设备.png')"
            							></el-image>
            							控制器数量</strong></el-row>
            							<el-row type="flex" justify="start" style="margin-top: 25px;">
            								<strong style="font-size: 30px;">1</strong>
            							</el-row>
            							<el-row type="flex" justify="start" style="margin-top: 25px;">
            								<span style="color: green;margin-top: 3px;">100%</span><span>&nbsp;&nbsp;监测情况</span>
            							</el-row>
            						</el-card>
            					</el-col>
            				</el-row>

            				<el-row style="margin-top: 25px;">
            					<el-col :span="4">
            						<el-card style="width: 300px;">
            							<el-row type="flex" justify="start"><strong style="font-size: 20px;">
            							<el-image
            								style="margin-top: -5px;margin-right: 5px;"
            							      :src="require('../assets/Switch1.png')"
            							></el-image>
            							交换机数量</strong></el-row>
            							<el-row type="flex" justify="start" style="margin-top: 25px;">
            								<strong style="font-size: 30px;">6</strong>
            							</el-row>
            							<el-row type="flex" justify="start" style="margin-top: 25px;">
            								<span style="color: green;margin-top: 3px;">100%</span><span>&nbsp;&nbsp;监测情况</span>
            							</el-row>
            						</el-card>
            					</el-col>
            					<el-col :span="4" style="margin-left: 250px;">
            						<el-card style="width: 300px;">
            							<el-row type="flex" justify="start"><strong style="font-size: 20px;">
            							<el-image
            								style="margin-top: -5px;margin-right: 5px;"
            							      :src="require('../assets/终端.png')"
            							></el-image>
            							终端数量</strong></el-row>
            							<el-row type="flex" justify="start" style="margin-top: 25px;">
            								<strong style="font-size: 30px;">4</strong>
            							</el-row>
            							<el-row type="flex" justify="start" style="margin-top: 25px;">
            								<span style="color: green;margin-top: 3px;">100%</span><span>&nbsp;&nbsp;监测情况</span>
            							</el-row>
            						</el-card>
            					</el-col>
            				</el-row>
            			</el-col>
			<el-col :span="14" >
				<el-card style="margin-left: 105px;">
					<el-row type="flex" justify="start">
						<strong>告警信息统计</strong>
					</el-row>

					<div id="main1" style="width: 100%;height: 340px;"></div>
				</el-card>
			</el-col>
		</el-row>
		<el-row style="margin-top: 25px;">
			<el-col :span="16">
				<el-card>
					<el-row type="flex" justify="start">
						<strong>最近操作记录</strong>
					</el-row>
					 <el-table
					      :data="tableData"
					      style="width: 100%">
					      <el-table-column
					        prop="user"
					        label="用户"
					        width="180">
					      </el-table-column>
					      <el-table-column
					        prop="date"
					        label="操作时间"
					        width="180">
					      </el-table-column>
					      <el-table-column
					        prop="operation"
					        label="操作">
					      </el-table-column>
						  <el-table-column
						    prop="state"
						    label="状态"
						    width="180">
						  </el-table-column>
					    </el-table>
				</el-card>
			</el-col>
			<el-col :span="6" style="margin-left: 66px;">
				<el-card>
					<el-row type="flex" justify="start">
						<span>本月管理员操作统计</span>
					</el-row>
					<div id="main2" style="width: 100%;height: 400px;"></div>
				</el-card>
			</el-col>
		</el-row>
	</div>

</template>

<script>
	import * as echarts from 'echarts'
	export default{
		data(){
			return{
				tableData: [{
							user:'root',
				            date: '2023-06-20',
				            operation: '添加流表flow1',
				            state: 'pass'
				          }, {
				            user:'root',
				            date: '2023-06-20',
				            operation: '添加流表flow2',
				            state: 'pass'
				          }, {
				            user:'administrator',
				            date: '2023-06-20',
				            operation: '删除流表flow1',
				            state: 'pass'
				          }, {
				            user:'root',
				            date: '2023-06-19',
				            operation: '删除流表flow2',
				            state: 'pass'
				          },
						  {
						    user:'administrator',
						    date: '2023-06-19',
						    operation: '删除流表flow1',
						    state: 'pass'
						  },
						  {
						    user:'administrator',
						    date: '2023-06-19',
						    operation: '删除流表flow1',
						    state: 'pass'
						  },
						  {
						    user:'administrator',
						    date: '2023-06-19',
						    operation: '删除流表flow1',
						    state: 'pass'
						  }]
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
					 xAxis: {
					    type: 'category',
					    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					  },
					  yAxis: {
					    type: 'value'
					  },
					  series: [
					    {
					      data: [820, 932, 901, 934, 1290, 1330, 1320],
					      type: 'line',
					      smooth: true
					    }
					  ]
				};
				myChart1.setOption(option1);
				window.addEventListener("resize",()=>{
					myChart1.resize()
				})

				let chartDom2 = document.getElementById("main2")
				let myChart2 = echarts.init(chartDom2);
				let option2 = {
					xAxis: {
					    type: 'category',
					    data: ['root', 'admin1', 'admin']
					  },
					  yAxis: {
					    type: 'value'
					  },
					  series: [
					    {
					      data: [300, 10, 30],
					      type: 'bar',
					      showBackground: true,
					      backgroundStyle: {
					        color: 'rgba(180, 180, 180, 0.2)'
					      }
					    }
					  ]
				};
				myChart2.setOption(option2);
				window.addEventListener("resize",()=>{
					myChart2.resize()
				})

			}



		}


	}



</script>

<style>
</style>
