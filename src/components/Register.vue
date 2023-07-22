<template>
<div>
	<el-card>
        		<el-row type="flex" justify="start">
        			<strong style="font-size: 25px;">用户注册申请</strong>
        		</el-row>

        		<el-table
        		     :data="tableData"
        		     style="width: 100%;margin-top: 20px;">
        		     <el-table-column
        		       prop="name"
        		       label="用户名"
        		       width="180">
        		     </el-table-column>
        		     <el-table-column
        		       label="操作">
        			   <template slot-scope="scope">
        			        <el-button type="text" size="small"  @click="passRegister(scope.row)">通过</el-button>
        					<el-button type="text" size="small" style="color: red;" @click="delRegister(scope.row)">拒绝</el-button>
        			   </template>
        		     </el-table-column>

        		   </el-table>

        	</el-card>
</div>
</template>

<script>
	export default {
	  name:"Daipi",
	  data(){
		  return{
		  tableData:[],

		  }
	  },
	  created() {
      	  		this.getTableData();
      	  		},
	  methods: {

	  getTableData(){
      				this.$axios.get('/ssm/getRegister', {
      					params: {

      					}
      				}).then(response => {

      					this.tableData=response.data.data;

      				}).catch(error => {
      					console.error(error);
      				});
      			},
      			passRegister(row){
      			this.$axios.get('/ssm/passRegister', {
                      					params: {
                                            name:row.name,
                                            password:row.password
                      					}
                      				}).then(response => {
                      				alert("通过");
                      				this.getTableData();
                      				}).catch(error => {
                      					console.error(error);
                      				});
      			},
      			delRegister(row){
                      			this.$axios.get('/ssm/delRegister', {
                                      					params: {
                                                            name:row.name,
                                      					}
                                      				}).then(response => {
                                      				alert("已拒绝申请");
                                      				this.getTableData();
                                      				}).catch(error => {
                                      					console.error(error);
                                      				});
                      			},



	  }
	}
</script>

<style>
</style>
