<template>
	<el-card>
		<el-row type="flex" justify="start">
			<strong style="font-size: 25px;">用户操作预警</strong>
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
</template>

<script>
	export default {
	  name:"Warning",
	  data(){
		  return{

		  }
	  },
	  methods: {


	  }
	}
</script>

<style>
</style>
