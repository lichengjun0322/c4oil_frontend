<template>

<div>

	<el-container>

    	  <el-container>
    	    <el-header>
    			<el-menu
    			  style="margin-left: -27px;"
    			  default-active="1"
    			  class="el-menu-demo"
    			  mode="horizontal"
    			  @select="changeMeu"
    			  background-color="#545c64"
    			  text-color="#fff"
    			  active-text-color="#ffd04b">
    			  <el-menu-item index="1">系统首页</el-menu-item>
    			  <el-menu-item index="2">流量分析</el-menu-item>
    			  <el-menu-item index="7">流表管理</el-menu-item>
    			  <el-menu-item index="6">网络拓朴</el-menu-item>
    			  <el-menu-item index="9">信息图谱</el-menu-item>
    			  <el-button type="text" @click="back" style="margin-top: 10px;margin-left: 1000px"><span style="color: white;font-size=15px">退出登录</span></el-button>
    			</el-menu>
    		</el-header>
    	    <el-main>
    			<router-view></router-view>
    		</el-main>
    	  </el-container>
    	</el-container>

</div>



</template>

<script>
	export default {
	  name:"Main",
	  data(){
		  return{
			  uname:"",
			  pwd:""
		  }
	  },

	  methods: {
		  changeMeu:function(index){
			  if(index=="1"){
				  this.$router.push("Home1");
			  }else if(index=="2"){
				  this.$router.push("Analysis1");
			  }else if(index=="6"){
				  this.$router.push("Tuopo1");
			  }else if(index=="7"){
				  this.$router.push("Flow1");
			  }else if(index=="9"){
				  this.$router.push("Tupu1");
			  }else if(index=="11"){
                  this.$router.push("Daping");
              }
		  },
		  back(){
          		    this.$router.push("Login");
          		  }

	  }
	}
</script>

<style>

</style>