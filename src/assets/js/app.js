//=require jquery.min.js

//=require what-input.min.js

// Core Foundation files
//=require foundation.core.min.js"
//=require foundation.util.*.min.js"

//=require foundation.dropdown.min.js"
//=require foundation.responsiveMenu.min.js"
//=require foundation.responsiveToggle.min.js"
//=require foundation.toggler.min.js"

// to inlude foundation plugins add "=" sign below
//
// require foundation.abide.min.js"
// require foundation.accordion.min.js"
// require foundation.accordionMenu.min.js"
// require foundation.drilldown.min.js"
// require foundation.dropdownMenu.min.js"
// require foundation.equalizer.min.js"
// require foundation.interchange.min.js"
// require foundation.magellan.min.js"
//=require foundation.offcanvas.min.js"
// require foundation.orbit.min.js"
// require foundation.reveal.min.js"
// require foundation.slider.min.js"
// require foundation.sticky.min.js"
// require foundation.tabs.min.js"
// require foundation.tooltip.min.js"
// require foundation.zf.responsiveAccordionTabs.min.js"

//=require foundation.smoothScroll.js
//=require slick.min.js
//=require map.js


;(function($){
	$(document).foundation();

	$(document).ready(function(){
		var $slider = $('.ba-slider');

		$slider.slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			prevArrow: '.ba-slider-prev',
			nextArrow: '.ba-slider-next',
		 });


	});



	$(document).ready(function(){
		var $slider = $('.ba-team__slider');

		$slider.slick({
			dots: false,
			infinite: true,
			slidesToShow: 3,
			slide: '.ba-team__slide',
			variableWidth: false,
			prevArrow: '.ba-team-prev',
			nextArrow: '.ba-team-next',
			responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
				}

			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}

			]
		 });


	});



	var header = $(".ba-header"),
	    scrollTop;

	    window.addEventListener('scroll', fixHeader);

	    function fixHeader() {
	        scrollTop = window.pageYOffset;
	        if (scrollTop >= 150) {
	            header.addClass('ba-stick');
	        } else{
	            header.removeClass('ba-stick');

	        }
	    }

	    fixHeader();

})(jQuery);



















