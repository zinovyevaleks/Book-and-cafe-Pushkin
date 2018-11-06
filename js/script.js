$ (function () {
	
    $('.nav-mobile-icon').click(function() {
    	$(this).toggleClass('open');
    	$('.nav-list-mobile').toggleClass('mobile-menu-open');
    });

    $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });

});
  
