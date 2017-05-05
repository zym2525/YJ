
		
		
		//目的港
		var mudigang={}
		
		//船公司
		
		var chuangongsi={}
		
		//客户
		
		var kehu={}
		
		
		
		
		
		var dsj=[]
		
		function tongji(dui,zhuti){
			
						var arr={};
						//var shu
						for(var i=0;i<dsj.length;i++){
							//shu.push(json.enquirys[i].podName)
							var a=dsj[i][dui]
							if(arr[a]){
								arr[a]=arr[a]+1
							}else{
								arr[a]=1
							}
							
						}
						//console.log(arr)
						
						var lable=[]
						var zhi=[]
						for (var k in arr) {
							
							var obj={}
							obj['value']=arr[k]
							obj['name']=k;
							
							zhi.push(obj)
						}
						zhi.sort(function (a,b){
							return b['value']-a['value'];
						})
						
						zhi.splice(19,zhi.length-20)
						
						
						
						//console.log(zhi)
						zhuti['zhi']=zhi

						for (var m=0;m<zhi.length;m++) {
							lable.push(zhi[m].name)
						}
							
						//console.log(lable)	
						
						zhuti['lable']=lable
						
						//console.log(zhuti)
		}
		
		//询价次数
		var  xunci={}
		
		//订舱票数
		var dcps={}
		
	function tj2(dui,zhuti){
		var obj1={}
		var obj2={}
		for (var i=0;i<kehu.lable.length;i++) {
			for(var j=0;j<dsj.length;j++){
				if(kehu.lable[i]==dsj[j].customCompanyName){
					
					obj1[kehu.lable[i]]=dsj[j].enquiryNum
					obj2[kehu.lable[i]]=dsj[j].bookingNum
				}
			}
			
		}
		
	//询价次数	console.log(obj1)
						var lable=[]
						var zhi=[]
						for (var k in obj1) {
							
							var ob={}
							ob['value']=obj1[k]
							ob['name']=k;
							
							zhi.push(ob)
						}
						zhi.sort(function (a,b){
							return b['value']-a['value'];
						})
						
						zhi.splice(19,zhi.length-20)
						
						
						
						//console.log(zhi)
						xunci['zhi']=zhi

						for (var m=0;m<zhi.length;m++) {
							lable.push(zhi[m].name)
						}
							
						//console.log(lable)	
						
						xunci['lable']=lable
						
						//console.log(xunci)
		
		//订舱票数
		//console.log(obj2)
					var labled=[]
						var zhid=[]
						for (var n in obj2) {
							
							var ob2={}
							ob2['value']=obj2[n]
							ob2['name']=n;
							
							zhid.push(ob2)
						}
						zhid.sort(function (a,b){
							return b['value']-a['value'];
						})
						
						zhid.splice(19,zhid.length-20)
						
						
						
						//console.log(zhi)
						 dcps['zhi']=zhid

						for (var y=0;y<zhid.length;y++) {
							labled.push(zhid[y].name)
						}
							
						//console.log(lable)	
						
						dcps['lable']=labled
						
					//	console.log( dcps)
	}
		
		
		
		
		//获取询盘列表
			function getpan() {
				
				var g = new Date().getTime();
				$.ajax({
					type: "post",
					url: "http://106.14.251.28:8085/bizCenter/enquiryService/getEnquirys",
					data: {
						'accessToken': localStorage.accessToken,
						'msgId': g + '',
						"isBackward": 1,
						"enquiryStatus": 2,
						"polCode": '',
						"podCode": '',
						"schemeStatus": '',
						"enquiryTimeStart": '',
						"enquiryTimeEnd": '',
						'enquirybizStatus':'',//询价状态
						"currentPage": '', //当前页数
						"pageSize": '' //页长
					},
					async: true,
					dataType: 'json',
					success: function(json) {
						
						dsj=json.enquirys
						
						tongji('podName',mudigang)
						tongji('carryName',chuangongsi)
						tongji('customCompanyName',kehu)
						tj2('enquiryNum',xunci)
					}
				})
			}
		getpan()
		
		
		
		
		
		//画图
		
		
		
		 function bing(obj){
		 	var option1 = {
			    title : {
			        text: '',
			        subtext: '',
			        x:'center'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        left: 'left',
			        data: obj.lable,
			       
			    },
			    series : [
			        {
			            name: '',
			            type: 'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:obj.zhi,
			           
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            }
			        }
			    ]
			};
			
			myChart1.setOption(option1);
		   
			
		 }
		   	
			
			
			//app.title = '坐标轴刻度与标签对齐';
			
			function zhtu(obj){
				
				var xar=[]
				
				for (var i=0;i<obj['zhi'].length;i++) {
					xar.push(obj['zhi'][i]['value'])
				}
				
			//	console.log(xar)
			//	console.log(obj.lable)
					var option2 = {
				    color: ['#3398DB'],
				    tooltip : {
				        trigger: 'axis',
				        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        }
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis : [
				        {
				            type : 'category',
				            data : obj.lable,
				            axisTick: {
				                alignWithLabel: true
				            }
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value'
				        }
				    ],
				    series : [
				        {
				            name:'',
				            type:'bar',
				            barWidth: '60%',
				            data:xar
				        }
				    ]
				};
				myChart2.setOption(option2);
			}

			
		
		
		var myChart1=null
		var myChart2=null
		
		
		$('#cktjt').on('click',function(){
			$('#tact').empty()
			
			var checktjkj = $('.tjkj:checked').length
			var checkxztx = $('.xztx:checked').length
			if(checktjkj>0){
				if(checkxztx>0){
					switch($('.tjkj:checked').val()){
						case 'mdg':if($('.xztx:checked').val()=='sxt'){
										$('#tact').append('<div id="dom1"></div>')
										 myChart1 = echarts.init(document.getElementById('dom1'));
										 bing(mudigang)
									}else{
										$('#tact').append('<div id="dom2"></div>')
										 myChart2 = echarts.init(document.getElementById('dom2'));
										 zhtu(mudigang)
									};break;
						case 'xjcs':if($('.xztx:checked').val()=='sxt'){
										$('#tact').append('<div id="dom1"></div>')
										 myChart1 = echarts.init(document.getElementById('dom1'));
										 bing(xunci)
									}else{
										$('#tact').append('<div id="dom2"></div>')
										 myChart2 = echarts.init(document.getElementById('dom2'));
										 zhtu(xunci)
									};break;
						case 'kh':if($('.xztx:checked').val()=='sxt'){
										$('#tact').append('<div id="dom1"></div>')
										 myChart1 = echarts.init(document.getElementById('dom1'));
										 bing(kehu)
									}else{
										$('#tact').append('<div id="dom2"></div>')
										 myChart2 = echarts.init(document.getElementById('dom2'));
										 zhtu(kehu)
									};break;
						case 'cgs':if($('.xztx:checked').val()=='sxt'){
										$('#tact').append('<div id="dom1"></div>')
										 myChart1 = echarts.init(document.getElementById('dom1'));
										 bing(chuangongsi)
									}else{
										$('#tact').append('<div id="dom2"></div>')
										 myChart2 = echarts.init(document.getElementById('dom2'));
										 zhtu(chuangongsi)
									};break;
						case 'dcps':if($('.xztx:checked').val()=='sxt'){
										$('#tact').append('<div id="dom1"></div>')
										 myChart1 = echarts.init(document.getElementById('dom1'));
										 bing(dcps)
									}else{
										$('#tact').append('<div id="dom2"></div>')
										 myChart2 = echarts.init(document.getElementById('dom2'));
										 zhtu(dcps)
									};break;
					}
					$('#tongjitu').modal('show')
				}else{
					//alert('请选择图形')
					$('.jgh').text('请选择图形 !')
					$('#myModaljg').modal('show')
					
				}
			}else{
				//alert('请选择统计口径')
				$('.jgh').text('请选择统计口径 !')
				$('#myModaljg').modal('show')
			}
			 
		 
		})
		
	
		
		