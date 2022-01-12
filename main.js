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

//Animate on scroll;
AOS.init();