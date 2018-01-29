$(document).ready(function(){

	var navbarHeight = $('#nav').height();

	var x = $('#nav').offset().top;
	  //Add Background to the Navigation when scrolling
	  if(x > 1){
	  	$('.navbar').addClass('scrolling');
	  }else{
	  	$('.navbar').removeClass('scrolling');
	  }

	//Smooth scrolling animation
	$('.scroll').on('click', function(e){
	  var href = $(this).attr('href');
	  $('html, body').animate({
	    scrollTop:$(href).offset().top-navbarHeight
	  },'slow');
	  e.preventDefault();
	});

	//Smooth scrolling animation without offset for the navigation
	$('.scroll-top').on('click', function(e){
	  var href = $(this).attr('href');
	  $('html, body').animate({
	    scrollTop:$(href).offset().top
	  },'slow');
	  e.preventDefault();
	});

	$(window).scroll(function() {
	  var x = $('#nav').offset().top;
	  //Add Background to the Navigation when scrolling
	  if(x > 1){
	  	$('.navbar').addClass('scrolling');
	  }else{
	  	$('.navbar').removeClass('scrolling');
	  }
	  //Scrollspy
	  $('section').each(function(index) {
	    var z = $(this).attr('id');
	    if (x+navbarHeight+1 > $(this).offset().top && x < $(this).offset().top + $(this).height() -navbarHeight) {
	      $('a.' + z).addClass('active');
	    } else {
	      $('a.' + z).removeClass('active');
	    }
	  })

	  //Appearing Elements
	  $('.appear').each( function(i){
        var top_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > top_of_object ){
            $(this).animate({'opacity':'1'},2000);
        }
      })
    }); 
});