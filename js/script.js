$(window).on("load", function(){
	$(".loader .inner").fadeOut(500, function(){
		$(".loader").fadeOut(750);
	});
});

$(document).ready(function(){

	$('#slides').superslides({
		animation: 'fade',
		play: 4000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Software Engineer. ^1000","Backend Developer. ^1000","Android Framework. ^1000","UI/UX Designer. ^1000"],
		typeSpeed: 60,
		loop: true,
		nav: true,
		startDelay: 500,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 8,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    slideTransition: 'linear',
	    responsiveClass:true,
	    responsive: {
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

	var skillsTopOffset = $(".skillsSection").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;
	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
		            easing: 'easeInOut',
		            barColor: '#fff',
		            trackColor: '#0B0C10',
		            scaleColor: false,
		            lineWidth: 5,
		            size: 152,
		            onStep: function(from,to,percent) {
		            	$(this.el).find('.percent').text(Math.round(percent));
		            }
		        });

		}


		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$(".counter").each(function() {
				var element = $(this);
				var endVal = parseInt(element.text());

				element.countup(endVal);
			})

			countUpFinished = true;

		}


	});

	$("#navigation li a").click(function(e){
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPostion = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPostion - 50},"slow");
	});


	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll",stickyNavigation);

	function stickyNavigation() {
		var body = $("body");
		if($(window).scrollTop() >= navTop) {
			body.css("padding-top",nav.outerHeight() + "px");
			body.addClass("fixedNav");
		} else {
			body.css("padding-top",0);
			body.removeClass("fixedNav")
		}
	}

});

$('.js-wp-1').waypoint(function(direction) {
    $('.js-wp-1').addClass('animated fadeInDown');
}, {
    offset: '10%'
});

$('.js-wp-2').waypoint(function(direction) {
    $('.js-wp-2').addClass('animated swing');
}, {
    offset: '10%'
});