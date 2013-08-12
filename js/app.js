$(document).ready(function(){
	
	//Для выравнивания акций и прайса на главной
	$(function() {
    	columnConform('#price_main .block');
	});
	$(window).resize(function() {
		columnConform('#price_main .block');
	}); 
	
	//Всплывающие фотки
	$(document).ready(function() {
		$(".zoom").fancybox();
	});
	
	//Каруселька с фотками
	$('.portfolio').each( function() {
		$('ul', $(this)).carouFredSel({
			prev: $('.prev', $(this) ),
			next: $('.next', $(this) )
		});
	});
	
});