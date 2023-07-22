<template>
<div>


		<el-card style="margin-top: 20px;">
			<el-row type="flex" justify="start">
				<strong style="font-size: 25px;">信息图谱</strong>
			</el-row>
			<div id="main1" style="width: 100%;height: 750px;"></div>
		</el-card>

</div>

</template>

<script>
    import * as echarts from 'echarts'
	export default {
	  name:"Tupu",
	  data(){
		  return{

		  SNodeList:[],
		  SFRelList:[],
		  SSRelList:[],
		  FNodeList:[]


		  }
	  },
	  mounted(){
	        this.connect();
      	  	this.initCharts();
      	  },
	  methods: {

	          connect(){
	          this.$axios.get('/ssm/getGraph',{
              					params:{

              					}
              				}).then(response => {
              					this.SNodeList=response.data.flows.SNodeList
              					this.SFRelList=response.data.flows.SFRelList
              					this.SSRelList=response.data.flows.SSRelList
              					this.FNodeList=response.data.flows.FNodeList
              					this.initCharts();


              				}).catch(error => {
              					console.error(error);
              				});
	          },
      		  initCharts(){
      		  	let chartDom1 = document.getElementById("main1")
      		  	let myChart1 = echarts.init(chartDom1);


      		  	/*自定义*/

                var Switch = new Array(this.SNodeList.length);
                var Flow = new Array(this.FNodeList.length);
                var SSRel = new Array(this.SSRelList.length);
                var SFRel = new Array(this.SFRelList.length);
                for(var i = 0;i < this.SFRelList.length;i++)
                {
                    SFRel[i] = new Array(2);
                }
                for(var i = 0;i < this.SSRelList.length;i++)
                {
                    SSRel[i] = new Array(2);
                }
                for(var i = 0;i < this.FNodeList.length;i++)
                {
                    Flow[i] = new Array(2);
                }
                for(var i = 0;i < this.SNodeList.length;i++)
                {
                    Switch[i] = this.SNodeList[i][0].substr(11,10);
                }
                for(var i = 0;i < this.FNodeList.length;i++)
                {
                    //Switch[i] = flows["SNodeList"][0][0].substr(11,10);
                    Flow[i][0] = this.FNodeList[i]["n.flow_id"];
                    Flow[i][1] = this.FNodeList[i]["n.node_id"];
                }
                for(var i = 0;i < this.SSRelList.length;i++)
                {
                    //Switch[i] = flows["SNodeList"][0][0].substr(11,10);
                    SSRel[i][0] = this.SSRelList[i]["n.node_id"];
                    SSRel[i][1] = this.SSRelList[i]["m.node_id"];
                }
                for(var i = 0;i < this.SFRelList.length;i++)
                {
                    SFRel[i][0] = this.SFRelList[i]["n.flow_id"];
                    SFRel[i][1] = this.SFRelList[i]["m.node_id"];
                }

                var SSLinks = new Array(Switch.length+Flow.length);
                for(var i = 0;i < Switch.length+Flow.length;i++){
                    SSLinks[i] = new Array(2);
                }

                for(var i = 0;i < SSRel.length-1;i++)
                {
                    for(var k = i+1;k < SSRel.length;k++ )
                    {
                        if((SSRel[i][0] == SSRel[k][0] && SSRel[i][1] == SSRel[k][1]) || (SSRel[i][0] == SSRel[k][1] && SSRel[i][1] == SSRel[k][0]))
                        {
                            SSRel[k][0] = null;
                            SSRel[k][1] = null;
                            break;
                        }
                    }

                }

                var data1 = new Array(Switch.length+Flow.length);
                for(var i = 0;i < (Switch.length+Flow.length);i++){
                    if(i < Switch.length)
                    {
                        data1[i] = {
                            name: Switch[i],
                            symbolSize: 70,         // 关系图节点标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                            category: 0,         // 数据项所在类目的 index。
                        };
                    }
                    else
                    {
                        data1[i] = {
                            name: Flow[i-Switch.length][0],
                            symbolSize: 50,         // 关系图节点标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                            category: 1,         // 数据项所在类目的 index。
                        };
                    }
                }

                var links1 = new Array();
                var counter = 0;
                for(var i = 0;i < SSRel.length + SFRel.length;i++)
                {
                    if(i < SSRel.length){
                        if(SSRel[i][0] != null){
                            links1[counter] = {                   // 节点间的关系数据
                                source: SSRel[i][0],
                                target: SSRel[i][1],
                                name: "connect",              // 关系对象连接线上的标签内容
                            };
                            counter = counter + 1;
                        }
                    }
                    else {
                        links1[counter] = {                   // 节点间的关系数据
                            source: SFRel[i-SSRel.length][0],
                            target: SFRel[i-SSRel.length][1],
                            name: "belong",              // 关系对象连接线上的标签内容
                        };
                        counter = counter + 1;
                    }
                }
                /*×××××××××××××××*/

                var categories = [{name:'交换机'},{name:'流表'}];
                /*for (var i = 0; i < 2; i++) {
                    categories[i] = {
                        name: '类目' + i
                    };
                }*/


      		  	let option1 = {

                    // 图的标题
                    title: {
                        text: ''
                    },
                    // 提示框的配置
                    tooltip: {
                        formatter: function (x) {
                            return x.data.des;
                        }
                    },
                    // 工具箱
                    toolbox: {
                        // 显示工具箱
                        show: true,
                        feature: {
                            mark: {
                                show: true
                            },
                            // 还原
                            restore: {
                                show: true
                            },
                            // 保存为图片
                            saveAsImage: {
                                show: true
                            }
                        }
                    },
                    legend: [{
                        // selectedMode: 'single',
                        data: categories.map(function (a) {
                            return a.name;
                        })
                    }],
                    series: [{
                        type: 'graph', // 类型:关系图
                        layout: 'force', //图的布局，类型为力导图
                        symbolSize: 40, // 调整节点的大小
                        roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移,可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                        edgeSymbol: ['circle', 'arrow'],
                        edgeSymbolSize: [2, 10],
                        edgeLabel: {


                                    fontSize: 20


                        },
                        force: {
                            repulsion: 2500,
                            edgeLength: [10, 50]
                        },
                        draggable: true,
                        lineStyle: {

                                width: 2,
                                color: '#4b565b',

                        },
                        edgeLabel: {

                                show: true,
                                formatter: function (x) {
                                    return x.data.name;
                                }

                        },
                        label: {

                                show: true,


                        },

                        data:data1,
                        links:links1,
                        categories: categories,
                    }]
      			};
      			myChart1.setOption(option1);
      			window.addEventListener("resize",()=>{
      				myChart1.resize()
      			})



      		  }

      	  }
	}
</script>

<style>
</style>
