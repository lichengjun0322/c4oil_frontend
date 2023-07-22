<template>
<div>
	<el-card>
        		<el-row type="flex" justify="start">
        			<strong style="font-size: 25px;">流表管理</strong>
        		</el-row>

        		<el-table
        		     :data="tableData"
        		     style="width: 100%;margin-top: 20px;">
        		     <el-table-column
        		       prop="flow_id"
        		       label="flow_id"
        		       width="180">
        		     </el-table-column>
        		     <el-table-column
        		       prop="node_id"
        		       label="node_id"
        		       width="180">
        		     </el-table-column>
        			 <el-table-column
        			   prop="table_id"
        			   label="table_id"
        			   width="180">
        			 </el-table-column>
        			 <el-table-column
        			   prop="priority"
        			   label="priority"
        			   width="180">
        			 </el-table-column>
        			 <el-table-column
        			   prop="flow_name"
        			   label="flow_name"
        			   width="180">
        			 </el-table-column>
        			 <el-table-column
        			   prop="source_ip"
        			   label="source_ip"
        			   width="180">
        			 </el-table-column>
        			 <el-table-column
        			   prop="out_port"
        			   label="out_port"
        			   width="180">
        			 </el-table-column>
        			 <el-table-column
                       prop="type"
                       label="type"
                       width="180">
                     </el-table-column>
        		     <el-table-column
        		       label="操作">
        			   <template slot-scope="scope">
        			        <el-button type="text" size="small"  @click="passFlow(scope.row)">通过</el-button>
        					<el-button type="text" size="small" style="color: red;" @click="delFlow(scope.row)">拒绝</el-button>
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
      				this.$axios.get('/ssm/findFlowCache', {
      					params: {

      					}
      				}).then(response => {

      					this.tableData=response.data.flows;

      				}).catch(error => {
      					console.error(error);
      				});
      			},
      			passFlow(row){
      			this.$axios.get('/ssm/passFlow', {
                      					params: {
                                            flow_id:row.flow_id,
                                            node_id:row.node_id,
                                            table_id:row.table_id,
                                            priority:row.priority,
                                            flow_name:row.flow_name,
                                            source_ip:row.source_ip,
                                            out_port:row.out_port

                      					}
                      				}).then(response => {
                      				console.log(response.data);
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
