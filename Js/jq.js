$(document).ready(function(){

	$(window).resize(function() {
    	if ($(window).width() > 1360) {
      	$('.b-nav--mobil').show()

      	}
      
    	else {
       		$('.b-nav--mobil').hide()
    	}
})

	function scrollToTop(sectionId) {
  		var targetScroll =  $(sectionId).offset().top;
  			$('html, body').animate({
      			scrollTop: (targetScroll - 100)
  				}, 500);
		}

	$('li a[href*="#"]').on('click', function(){
		sectionId = $(this).attr('href');
		scrollToTop(sectionId);
});
});