//港口模糊查询

var timer = null;

			var suoyin = -1;

			function mohucha (a){
				a.on('input', function() {
				var myname = $(this).val()
				 suoyin = -1;
				clearTimeout(timer)
				timer = setTimeout(function() {
					if(myname != '') {
						var t = new Date().getTime();
						$.ajax({
								type: "post",
								url: "http://106.14.251.28:8085/bizCenter/portService/fuzzySearchByName",
								data: {
										'accessToken': localStorage.accessToken,
										'msgId': t + '',
										'nameHeader': myname
										},
								async: true,
								dataType: 'json',
								success: function(data) {
									$('.ulgang').empty()
									if(data.retCode == '0000') {
										
										var shu = eval('(' + data.ports + ')')
										//console.log(shu)
										 if(shu.length>10){
										 	shu.length=10
										 }
										 if(shu.length>0){
										 	for(var i=0;i<shu.length;i++){
										 	$(document.activeElement).next().append('<li class="ligang" data-code='+shu[i].portCode+'><span class="gename">'+shu[i].portName+'</span> <span class="gcname">'+$.trim(shu[i].portCname)+'</span></li>')
										 	}
										 	
										 }
											}
									}
								})
						}
					},300)

			})
			
			}
			
			
			
			

			
			
			
			function mohuchuan (a){
				a.on('input', function() {
				var myname = $(this).val()
				 suoyin = -1;
				clearTimeout(timer)
				timer = setTimeout(function() {
					if(myname != '') {
						var t = new Date().getTime();
						$.ajax({
								type: "post",
								url: "http://106.14.251.28:8085/bizCenter/carryService/fuzzySearch",
								data: {
										'accessToken': localStorage.accessToken,
										'msgId': t + '',
										"codeHeader": myname
										},
								async: true,
								dataType: 'json',
								success: function(data) {
									console.log(data)
									$('.ulgang').empty()
									if(data.retCode == '0000') {
										
										var shu = eval('(' + data.carrys + ')')
										//console.log(shu)
										 if(shu.length>10){
										 	shu.length=10
										 }
										 if(shu.length>0){
										 	for(var i=0;i<shu.length;i++){
										 	$(document.activeElement).next().append('<li class="ligang" data-code='+shu[i].carryCode+'><span class="gename">'+shu[i].carryCode+'</span> <span class="gcname">'+$.trim(shu[i].carryCname)+'</span></li>')
										 	}
										 	
										 }
											}
									}
								})
						}
					},300)

			})
			
			}
			
			
			
			
			
			$(document).on('click','.ligang',function(){
					$(this).parents('.dropdown-menu').prev().val($(this).children('.gename').text())
					$(this).parents('.dropdown-menu').prev().attr('data-code',$(this).data('code'))
			})
			
			
			//向上向下
			
			
			$(document).on('keydown', function(e) {
					//console.log(suoyin)
				if(e.which == 40) {
					suoyin++
					if(suoyin == $(document.activeElement).next().children().length) {
						suoyin = 0
					}
					//console.log(suoyin)
					//console.log(suoyin)
					$(document.activeElement).next().children().removeClass('gactive')
					$(document.activeElement).next().children().eq(suoyin).addClass('gactive');
		
				}
				if(e.which == 38) {
		
					suoyin--;
					if(suoyin < 0) {
						suoyin = $(document.activeElement).next().children().next().length
					};
					//console.log(suoyin)
					$(document.activeElement).next().children().removeClass('gactive')
					$(document.activeElement).next().children().eq(suoyin).addClass('gactive');
		
				}
				for(var i = 0; i < $(document.activeElement).next().children().length; i++) {
					if($(document.activeElement).next().children().eq(i).hasClass('gactive')) {
						$(document.activeElement).parent().prev().val($(document.activeElement).next().children().eq(i).children('.gename').text())
						$(document.activeElement).parent().prev().attr('data-code',$(document.activeElement).next().children().eq(i).data('code'))
					}
				}
		
			})
			
			$(document).on('keydown', function(e) {
			if(e.which == 13) {
				$('.btn-group').removeClass('open');
		
			}
		})
			


//客户公司模糊查询

function mohukehu(a) {

	a.on('input', function() {
		suoyin = -1
		clearTimeout(timer)
		timer = setTimeout(function() {

			var thisval = a.val();

			if(thisval != '') {

				var v = new Date().getTime();
				$.ajax({
					type: "post",
					url: "http://106.14.251.28:8081/userCenter/companyService/fzCustomCompany",
					data: {
						'accessToken': localStorage.getItem('accessToken'),
						'msgId': v + '',
						"companyCode": thisval
					},
					async: true,
					dataType: 'json',
					success: function(data) {
						console.log(data)
						if(data.retCode == '0000') {

							a.next().addClass('ulshow')
							a.next().empty();
							//var as = $.parseJSON(data.ports)
							var shu = data.companys
							var changdu = 10;
							if(shu.length < 10) {
								changdu = shu.length
							} else {
								changdu = 10
							}

							for(var i = 0; i < changdu; i++) {
								$(document.activeElement).next().append('<li class="ligang" data-code='+shu[i].companyCode+'><span class="gename">'+shu[i].companyName+'</span> <span class="gcname">'+$.trim(shu[i].companyName)+'</span></li>')

							}

						}
					}
				})
			} else {
				a.next().removeClass('ulshow');
			}

		}, 400)
	})
}




//航线
function mouhuhang(a){
	a.on('input', function() {
		suoyin = -1
		clearTimeout(timer)
		timer = setTimeout(function() {

			var thisval = a.val();

			if(thisval != '') {

				var v = new Date().getTime();
				$.ajax({
					type: "post",
					url: "http://106.14.251.28:8085/bizCenter/shippingLineService/fuzzySearch",
					data: {
						'accessToken': localStorage.getItem('accessToken'),
						'msgId': v + '',
						"lineName": thisval
					},
					async: true,
					dataType: 'json',
					success: function(data) {
						console.log(data)
						if(data.retCode == '0000') {

							a.next().addClass('ulshow')
							a.next().empty();
							//var as = $.parseJSON(data.ports)
							var shu = $.parseJSON(data.lines)
							var changdu = 10;
							if(shu.length < 10) {
								changdu = shu.length
							} else {
								changdu = 10
							}

							for(var i = 0; i < changdu; i++) {
								$(document.activeElement).next().append('<li class="ligang" data-code='+shu[i].shippingLineCode+'><span class="gename">'+shu[i].shippingLineCname+'</span> <span class="gcname">'+$.trim(shu[i].shippingLineName)+'</span></li>')

							}

						}
					}
				})
			} else {
				a.next().removeClass('ulshow');
			}

		}, 400)
	})
}
