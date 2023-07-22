<template>
	<div class="login">
	<el-row style="margin-top: 150px;margin-left: 250px;" >

		<el-card shadow="never" class="card" style="width: 500px;height: 350px;margin-top: 200px;margin-left: 550px;background-color: #003c7c;">
			<el-row>
                <strong style="font-size: 25px;color: white">
                    用户注册
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

					<el-row style="margin-top: 20px;">
						<el-col :span="16" :offset="2">
							<el-form-item>
								<el-button type="primary" @click="regist">注册</el-button>
								<el-button type="primary" @click="back">返回</el-button>
							</el-form-item>
						</el-col>
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
		  }
	  },
	  methods: {

		  regist:function(){

			  this.$axios.get('/ssm/regist1',{
                              params:{
                                  name:this.uname,
                                  password:this.pwd
                              }
                          }).then(response => {
                              if(response.data.code==1){
                                  alert('用户名重复，请重新输入')
                              }else if(response.data.code==0){
                                  alert('已提交管理员审核')
                              }

                          }).catch(error => {
                              console.error(error);
                          });


			  },
			  back:function(){

              			  this.$router.push({path:'/login'});


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