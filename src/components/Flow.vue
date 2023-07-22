<template>
	<div>
    	<el-card>
    		<el-row type="flex" justify="start">
    			<strong style="font-size: 25px;">流表管理</strong>
    		</el-row>
    		<el-row type="flex" justify="end">
    					<el-button size="small" type="primary" @click="dialogFormVisible1 = true" style="margin-right: 10px;">下发流表</el-button>
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
                   prop="action"
                   label="action"
                   width="180">
                 </el-table-column>
    		     <el-table-column
    		       label="操作">
    			   <template slot-scope="scope">
    					<el-button type="text" size="small" style="color: red;" @click="delFlow(scope.row)">删除</el-button>
    			   	</template>
    		     </el-table-column>

    		   </el-table>
    		   <el-pagination
    		   			  style="margin-top: 20px;"
    		   		      @size-change="handleSizeChange"
    		   		      @current-change="handleCurrentChange"
    		   		      :current-page="currentPage"
    		   		      :page-sizes="[5, 10, 15, 20]"
    		   		      :page-size="5"
    		   		      layout="total, sizes, prev, pager, next, jumper"
    		   		      :total="totalCount">
    		   		</el-pagination>
    	</el-card>

    	<el-dialog title="" :visible.sync="dialogFormVisible1" append-to-body>
            					             <el-form  style="margin-top: 20px;" class="el-form-label-top" label-position="top" label-width="80px" :model="flow">
            					               <el-form-item label="Node ID" style="margin-top: -10px;">
            					                 <el-input v-model="flow.nid" placeholder="example:openflow:1" style="margin-top: -40px;"></el-input>
            					               </el-form-item>
            					               <el-form-item label="Table ID" style="margin-top: -10px;">
            					                 <el-input v-model="flow.tid"  placeholder="example:200" style="margin-top: -40px;"></el-input>
            					               </el-form-item>
            					               <el-form-item label="Flow ID"  style="margin-top: -10px;">
            					                 <el-input v-model="flow.fid"  placeholder="example:401"  style="margin-top: -40px;"></el-input>
            					               </el-form-item>
            					               <el-form-item label="Priority" style="margin-top: -10px;">
            					                 <el-input v-model="flow.priority"  placeholder="example:300" style="margin-top: -40px;"></el-input>
            					               </el-form-item>
            					               <el-form-item label="Flow Name" style="margin-top: -10px;">
            					                 <el-input v-model="flow.name"  placeholder="example:flow41" style="margin-top: -40px;"></el-input>
            					               </el-form-item>
            					               <el-form-item label="Source IP" style="margin-top: -10px;">
            					                 <el-input v-model="flow.sip"  placeholder="example:10.0.0.41" style="margin-top: -40px;"></el-input>
            					               </el-form-item>
            					               <el-form-item label="Output Port" style="margin-top: -10px;">
            					                 <el-input v-model="flow.port"  placeholder="example:1" style="margin-top: -40px;"></el-input>
            					               </el-form-item>
            					             </el-form>
            					             <div slot="footer" class="dialog-footer">
            					               <el-button @click="dialogFormVisible1 = false">取 消</el-button>
            					               <el-button type="primary" @click="addFlow">确 定</el-button>
            					             </div>
            			</el-dialog>
    	</div>
</template>

<script>
	export default {
	  name:"Flow",
	  data(){
		  return{
			  tableData:[],
              			  currentPage:1,
              			  totalCount:0,
              			  pageSize:5,
              			  dialogFormVisible1:false,
              			  flow: {
              			  				nid: '',
              			  				tid: '',
              			  				fid: '',
              			  				priority:"",
              			  				name:"",
              			  				sip:"",
              			  				port:"",
              			  				action:""
              			  },
		  }
	  },
	  created() {
	  		this.getTableData();
	  		},
	  methods: {
		  getTableData(){
				this.$axios.get('/ssm/findAllFlow', {
					params: {
						curPage:this.currentPage,
						pageSize:this.pageSize,
					}
				}).then(response => {
					this.totalCount=response.data.totalCount;
					this.tableData=response.data.data;

				}).catch(error => {
					console.error(error);
				});
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
				this.pageSize=val;
				this.getTableData();
				  },
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.currentPage=val;
				this.getTableData();
				  },
		    delFlow:function(raw){

            				this.$axios.get('/ssm/delFlow',{
            					params:{
            						flow_id:raw.flow_id,
            						node_id:raw.node_id,
            						table_id:raw.table_id,
            					}
            				}).then(response => {
            					if(response.data.code>0){
            						alert("成功");
            						this.getTableData();
            					}else{
            						alert("失败");
            					}

            				}).catch(error => {
            					console.error(error);
            				});

            	  		  },
            addFlow:function(){

            				this.$axios.get('/ssm/addFlow',{
            					params:{
            						flow_id:this.flow.fid,
            						node_id:this.flow.nid,
            						table_id:this.flow.tid,
            						priority:this.flow.priority,
            						flow_name:this.flow.name,
            						source_ip:this.flow.sip,
            						out_port:this.flow.port
            					}
            				}).then(response => {
            					if(response.data.code==1){
            					console.log(response.data)
            						this.$message({
                                    						  type: 'success',
                                    						  message: '下发成功!'
                                    						});
            						this.dialogFormVisible1 = false;
            						//this.getTableData();
            						//this.flow.nid= '';
                                    //this.flow.tid='',
                                    //this.flow.fid='',
                                    //this.flow.priority="",
                                    //this.flow.name="",
                                   // this.flow.sip="",
                                    //this.flow.port=""
            					}else{
            					console.log(response.data)

            					if(response.data.code==3){
            					this.$confirm(response.data.message3, '错误', {
                                              confirmButtonText: '确定',
                                              cancelButtonText: '取消',
                                              type: 'error'
                                            })
                                this.dialogFormVisible1 = false;

            					}else{
            					this.$confirm(response.data.message3, '错误', {
                                                                              confirmButtonText: '确定',
                                                                              cancelButtonText: '取消',
                                                                              type: 'error'
                                                                            })
                                 this.dialogFormVisible1 = false;
            					}


            					}

            				}).catch(error => {
            					console.error(error);
            				});

            	  		  }

	  }
	}
</script>

<style>
</style>
