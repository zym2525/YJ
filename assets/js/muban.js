//保存为订单模板
		 				
		 				$('.bcddmb').on('click',function(){
		 					var blur=true;
		 					for (var i=0;i<$('.muli').length;i++) {
		 						if($('.ddmc').val()==$.trim($('.muli').eq(i).text())){
		 							blur=false
		 						}
		 					}
		 					if($('.ddmc').val()!=''){
		 						 if(blur){
		 						 	$.ajax({
											type: "post",
											url: "http://106.14.251.28:8085/bizCenter/order/asTemplate?accessToken=" + localStorage.getItem('accessToken')+'&orderCode='+localStorage.dingbian+'&templateName='+$('.ddmc').val(),
											dataType: 'json',
											contentType: "application/json;charset=utf-8",
											data:JSON.stringify({
												
											}),
											success: function(json) {
													if(json.code=='0000'){
														alert('成功')
														console.log(json)
													}
												
												}
											})
		 						 }else{
		 						 	alert('已经存在此模板名，请填写其他名称')
		 						 }	
		 					}else{
		 						alert('请输入模板名称')
		 					}
		 				})
		 				
		 			//获取订单模板名字
		 			
		 					
		 					
									$.ajax({
											type: "post",
											url: "http://106.14.251.28:8085/bizCenter/order/getTemplates?accessToken=" + localStorage.getItem('accessToken'),
											dataType: 'json',
											contentType: "application/json;charset=utf-8",
											data:JSON.stringify({
												
											}),
											success: function(json) { 
												console.log(json)
													if(json.code=='0000'){
														var a=json.data
														if(a.length>0){
															
															for (var i=0;i<a.length;i++) {
																$('#muul').append('<li class="muli">'+a[i]+'</li>')
															}
																	
														}
														
													}
												
												},
											error:function(data){
												console.log(data)
											}
											})
								
		 					
		 			
		 			 $(document).on('click','.muli',function(){
		 			 	var thistext=$.trim($(this).text())
		 			 	
		 			 	$.ajax({
								type: "post",
								url: "http://106.14.251.28:8085/bizCenter/order/getTemplateOder?accessToken=" + localStorage.getItem('accessToken')+'&templateName='+thistext,
								dataType: 'json',
								contentType: "application/json;charset=utf-8",
								data:JSON.stringify({
												
											}),
								success: function(json) {
									var dingdan=json.data
									console.log(dingdan)
									var desc=$.parseJSON(dingdan.description)
					 				if(desc){
							 				$('.mytablese>tbody').empty();
							 				for(var j=0;j<desc.length;j++){
							 					$('.mytablese>tbody').append('<tr class="huomiao"><td><div class="form-group-sm "><input class="form-control zwpm" name="zwpm" value='+desc[j].zwpm+'></div></td><td><div class="form-group-sm">'
											+'<input class="form-control ywpm" name="ywpm" value='+desc[j].ywpm+'></div></td><td><div class="form-group-sm"><input class="form-control hs_coe" value='+desc[j].hs_coe+' name="hs_coe" />'
										    +'</div></td><td><span class="shanc">删除</span></td></tr>'
												)
							 				}
					 				}
									/*$('.ddbh').text(dingdan.orderCode)//定单号
						 			$('[name="tdbh"]').val(dingdan.bookingNo)//托单号
						 			$('[name="wlfabh"]').val(dingdan.schemeCode)//物流方案编号
						 			$('[name="mb_l"]').val(dingdan.mbl)//MB/L*/
						 			
						 			$('[name="nlfy"]').val(dingdan.orgLocalCharge),//内陆额外费用
									$('[name="mdfy"]').val(dingdan.desLocalCharge),//目的港额外费用
									$('[name="bx"]').val(dingdan.ins),//保险
									$('[name="hltz"]').val(dingdan.adjust),//汇率
							    	$('.mbdyf:checked').val(dingdan.prepaid), //mbl是否预付  0不预付，1预付
									$('.hbdyf:checked').val(dingdan.hblPrepaid), //hbl是否预付  0不预付，1预付
						 			
						 			$('[name="dcdw"]').val()//订舱单位
						 			$('[name="dcdl"]').val()//订舱代理人
						 			//$('[name="lxr"]').val(dingdan.tester)//联系人
						 			var tester=$.parseJSON(dingdan.tester);
						 			
						 			if(tester){
						 				$('[name="dcdw"]').val(tester.customer);
							 			$('[name="dcdl"]').val(tester.bookingAgent);
							 			$('[name="lxr"]').val(tester.tester);
							 			$('[name="lxdh"]').val(tester.testerTEL);
							 			
						 			}
						 			
						 			$('[name="fhr"]').val(dingdan.shipper)
						 			$('[name="lxdh"]').val()//联系电话
						 			$('[name="shr"]').val(dingdan.consignee)//收货人
						 			$('[name="tzr"]').val(dingdan.notify)//通知人
						 			$('[name="zwpm"]').val()//中文品名
						 			$('[name="ywpm"]').val()//英文品名
						 			$('[name="hs_coe"]').val()//HS COE
						 			$('[name="mt"]').val(dingdan.mark)//唛头
						 			$('[name="js"]').val(dingdan.package_)//件数
						 			$('[name="mz"]').val(dingdan.grossWeight)//毛重
						 			$('[name="tg"]').val(dingdan.volume)//体积
						 			$('[name="zhg"]').val(dingdan.polName)//起运港
						 			$('[name="mdg"]').val(dingdan.podName)//目的港
						 			$('[name="mdg"]').attr('data-code',dingdan.podCode)
						 			$('[name="zzg"]').val(dingdan.potName)//中转港
						 			$('[name="zzg"]').attr('data-code',dingdan.potCode)
						 			$('.bcgs').val(dingdan.carryName)//船公司
						 			$('.bcgs').attr('data-code',dingdan.carryCode)
						 			$('[name="cm"]').val(dingdan.vessel)//船名
						 			$('[name="hc"]').val(dingdan.voyage)//航次
						 			$('[name="tdfs"]').val(dingdan.blType)//提单方式
						 			$('[name="yjxyh"]').val(dingdan.ams)//约价协议号
						 			var yfshi=dingdan.transportation
						 			if(+yfshi==0){yfshi='CY-CY'}
						 			if(+yfshi==1){yfshi='CY-DOOR'}
						 			if(+yfshi==2){yfshi='DOOR-DOOR'}
						 			$('[name="ysfs"]').val(yfshi)//运输方式
						 			
						 				var yunfei = dingdan.prepaid; //到预付
										if(+yunfei == 1) {
											document.getElementById('mbval1').checked = true
										}
										if(+yunfei == 0) {
											document.getElementById('mbval0').checked = true
										}
										
										var hbyunfei = dingdan.hblPrepaid; //到预付
										if(+hbyunfei == 1) {
											document.getElementById('hbval1').checked = true
										}
										if(+hbyunfei == 0) {
											document.getElementById('hbval0').checked = true
										}
						 			
						 			
						 			/*var yunfei=dingdan.prepaid;//到预付
						 			if(+yunfei==1){document.getElementById('val1').checked=true}
						 			if(+yunfei==0){document.getElementById('val2').checked=true}
						 			 console.log(+yunfei)*/
						 			 
						 			$('[name="fkdd"]').val(dingdan.paymentPlace)//付款地点
						 			$('[name="kcrq"]').val(dingdan.etd)//开船日期
						 			$('[name="jgrq"]').val(dingdan.customsClearance)//截关日期
								}
											
		 			 	})
		 			 	
		 			 })
		 			