jQuery(document).ready(function($) {
	new WOW().init();
	$(window).scroll(function(event) {
		var position = $('html,body').scrollTop();
		//console.log(position); đây là hàm lấy vị trí khi cuộn
		if(position>300){
			$('.header').addClass('sticky');
			$('.back-to-top').addClass('appear');
		}else{
			$('.header').removeClass('sticky');
			$('.back-to-top').removeClass('appear');
		}
	});
	$('.concept-layout-detail').hover(function() {
		$(this).find('.icobox:first').addClass('appear');
	}, function() {
		$(this).find('.icobox:first').removeClass('appear');
	});
});