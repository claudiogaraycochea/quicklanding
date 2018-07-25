function scrollToAnchor(aid){
	aid=aid.replace('#', '');
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$(document).ready(function() {
	var pull 		= $('#pull');
		menu 		= $('nav ul');
		menuHeight	= menu.height();

	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$('li a').on('click', function(e) {
		var w = $(window).width();
		if(w < 600) {
			e.preventDefault();
			menu.slideToggle();
			var aid = $(this).attr('href');
			scrollToAnchor(aid);
		}
		else{
			var aid = $(this).attr('href');
			scrollToAnchor(aid);
		}
	});

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 600 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
	
	$('.js-btn-sharesmartphone-more-info').on('click', function(e) {
		$('.js-sharesmartphone-more-info').attr('style','display:block;');
	});
    
    $('.btn-close').on('click',function(){
        $('.modal-wrapper').addClass('remove-modal');
    });

    $('#btn-video').on('click',function(){
        $('.modal-wrapper').removeClass('remove-modal');
    });

});


