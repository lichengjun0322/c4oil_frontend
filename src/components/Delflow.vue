<template>
	<el-card>
		<el-row type="flex" justify="start">
			<strong style="font-size: 25px;">删除流表</strong>
		</el-row>


		<el-form  style="margin-top: 20px;" class="el-form-label-top" label-position="top" label-width="80px" :model="flow">
		  <el-form-item label="Table ID" style="margin-top: -10px;">
		    <el-input v-model="flow.tid"  placeholder="example:0" style="margin-top: -40px;"></el-input>
		  </el-form-item>
		  <el-form-item label="Node ID" style="margin-top: -10px;">
		    <el-input v-model="flow.nid" placeholder="example:openflow:1" style="margin-top: -40px;"></el-input>
		  </el-form-item>
		  <el-form-item label="Flow ID"  style="margin-top: -10px;">
		    <el-input v-model="flow.fid"  placeholder="example:200"  style="margin-top: -40px;"></el-input>
		  </el-form-item>

		</el-form>
		<el-row type="flex" justify="start">
			<el-button type="primary" @click="delFlow">确认删除</el-button>
		</el-row>

	</el-card>
</template>

<script>
	export default {
	  name:"Addflow",
	  data(){
		  return{
			  flow: {
				nid: '',
				tid: '',
				fid: ''
			  },

		  }

	  },
	  methods: {
	  		  delFlow:function(){

				this.$axios.get('/ssm/delFlow',{
					params:{
						flow_id:this.flow.fid,
						node_id:this.flow.nid,
						table_id:this.flow.tid,
					}
				}).then(response => {
					if(response.data.code>0){
						alert("成功");
					}else{
						alert("失败");
					}

				}).catch(error => {
					console.error(error);
				});

	  		  }

	  }




	}
</script>

<style>
	.el-form-label-top{
		text-align: left !important;
	}
</style>