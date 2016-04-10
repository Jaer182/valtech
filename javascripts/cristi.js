(function () { "use strict";

	$(document).ready(function() {

		var categories = {
				all: "All Categories",
				category1: "Consulting",
				category2: "Data Analytics",
				category3: "Digital and Mobile Technologies",
				category4: "E-Commerce",
				category5: "Hardware",
				category6: "Information Technology",
				category7: "In-Store Analytics",
				category8: "In-Store Experience",
				category9: "Logistics",
				category10: "Loss Prevention",
				category11: "Mobile Enterprise",
				category12: "Multichannel",
				category13: "Point of Sale",
				category14: "Software",
				category15: "Storage and Distribution",
				category16: "Supply Chain Management",
				category17: "Big Data",
				category18: "Business Intelligence"
			};

		$('#active-category').text(categories.all);

		$('#mediafolio-filter li').on('click', function() {
			$('#active-category').text(categories[$(this).attr('data-filter')]);
		});

		$('.category-item').on('click', function() {
			var thisId = $(this).attr('id');
			
			$('#active-category').text(categories[$(this).attr('id')]);

	      	$('.' + thisId).css({
	      		'display': 'inline-block', 
	      		'opacity': 1,
	      		'transition': 'all .6s linear',
	      		'transform': 'scale(1)'
	      	});

	      	$(':not(.' + thisId + ')').removeAttr('style');
		});

		$('#valtech').on('click', function() {
			window.open('http://www.valtech.com','_blank');
		});
		
		$("body").bind("DOMSubtreeModified", function() {
			$('iframe').remove();
		});
	});
	
})();