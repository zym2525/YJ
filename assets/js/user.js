		var usetime = new Date().getTime();
			$.ajax({
				type: "post",
				url: "http://106.14.251.28:8081/userCenter/userService/getUserInfo",
				data: {
					'accessToken': localStorage.accessToken,
					'msgId': usetime + '',
					
				},
				async: true,
				dataType: 'json',
				success: function(json) {
					console.log(json)
					if(json.retCode=='0000'){
						$('.usname').text(json.alias)
						$('.uscompany').text(json.companyName)
						$('.usemail').text(json.email)
						$('.usmob').text(json.mobileNo)
					}
				}
				
			})
			

$('#qxiuma').on('click',function(){
	var st= new Date().getTime()
	$.ajax({
		type:'POST',
		async:false,
		url:'http://106.14.251.28:8081/userCenter/commonService/unlogin/applyRestPwd',
		data:{
			'accessToken':localStorage.accessToken,
			'msgId':st+'',
			'loginName':localStorage.loginName,
			//'appCode':'dd0557d8-ad20-4f41-a288-6f69862d5362',
			'noticeType':1,
		},
		success:function(json){
			console.log(json)
			if(json.retCode=='0000'){
				alert('已向'+$('.usemail').text()+'发送邮件')
			}else{
				alert('发送邮件失败')
			}
			/*if(json.retCode==0000){
				if(getCookie('lng')=='CN'){
					$('#hintBox').text('已发送邮件！').show();
				}else{
					$('#hintBox').text('E-mail sent！').show();
				}
				setTimeout(function(){
					$('#hintBox').text('').hide()
				},700)
			}else{
				if(getCookie('lng')=='CN'){
					$('#hintBox').text('修改失败！').show();
				}else{
					$('#hintBox').text('Failure！').show();
				}
				setTimeout(function(){
					$('#hintBox').text('').hide()
				},700)
			}*/
		},
	})

	
	
	
})
