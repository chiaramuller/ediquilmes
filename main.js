

//code for slick slider; testimonial section 
$('.slider-container').slick({
	autoplay: true, // Do we want it to autoplay? true or false
	autoplaySpeed: 5000, // How long between each slide when auto-playing
	speed: 1000, // How fast is the transition in milliseconds
	arrows: true, // Do you want to show arrows to trigger each slide
	accessibility: true, // Enables keyboard tabbing and arrow key navigation
	dots: true, // Enables the dots below to show how many slides
	fade: false, // Changes the animate from slide to fade if true
	infinite: true, // When true, means that it will scroll in a circle
	pauseOnHover: false, // When true means the autoplay pauses when hovering
	pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
});

$('.slider-container-2').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	centerMode: true,
	variableWidth: true
});

$(document).ready(function(){
$('.slider-container-3').slick({
	dots: true,
	autoplaySpeed: 1500,
	autoplay: true,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	centerMode: true,
  });
});

	   

//Animate on scroll;
AOS.init();

$(".hamburger-button").click(function(){
    $(".nav-container").slideToggle();
    $(this).toggleClass("active");
    $('.close-button').toggleClass('active');
});

$(".close-button").click(function(){
    $(".nav-container").slideToggle();
    $(this).toggleClass("active");
    $('.hamburger-button').toggleClass('active');
});

//Filter Image Gallery
$('#portfolio-filter span').click(function(){
  
	//remove class "active" from any <span> tgat us currently active
	  $('#portfolio-filter .active').removeClass('active');
	  
	// give this <span> that was clicked on a class of 'active' 
	$(this).addClass('active');
	console.log(this);

	//get the name of the category from this span, remove up to two spaces from the text and replace them with dashes, make it lowercase, add replace until eliminated all of the space 
	var filterVal = $(this).attr('id');

	console.log(filterVal);
	//each function iterates through each element that matches the selector and applies the function one by one  
   $("#filterable-gallery .gallery-item").each(function(){
	 
	 //if the filter value that they have clicked on is "all" then remove the class of hidden from each gallery-item 
	 if(filterVal=="todas"){
	   $(this).removeClass("hidden");
	 }
	 
	 else{
	   if($(this).hasClass(filterVal)){
		 $(this).removeClass('hidden');
	   }
	   else{
		 $(this).addClass('hidden');
	   }
	 }
   });
	
	
  });
  
  