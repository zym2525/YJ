
$('.tuideng').on('click',function(){
	localStorage.accessToken='';
	localStorage.loginName='';
	location='../../login.html'
})

$('.username').text(localStorage.loginName)
