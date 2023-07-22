<template>
	<div>



			<el-row type="flex" justify="start">
				<strong style="font-size: 25px;">用户管理</strong>
			</el-row>
            <el-row type="flex" justify="end">
				<el-button style="margin-left: 800px;" @click="control">用户访问控制</el-button>
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
						  v-model="o.credit/2"
						  disabled
						  show-score
						  text-color="#ff9900"
						  :colors="colors"
						  score-template="{value}">
						</el-rate>
					</el-row>
					<el-row>
						<el-button type="text" size="small" @click="dialogFormVisible1 = true">近期操作</el-button>
						<el-button type="text" size="small" style="color: orange;" @click="sendemail(o)">警告</el-button>
						<el-button type="text" size="small" style="color: red;" @click="delUser(o)">删除</el-button>
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



            <el-dialog title="用户访问控制" :visible.sync="outerVisible">
            			    <el-dialog
            			      width="30%"
            			      title="编辑控制信息"
            			      :visible.sync="innerVisible"
            			      append-to-body>

            				  <div>
            					  <el-form  class="demo-form-inline">
            					  			  <el-form-item label="操作等级">
            					  				<el-select v-model="grade" placeholder="请选择">
            					  				  <el-option label="1" value="1"></el-option>
            					  				  <el-option label="2" value="2"></el-option>
            									  <el-option label="3" value="3"></el-option>
            									  <el-option label="4" value="4"></el-option>
            									  <el-option label="5" value="5"></el-option>
            									  <el-option label="6" value="6"></el-option>
            									  <el-option label="7" value="7"></el-option>
            									  <el-option label="8" value="8"></el-option>
            									  <el-option label="9" value="9"></el-option>
            									  <el-option label="10" value="10"></el-option>
            					  				</el-select>
            					  			  </el-form-item>
            					  			  <el-form-item label="时间限制">
            					  				<el-time-picker
            					  				    is-range
            					  				    v-model="time"
            					  				    range-separator="至"
            					  				    start-placeholder="开始时间"
            					  				    end-placeholder="结束时间"
            					  				    placeholder="选择时间范围">
            					  				  </el-time-picker>
            					  			  </el-form-item>
            					  			  <el-form-item label="部门限制">
            									<el-select v-model="dept" placeholder="请选择">
            									  <el-option label="生产部门" value="生产部门"></el-option>
            									  <el-option label="管理部门" value="管理部门"></el-option>
            									  <el-option label="支持部门" value="支持部门"></el-option>

            									</el-select>
            					  			  </el-form-item>
            					  		</el-form>
            				  </div>


            				  <div slot="footer" class="dialog-footer">
            				    <el-button @click="innerVisible = false">退出</el-button>
            				    <el-button type="primary" @click="updateTest">确定</el-button>
            				  </div>
            			    </el-dialog>
            				<div id="main1" style="width: 100%;height: 600px;"></div>
            			    <div slot="footer" class="dialog-footer">
            			      <el-button @click="outerVisible = false">退出</el-button>
            			      <el-button type="primary" @click="innerVisible = true">编辑</el-button>
            			    </div>
            			  </el-dialog>













		</div>
</template>

<script>
    import * as echarts from 'echarts'
    	var myChart1;

	export default {
	  name:"User",
	  data(){
		  return{
		        grade:"",
                dept:"",
                houro:"",
                mino:"",
                seco:"",
                hourt:"",
                mint:"",
                sect:"",
                time: [],
                outerVisible: false,
                innerVisible: false,
			  colors: { 1: '#5a0000',2: '#fa0000',3: '#ce5702', 4:'#9ef70e', 5: '#00ff00' },

			  dialogFormVisible1:false,
			  tableData:[],
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
	  created() {
      	  		this.getTableData();
      	  		this.usertest();

      	  		},
	  methods: {
	  updateTest(){
	     //alert(this.dept+this.grade+this.time[0].getMinutes())
	     this.$axios.get('/ssm/updateTest', {
                            params: {
                                 grade:this.grade,
                                 dept:this.dept,
                                 hour1:this.time[0].getHours(),
                                 min1:this.time[0].getMinutes(),
                                 sec1:this.time[0].getSeconds(),
                                 hour2:this.time[1].getHours(),
                                 min2:this.time[1].getMinutes(),
                                 sec2:this.time[1].getSeconds()
                            }
                        }).then(response => {
                        this.usertest();
                        this.outerVisible=false;
                        this.innerVisible=false;
                            this.$notify({
                                title: '修改成功',
                                message: '',
                                type: 'success',
                                position: 'bottom-right'
                              });


                        }).catch(error => {
                            console.error(error);
                        });


	  },
	  usertest(){
	    this.$axios.get('/ssm/usertest', {
            params: {

            }
        }).then(response => {
       // alert(response.data.grade);
            this.houro=response.data.hour1;
            if(response.data.min1<10){
                this.mino='0'+response.data.min1;
            }else{
                this.mino=response.data.min1;
            }
            this.seco=response.data.sec1;
            this.hourt=response.data.hour2;
            if(response.data.min2<10){
                this.mint='0'+response.data.min2;
            }else{
                this.mint=response.data.min2;
            }
            this.sect=response.data.sec2;
            this.grade=response.data.grade;
            var hour1=response.data.hour1;
            var hour2=response.data.hour2;
            var min1=response.data.min1;
            var min2=response.data.min2;
            var sec1=response.data.sec1;
            var sec2=response.data.sec2;
            var time1=new Date(0,0,0,hour1,min1,sec1);
            var time2=new Date(0,0,0,hour2,min2,sec2);
            this.time=[time1,time2];
            if(response.data.dept==1){
                this.dept="生产部门";
            }else if(response.data.dept==2){
                this.dept="管理部门";
            }else if(response.data.dept==3){
                this.dept="支持部门";
            }


        }).catch(error => {
            console.error(error);
        });


	  },
	  control(){
      			  this.outerVisible=true;
      			  //alert(this.time[0].getHours())
      			this.$nextTick(() => {
      							//  执行echarts方法
      							  this.initCharts();
      							})
      		  },
      		  initCharts() {


      		  		    if(myChart1 != null && myChart1 != "" && myChart1 != undefined){
      		  				myChart1.dispose();//解决echarts dom已经加载的报错
      		  			}
      		  		    // 基于准备好的dom，初始化echarts实例
      		  		    let chartDom1 = document.getElementById("main1")
      		  		    myChart1 = echarts.init(chartDom1);
      		  			// 指定图表的配置项和数据
      		  			let option1 = {
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
              show: true
            },
            edgeSymbol: ['', ''],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 80
            },
            data: [
              {
                name: '用户访问',
                symbol:'rect',
                x: 600,
                y: 50

              },
              {
                name: '管理员',
                symbol:'rect',
                x: 800,
                y: 200
              },
              {
                name: '非管理员',
                symbol:'rect',
                x: 400,
                y: 200
              },
              {
                name: '操作等级<'+this.grade,
                symbol:'rect',
                x: 600,
                y: 350
              },
              {
                name: '操作等级>='+this.grade,
                symbol:'rect',
                x: 200,
                y: 350
              },
              {
                name: '访问时间:'+this.houro+':'+this.mino+'-'+this.hourt+':'+this.mint,
                symbol:'rect',
                x: 400,
                y: 500
              },
              {
                name: this.dept,
                symbol:'rect',
                x: 800,
                y: 500
              }
            ],
            // links: [],
            links: [

              {
                source:0,
                target:1,

              },
              {
                source:0,
                target:2,

              },{
                source: 2,
                target: 3,

              },{
                source: 2,
                target: 4,

              },{
                source: 3,
                target: 5,

              },{
                source: 3,
                target: 6,

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
      		  		  },
	       getTableData(){
      		  				this.$axios.get('/ssm/getUser', {
      		  					params: {

      		  					}
      		  				}).then(response => {

      		  					this.tableData=response.data.data;

      		  				}).catch(error => {
      		  					console.error(error);
      		  				});
      		  			},
		  sendemail(raw){
		  this.$axios.get('/ssm/sendemail.action', {
                					params: {
                                        name:raw.name
                					}
                				}).then(response => {



                				}).catch(error => {
                					console.error(error);
                				});
			  this.$notify({
			            title: '成功发送警告信息',
			            message: '',
			            type: 'success',
						position: 'bottom-right'
			          });
		  },

            delUser(raw){
				this.$confirm('此操作将永久删除该用户的相关信息，是否确定删除？', '提示', {
				          confirmButtonText: '确定',
				          cancelButtonText: '取消',
				          type: 'warning'
				        }).then(() => {
							this.realDelUser(raw);
				        }).catch(() => {
				          this.$message({
				            type: 'info',
				            message: '已取消删除'
				          });
				        });
			},
			realDelUser(raw){
				this.$axios.get('/ssm/realDelUser', {
					params: {
						name:raw.name,

					}
				}).then(response => {
					if(response.data.code==0){
						this.$message({
						  type: 'success',
						  message: '删除成功!'
						});
						this.getTableData();
					}

				}).catch(error => {
					console.error(error);
				});

			},


	  }
	}
</script>

<style>
</style>