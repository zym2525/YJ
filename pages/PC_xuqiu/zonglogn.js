/*function gongyou() {
				var t = new Date().getTime();
				$.ajax({
					type: 'POST',
					async: false,
					url: 'http://106.14.251.28:8081/userCenter/user/login',
					data: {
						'loginName': 'test3',
						'password': '123456',
						'appCode': '3d8b8241-d164-4efd-83ab-5e04bdc4154d',
						'clientId': '3d8b8241-d164-4efd-83ab-5e04bdc4154d',
						'companyCode': 'LYZB',
						'deviceCode': 'pc:32423',
						'msgId': t + ''
					},
					success: function(json) {
						console.log(json)
						if(json.retCode == 0000) {

							localStorage.getItem('accessToken', json.accessToken)
							//localStorage.api=json.accessToken
							//localStorage.setItem('accessToken3', json.accessToken)
							//sessionStorage.accessToken=json.accessToken
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
			gongyou()*/
			

function gongyou() {
				var t = new Date().getTime();
				$.ajax({
					type: 'POST',
					async: false,
					url: 'http://106.14.251.28:8081/userCenter/user/login',
					data: {
						'loginName': 'test3',
						'password': '123456',
						'appCode': 'dd0557d8-ad20-4f41-a288-6f69862d5362',
						'clientId': 'dd0557d8-ad20-4f41-a288-6f6986225362',
						'companyCode': 'LYZB',
						'deviceCode': 'pc:32423',
						'msgId': t + ''
					},
					success: function(json) {
						console.log(json)
						if(json.retCode == 0000) {

							//localStorage.getItem('zongToken', json.accessToken)
							localStorage.accessToken=json.accessToken

						} else {}
					},
					error: function(json) {
						console.log(json)
					}
				});
			}
			//gongyou()