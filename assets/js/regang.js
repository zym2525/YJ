//点击热门港口
			
			function getHotPorts(token,fn){
					var t=new Date().getTime();
					$.ajax({
						type:'POST',
						async:false,
						url:'http://106.14.251.28:8085/bizCenter/portService/getPorts',
						data:{
							'accessToken':localStorage.accessToken,
							'isHot':1,
							'msgId':t+'',
						},
						success:function(json){
							//console.log(json)
							if(json.retCode==0000){
								//alert('拿到热门港口')
								//console.log(json.ports)
								var hot=eval(json.ports);
								fn&&fn(hot);
							}else{
								//alert('没拿到')
								console.log(json)
							}
						},
						error:function(json){
							console.log(json)
						}
					})
				}
					
				var hotPortsSort={};
				getHotPorts(localStorage.accessToken,function(data){
					for(var i=0;i<data.length;i++){
						if(!hotPortsSort[data[i]['shippingLineCname']]){
							hotPortsSort[data[i]['shippingLineCname']]=[];
						}
						hotPortsSort[data[i]['shippingLineCname']].push(data[i]);
					}
				})

				console.log(hotPortsSort)
				
				var xianarr=[]
				
				for (var foo in hotPortsSort) {
					xianarr.push(foo)
				}
				console.log(xianarr)
			
			/*$('.regang').on('click', function() {
				$('.gangkou').empty()
				
				for(var foo in hotPortsSort){
							$('.gangkou').append(
								'<li>' +
								'<ul class="clearfix">' +
								'<li class="hangxian">' +foo+ '</li>' +
								'<li class="hanggang"><ul></ul></li>' +
								'</ul>' +
								'</li>'
							)	
				}
				for(var j=0;j<$('.hanggang').length;j++){
					var shuzhu=hotPortsSort[$('.hanggang').eq(j).prev().text()]
						
						for(var i=0;i<shuzhu.length;i++){
						 	$('.hanggang').eq(j).children('ul').append('<li class="myreg" data-licode=' + shuzhu[i].portCode +'>'+$.trim(shuzhu[i].portName)+'</li>')
						 }
				
					 
				}
				

			})*/
			
			
			
			
			
			
			$('.regang').on('click', function(e) {
				e.stopPropagation()
				if($('#tabgangli').hasClass('showtab')) {
					$('#tabgangli').removeClass('showtab')
				}else{
					$('#tabgangli').addClass('showtab')
				}
				
				$('.xianul').empty()
				for (var i=0;i<xianarr.length;i++) {
					$('.xianul').append('<li class="hx">'+xianarr[i]+'</li>')
				}
				
				$('li.hx').eq(0).addClass('liactive')
				
				$('.gangdiv').empty()
				var a=hotPortsSort[xianarr[0]]
				for(var j=0;j<a.length;j++){
					$('.gangdiv').append('<li class="myreg" data-licode=' + a[j].portCode +'>'+$.trim(a[j].portName)+'</li>')
				}
			})
			
			
			$(document).on('click','li.hx',function(){
				$('li.hx').removeClass('liactive')
				$(this).addClass('liactive')
				
				
				$('.gangdiv').empty()
				
				var a=hotPortsSort[$(this).text()]
				for(var i=0;i<a.length;i++){
					$('.gangdiv').append('<li class="myreg" data-licode=' + a[i].portCode +'>'+$.trim(a[i].portName)+'</li>')
				}
				
				
				
			})

			
			$(document).on('click','.myreg',function(){
				$('[name="mdg"]').attr('data-code',$(this).attr('data-licode'))
				$('[name="mdg"]').val($(this).text())
				getyun(0, $('[name="yeshu"]').val())
				$('#tabgangli').removeClass('showtab')
			})
			
			
			document.onclick=function(e){
				if(e.target.id!='tabgangli'&&e.target.className!='hx liactive'){
					$('#tabgangli').removeClass('showtab')
				}
				
			}
			

			