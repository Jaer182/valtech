(function () { "use strict";

	$(document).ready(function() {
		$('.category-item').each(function() {
			$(this).attr('data-filter', $(this).attr('id'), true);
		});

		$('.category-item').on('click', function() {
			var thisId = $(this).attr('id');
			
	      	$('.' + thisId).css({
	      		'display':'inline-block', 
	      		'opacity':1,
	      		'transition': 'all .6s linear',
	      		'transform': 'scale(1)'
	      	});

	      	$(':not(.' + thisId + ')').removeAttr('style');
		});
	});
	
})();