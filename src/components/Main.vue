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
              <!--<el-menu-item index="5-1">待批申请</el-menu-item>-->
              <el-submenu index="5">
              			      <template slot="title">待批申请</template>
              			      <el-menu-item index="5-1">流表下发申请</el-menu-item>
              			      <el-menu-item index="5-2">用户注册申请</el-menu-item>
              </el-submenu>
              <!--el-menu-item index="5-2">预警信息</el-menu-item>-->
              <el-menu-item index="8">用户管理</el-menu-item>
              <el-menu-item index="10">数据大屏</el-menu-item>


               <el-button type="text" @click="back" style="margin-top: 10px;margin-left: 800px"><span style="color: white;font-size=15px">退出登录</span></el-button>


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
				  this.$router.push("Home");
			  }else if(index=="2"){
				  this.$router.push("Analysis");
			  }else if(index=="3"){
				  this.$router.push("Addflow");
			  }else if(index=="4"){
				  this.$router.push("Delflow");
			  }else if(index=="5-1"){
				  this.$router.push("Daipi");
			  }else if(index=="5-2"){
				  this.$router.push("register");
			  }else if(index=="6"){
				  this.$router.push("Tuopo");
			  }else if(index=="7"){
				  this.$router.push("Flow");
			  }else if(index=="8"){
				  this.$router.push("User");
			  }else if(index=="9"){
				  this.$router.push("Tupu");
			  }else if(index=="11"){
                  this.$router.push("Daping1");
              }else if(index=="10"){
                  this.goPage('https://bip3.seentao.com/iuap-data-common/shorturlCtr/v/IRNaz')
              }
		  },
		  back(){
		    this.$router.push("Login");
		  },
		  goPage(url){
		      window.location.href=url
		  }

	  }
	}
</script>

<style>

</style>