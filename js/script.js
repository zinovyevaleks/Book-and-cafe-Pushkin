$ (function () {

    $('.nav-mobile-icon').click(function() {

    	$('.nav-list-mobile').addClass('mobile-menu-open');
		$('.nav-mobile-icon').hide();
		$('.nav-mobile-close').show();
    });
	$('.nav-mobile-close').click(function() {

    	$('.nav-list-mobile').removeClass('mobile-menu-open');
		$('.nav-mobile-icon').show();
		$('.nav-mobile-close').hide();
    });

    $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });

});
