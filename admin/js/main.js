
$('[type="reset"]').on('click',function(){
	$('[name="smdg"]').removeAttr('data-code')
	$('[name="mdg"]').removeAttr('data-code')
	
	//$('[name="mdg"]').attr('data-code','')
	//$('[name="smdg"]').attr('data-code','')
	//$('.bcgs').attr('data-code','')
	//$('.sbcgs').attr('data-code','')
	$('.bcgs').removeAttr('data-code')
	$('.sbcgs').removeAttr('data-code')
	$('.shx').removeAttr('data-code')
})

$(document).ready(function(){
			//方法一：
			$('.panelclick .panel-heading a').on('click',function(){
				$('.panelclick .panel-heading a').removeClass('active');
				
				$('.panelclick .panel-heading a').children('i.pull-right').removeClass('fa-angle-down').addClass('fa-angle-left')
				if($(this).attr('aria-expanded')=='true'){
					$(this).children('i.pull-right').removeClass('fa-angle-down').addClass('fa-angle-left')
					$(this).removeClass('active')
				}else{		
					$(this).children('i.pull-right').removeClass('fa-angle-left').addClass('fa-angle-down')
					$(this).addClass('active')
				}
			})
			
			/*
			 //方法二：
			  $('.panelclick').on('click',function(){
				$('.panelclick').find('i.pull-right').removeClass('fa-angle-down').addClass('fa-angle-left')
				if($(this).children('.panel-collapse').hasClass('in')){					
					$(this).find('i.pull-right').removeClass('fa-angle-down').addClass('fa-angle-left')
				}
				else{
					$(this).find('i.pull-right').removeClass('fa-angle-left').addClass('fa-angle-down')
				}
			})*/
		})


if($('body').width()<900){
	$('body').addClass('seiderleft')
	$('.panelclick .panel-heading a').attr('data-toggle','')
		$('.scroll').css('overflow','visible');
       	$('.slimScrollDiv').css('overflow','visible')
       	$('.seider-after').css('position','absolute')
       	$('.panel-collapse').removeClass('in')
}

$('.clickbtn').on('click',function(){
		
	
	if($('body').hasClass('seiderleft')){
       	$('body').removeClass('seiderleft')
       	$('.scroll').css('overflow','hidden');
       	$('.slimScrollDiv').css('overflow','hidden')
       	$('.seider-after').css('position','fixed')
       	$('.panelclick .panel-heading a').attr('data-toggle','collapse')
		
	}else{
		
       $('body').addClass('seiderleft')
       $('.scroll').css('overflow','visible');
       	$('.slimScrollDiv').css('overflow','visible')
       	$('.seider-after').css('position','absolute')
       $('.panelclick .panel-heading a').attr('data-toggle','')
		$('.panel-collapse').removeClass('in')
	}
	
})


$('.panelclick').hover(function(){
	if($('body').hasClass('seiderleft')){
		$(this).find('.panel-collapse').addClass('in');
		
	}
	
},function(){
	if($('body').hasClass('seiderleft')){
		$(this).find('.panel-collapse').removeClass('in');
		
	}
	
})

window.onresize=function(){
	if($('body').width()<900){
	$('body').addClass('seiderleft')
	if($('body').hasClass('seiderleft')){
		$('.panelclick .panel-heading a').attr('data-toggle','')
		$('.scroll').css('overflow','visible');
       	$('.slimScrollDiv').css('overflow','visible')
       	$('.seider-after').css('position','absolute')
       	$('.panel-collapse').removeClass('in')
	}else{
		$('.panelclick .panel-heading a').attr('data-toggle','collapse')
		$('.scroll').css('overflow','hidden');
       	$('.slimScrollDiv').css('overflow','hidden')
       	$('.seider-after').css('position','fixed')
	}
}else{
	$('body').removeClass('seiderleft')
	if($('body').hasClass('seiderleft')){
		$('.panelclick .panel-heading a').attr('data-toggle','')
		$('.scroll').css('overflow','visible');
       	$('.slimScrollDiv').css('overflow','visible')
       	$('.seider-after').css('position','absolute')
       	$('.panel-collapse').removeClass('in')
	}else{
		$('.panelclick .panel-heading a').attr('data-toggle','collapse')
		$('.scroll').css('overflow','hidden');
       	$('.slimScrollDiv').css('overflow','hidden')
       	$('.seider-after').css('position','fixed')
	}
}

}

