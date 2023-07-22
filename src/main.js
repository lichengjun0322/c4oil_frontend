import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Router from 'vue-router'
import axios from 'axios'
import Login from './components/Login.vue'
import Main from './components/Main.vue'
import Home from './components/Home.vue'
import Addflow from './components/Addflow.vue'
import Delflow from './components/Delflow.vue'
import Analysis from './components/Analysis.vue'
import Daipi from './components/Daipi.vue'
import Warning from './components/Warning.vue'
import Tuopo from './components/Tuopo.vue'
import Flow from './components/Flow.vue'
import User from './components/User.vue'
import Tupu from './components/Tupu.vue'
import Main1 from './components/Main1.vue'
import Home1 from './components/Home1.vue'
import Analysis1 from './components/Analysis1.vue'
import Flow1 from './components/Flow1.vue'
import Tuopo1 from './components/Tuopo1.vue'
import Tupu1 from './components/Tupu1.vue'
import Daping from './components/Daping'
import Daping1 from './components/Daping1'
import Regist from './components/Regist'
import Register from './components/Register'
Vue.prototype.$axios=axios
Vue.use(ElementUI)
Vue.use(Router)

const routes=[{
    path:"/login",
    component:Login
},
    {
        path:"/regist",
        component:Regist
    },
    {
        path:"/main",
        component:Main,
        //子路由
        children:[
            {
                path:"/home",
                component:Home,
                meta:{
                    title:"主页"
                }
            },
            {
                path:"/analysis",
                component:Analysis,
                meta:{
                    title:"流量分析"
                }
            },

            {
                path:"/flow",
                component:Flow,
                meta:{
                    title:"流表管理"
                }
            },
            {
                path:"/daping1",
                component:Daping1,
                meta:{
                    title:"数据大屏"
                }
            },
            {
                path:"/addflow",
                component:Addflow,
                meta:{
                    title:"添加流表"
                }
            },
            {
                path:"/delflow",
                component:Delflow,
                meta:{
                    title:"删除流表"
                }
            },
            {
                path:"/user",
                component:User,
                meta:{
                    title:"用户管理"
                }
            },
            {
                path:"/tupu",
                component:Tupu,
                meta:{
                    title:"信息图谱"
                }
            },
            {
                path:"/daipi",
                component:Daipi,
                meta:{
                    title:"待批申请"
                }
            },
            {
                path:"/register",
                component:Register,
                meta:{
                    title:"注册申请"
                }
            },
            {
                path:"/warning",
                component:Warning,
                meta:{
                    title:"预警信息"
                }
            },
            {
                path:"/tuopo",
                component:Tuopo,
                meta:{
                    title:"网络拓朴"
                }
            }
        ]
    },{
        path:"/main1",
        component:Main1,
        //子路由
        children:[
            {
                path:"/home1",
                component:Home1,
                meta:{
                    title:"主页"
                }
            },
            {
                path:"/analysis1",
                component:Analysis1,
                meta:{
                    title:"流量分析"
                }
            },
            {
                path:"/flow1",
                component:Flow1,
                meta:{
                    title:"流表管理"
                }
            },
            {
                path:"/daping",
                component:Daping,
                meta:{
                    title:"数据大屏"
                }
            },

            {
                path:"/tupu1",
                component:Tupu1,
                meta:{
                    title:"信息图谱"
                }
            },

            {
                path:"/tuopo1",
                component:Tuopo1,
                meta:{
                    title:"网络拓朴"
                }
            }
        ]
    },
    {
        path:"/",
        redirect:"/login"
    }
]


const router = new Router({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
