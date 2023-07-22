<template>
	<div class="login">
	<el-row style="margin-top: 150px;margin-left: 250px;" >

		<el-card shadow="never" class="card" style="width: 500px;margin-top: 200px;margin-left: 550px;background-color: #003c7c;">
			<el-row>
                <strong style="font-size: 25px;color: white">
                    基于SDN架构的用户行为管控和网络异常检测系统
                </strong>
            </el-row>
			<div>
				<el-form label-width="80px" style="margin-top: 20px;margin-left: -35px">
					<el-row>
						<el-col :span="16" :offset="2">
							<el-form-item>
							    <span slot="label">
                                    <span style="font-size: 18px;color: white">用户名</span>
                                </span>
								<el-input v-model="uname" style="width: 300px;"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="16" :offset="2">
							<el-form-item>
							<span slot="label">
                                <span style="font-size: 18px;color: white">密码</span>
                            </span>
								<el-input style="width: 300px;" v-model="pwd" type="password"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-radio-group v-model="radio">
						    <el-radio :label="1">
						        <span style="font-size: 18px;color: white">普通用户</span>
						    </el-radio>
						    <el-radio :label="2">
						        <span style="font-size: 18px;color: white">管理员</span>
						    </el-radio>
						</el-radio-group>
					</el-row>
					<el-row style="margin-top: 20px;">
						<el-col :span="16" :offset="2">
							<el-form-item>
								<el-button type="primary" @click="login">登录</el-button>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row type="flex" justify="end" style="margin-top: -25px;">
                        <el-form-item>
                            <el-button type="text" @click="regist">没有账号？点击注册</el-button>
                        </el-form-item>
                    </el-row>
				</el-form>
			</div>
		</el-card>
    </el-row>

	</div>


</template>

<script>
	export default {
	  name:"Login",
	  data(){
		  return{
			  uname:"",
			  pwd:"",
			  radio:1
		  }
	  },
	  methods: {
		  login:function(){

            this.$axios.get('/ssm/login1',{
                params:{
                    name:this.uname,
                    password:this.pwd
                }
            }).then(response => {
                if(response.data.data==null){
                    alert('用户名或密码错误')
                }else if(response.data.code==1){
                    alert('当前时段不可访问！')
                }
                else{
                if(this.radio==2){
                    this.$router.push({path:'/main'});
                    this.$router.push({path:'/home'});
                }else{
                    this.$router.push({path:'/main1'});
                    this.$router.push({path:'/home1'});
                }

                }
            }).catch(error => {
                console.error(error);
            });

		  },
		  regist:function(){
          			  this.$router.push({path:'/regist'});
          			  }

	  }
	}
</script>

<style scoped>
/* 背景图片*/
  .login{
    background:url("../assets/login.jpeg");
    width: 100%;
    height: 100%;
    position:fixed;
    margin-top: -8px;/*上边距*/
    margin-left: -8px;/*左边距*/
    background-size:100% 100%;
    }
    .card {
    		opacity: 0.9;
    		border: 0px
    }
</style>