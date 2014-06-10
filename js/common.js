head.ready(function() {


console.log('111');
$.getJSON( "http://coderiver.github.io/borjomi/test.json", function( data ) {
  console.log(data);
  console.log('----------');
   $.each( data, function( key, val ) {
    console.log( "<li id='" + key + "'>" + val + "</li>" );
  });
});

g = { 
"firstgallery":[
    {"small":"img/poster1.jpg", "big":"img/01.jpg"},
    {"small":"img/poster2.jpg", "big":"img/01.jpg"},
    {"small":"img/poster3.jpg", "big":"img/01.jpg"}
],
"secondgallery":[
    {"small":"img/poster4.jpg", "big":"img/01.jpg"},
    {"small":"img/poster5.jpg", "big":"img/01.jpg"},
    {"small":"img/poster6.jpg", "big":"img/01.jpg"}
]
};


function createg(arr, targetdiv,title){
	if(arr.length>0){
		preresult = '<div class="hashtag"><div class="hashtag__title"><span>#'+title+'</span></div><div id="hastag__feed">';
		postresult = '</div></div>'
		result = '';
		for (var i = 0; i < arr.length; i++) { 
	    	result = result + "<a class='fancybox' href='"+arr[i].big+"'><img src='"+arr[i].small+"' alt='' /></a>"
		}
		$('#'+targetdiv).html(preresult+result+postresult);

	}
}

a1 = g.firstgallery;
createg(a1,'firstgallery','borjomibus');




	//$('.hashtag a').fancybox();
	
	$(".fancybox").fancybox();





	// var agent = navigator.userAgent,
	// event = (agent.match(/iPad/i)) ? "touchstart" : "click";

	// $(document).bind(event, function(e){
	// 	$(".js-popup").hide();
	// });

	// $('.sl').slick({
	// 	  centerMode: true,
	// 	  centerPadding: '60px',
	// 	  slidesToShow: 5,
	// 	  responsive: [
	// 	    {
	// 	      breakpoint: 768,
	// 	      settings: {
	// 	        arrows: false,
	// 	        centerMode: true,
	// 	        centerPadding: '40px',
	// 	        slidesToShow: 3
	// 	      }
	// 	    },
	// 	    {
	// 	      breakpoint: 480,
	// 	      settings: {
	// 	        arrows: false,
	// 	        centerMode: true,
	// 	        centerPadding: '40px',
	// 	        slidesToShow: 1
	// 	      }
	// 	    }
	// 	  ]
	// 	});

	//console.log($('body').html());
});