function gongyou() {
				var t = new Date().getTime();
				$.ajax({
					type: 'POST',
					async: false,
					url: 'http://106.14.251.28:8081/userCenter/user/login',
					data: {
						'loginName': 'test1',
						'password': '123456',
						'appCode': 'dd0557d8-ad20-4f41-a288-6f69862d5362',
						'clientId': 'dd0557d8-ad20-4f41-a288-6f6986225362',
						'companyCode': 'testCompanyCode2',
						'deviceCode': 'pc:32423',
						'msgId': t + ''
					},
					success: function(json) {

						if(json.retCode == 0000) {

							localStorage.setItem('accessToken', json.accessToken)
							

						} else {
							alert('登录失败')
						}
					},
					error: function(json) {
						console.log(json)
						alert('登录失败')
					}
				});
			}
			//gongyou()