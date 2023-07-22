<template>
	<div>



			<el-row type="flex" justify="start">
				<strong style="font-size: 25px;">用户管理</strong>
			</el-row>

			<el-row style="margin-left: -60px;">
			  <el-col :span="5" v-for="(o, index) in tableData" :key="o.index" style="margin-top: 20px;margin-left: 40px;" >
				<el-card :body-style="{ padding: '0px' }" style="width: 300px;margin-left: 80px;">
					<el-row type="flex" justify="center" style="margin-top: 10px;">
						<el-image
						      style="width: 100px; height: 100px"
						      :src="require('../assets/toux'+(index+1)+'.jpeg')"
						      ></el-image>
						<!--<el-avatar :src="require('../assets/toux'+(index+1)+'.jpeg')"></el-avatar>-->
					</el-row>
					<el-row type="flex" justify="start" style="margin-top: 5px;margin-left: 20px;">
						<div>
							<strong>{{o.name}}</strong>
						</div>
					</el-row>
					<el-row type="flex" justify="start" style="margin-top: 15px;margin-left: 20px;">
						信任度评分:
						<el-rate
						  style="margin-left: 5px;"
						  v-model="o.rate"
						  disabled
						  show-score
						  text-color="#ff9900"
						  :colors="colors"
						  score-template="{value}">
						</el-rate>
					</el-row>
					<el-row>
						<el-button type="text" size="small" @click="dialogFormVisible1 = true">近期操作</el-button>
						<el-button type="text" size="small" style="color: red;" @click="sendemail">警告</el-button>
					</el-row>

				</el-card>
			  </el-col>
			</el-row>


			<el-dialog title="" :visible.sync="dialogFormVisible1" append-to-body>
				 <el-table
				       :data="doList"
				       style="width: 100%">
				       <el-table-column
				         prop="date"
				         label="时间"
				         width="200">
				       </el-table-column>
				       <el-table-column
				         prop="operation"
				         label="操作"
				         width="600">
				       </el-table-column>

				     </el-table>
			</el-dialog>















		</div>
</template>

<script>
	export default {
	  name:"User",
	  data(){
		  return{
			  colors: { 1: '#5a0000',2: '#fa0000',3: '#ce5702', 4:'#9ef70e', 5: '#00ff00' },

			  dialogFormVisible1:false,
			  tableData:[{
				  name:"admin",
				  rate:0.9
			  },
			  {
				name:"administrator"  ,
				rate:1.8
			  },{
				  name:"root",
				  rate:2.9
			  },{
				  name:"root1",
				  rate:3.2
			  },{
				  name:"root2",
				  rate:4.2
			  },{
				  name:"root3",
				  rate:4.8
			  },{
				  name:"root4",
				  rate:3.6
			  },{
				  name:"root5",
				  rate:4.4
			  }

			  ],
			  doList:[
				  {
					  date:"2023-6-13",
					  operation:"添加流表flow3"
				  },
				  {
				  					  date:"2023-6-11",
				  					  operation:"删除流表flow:1"
				  },
				  {
				  					  date:"2023-6-11",
				  					  operation:"删除流表flow1"
				  },
				  {
				  					  date:"2023-6-11",
				  					  operation:"添加流表flow1"
				  }
			  ]
		  }
	  },
	  methods: {
		  sendemail(){
			  this.$notify({
			            title: '成功发送警告信息',
			            message: '',
			            type: 'success',
						position: 'bottom-right'
			          });
		  }

	  }
	}
</script>

<style>
</style>