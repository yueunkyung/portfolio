$(function(){
    
    /* main_visual */
    $('.mv_sub_wrap').bxSlider({
        auto: true,
        autoControls:true,
        pause:3000
    });
    
    /* what's ur flavor */
    $('.n_w_sub').bxSlider({
        slideWidth:230,
        minSlides:3,
        maxSlides:5,
        moveSlides:2
    });
    
    $('.slogan1 p').fadeOut();
    $('.slogan2 div').fadeOut();
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $('.slogan1 p').eq(0).delay(0).fadeIn();
            $('.slogan1 p').eq(1).delay(500).fadeIn();
        }
        if($(this).scrollTop() > 2300){
            $('.slogan2 div').eq(0).delay(0).fadeIn();
        }
    });

}); //E