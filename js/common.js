head.ready(function() {

	video_visible=false;
	3d_pic_visible=false;
	waterscreen_pic_visible=false;

	//$('.hashtag a').fancybox();
	
	$(".hashtag a").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
	$('.hashtag a').click(function(event) {
		//return false;
	});





	var agent = navigator.userAgent,
	event = (agent.match(/iPad/i)) ? "touchstart" : "click";

	$(document).bind(event, function(e){
		$(".js-popup").hide();
	});

	$('.sl').slick({
		  centerMode: true,
		  centerPadding: '60px',
		  slidesToShow: 5,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    }
		  ]
		});

	//console.log($('body').html());
});