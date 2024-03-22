$(function(){
    function mvType(){
        var typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            typeSpeed:40
        });
    };
    $(".mv_wrap").bxSlider({
        auto:true,
        pause:6000,
        onSliderLoad:function(currentIndex){
            mvType();
        }
    });
    $(".mv_wrap, .ri_mainvisual_wrap .bx-wrapper .bx-controls-direction a").mouseover(function(){
        $(".ri_mainvisual_wrap .bx-wrapper .bx-controls-direction a").addClass("on")
    });
    $(".mv_wrap, .ri_mainvisual_wrap .bx-wrapper .bx-controls-direction a").mouseout(function(){
        $(".ri_mainvisual_wrap .bx-wrapper .bx-controls-direction a").removeClass("on")
    });
    $(window).scroll(function(){
        calSct=$(this).scrollTop();
        if(calSct>=4200){
            $(".ri_wait_wrap>p>span").addClass("on");
        }
    });
}); //E